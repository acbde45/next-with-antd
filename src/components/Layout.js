import Head from 'next/head';
import { Layout, BackTop } from 'antd';
import 'isomorphic-fetch';
import pkg from '../../package.json';

// Router.onRouteChangeStart = () => NProgress.start()
// Router.onRouteChangeComplete = () => NProgress.done()
// Router.onRouteChangeError = () => NProgress.done()

const { Content } = Layout;

const LayoutPage = ({ children, title = '主页' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1"
      />
      <link
        href={`https://cdn.jsdelivr.net/npm/antd@${pkg.dependencies.antd}/dist/antd.min.css`}
        rel="stylesheet"
      />
    </Head>

    <Content>{children}</Content>

    <BackTop />
  </div>
);

export default LayoutPage;
