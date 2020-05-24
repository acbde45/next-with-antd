import Document, { Head, Main, NextScript } from 'next/document';
import Router from 'next/router';
import NProgress from 'nprogress';
import pkg from '../../package.json';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1"
          />
          <meta name="theme-color" content="#72B340" />
          <link rel="manifest" href="/static/manifest.json" />
          <link rel="icon" href="/static/img/favicon.ico" />
          <link
            href={`https://cdn.jsdelivr.net/npm/antd@${pkg.dependencies.antd}/dist/antd.min.css`}
            rel="stylesheet"
          />
          <link href="/static/css/nprogress.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
