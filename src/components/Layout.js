import Head from 'next/head';
import Router from 'next/router';
import { Layout as AntLayout, BackTop } from 'antd';
import 'isomorphic-fetch';
import NProgress from 'nprogress';
import pkg from '../../package.json';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const { Content } = AntLayout;

const AppLayout = ({ children, title = '主页' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1"
      />
      <link rel="manifest" href="static/manifest.json" />
      <link rel="icon" href="static/img/favicon.ico" />
      <link
        href={`https://cdn.jsdelivr.net/npm/antd@${pkg.dependencies.antd}/dist/antd.min.css`}
        rel="stylesheet"
      />
      <link href="/static/css/nprogress.css" rel="stylesheet" />
    </Head>

    <Content>{children}</Content>

    <BackTop />
  </div>
);

export default AppLayout;
