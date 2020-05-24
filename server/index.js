const dev = process.env.NODE_ENV !== "production";

const next = require("next");
const express = require("express");
const LRUCache = require("lru-cache");
const mobxReact = require("mobx-react");

const ssrCache = new LRUCache({
  max: 1000, // cache item count
  maxAge: 1000 * 60 * 60, // 1 hour
});

const app = next({ dev, quiet: false });
const handle = app.getRequestHandler();

mobxReact.useStaticRendering(true);

const SERVE_PORT = parseInt(process.env.PORT, 10) || 3000;

app.prepare().then(() => {
  const server = express();

  server.get("/", async (req, res) => {
    renderAndCache(req, res, "/", { ...req.query });
  });

  server.get("*", (req, res) => handle(req, res));

  server.listen(SERVE_PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${SERVE_PORT}`);
  });
});

const getCacheKey = (req) => `${req.url}`;

// 缓存并渲染页面，具体是重新渲染还是使用缓存
async function renderAndCache(req, res, pagePath, queryParams) {
  const key = getCacheKey(req);
  if (ssrCache.has(key)) {
    res.setHeader("x-cache", "HIT");
    res.send(ssrCache.get(key));
    return;
  }

  try {
    const html = await app.renderToHTML(req, res, pagePath, queryParams);

    // Something is wrong with the request, let's skip the cache
    if (res.statusCode !== 200) {
      res.send(html);
      return;
    }

    // Let's cache this page
    ssrCache.set(key, html);

    res.setHeader("x-cache", "MISS");
    res.send(html);
  } catch (err) {
    app.renderError(err, req, res, pagePath, queryParams);
  }
}
