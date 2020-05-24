import { useState, memo } from 'react';
import Link from 'next/link';
import { Layout as AntLayout, BackTop, Menu, Breadcrumb } from 'antd';
import '@/styles/layout.less';

const { Header, Content, Footer, Sider } = AntLayout;
const { SubMenu } = Menu;

function AppLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div id="site-layout-continaer">
      <AntLayout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['-1']} mode="inline">
            <Menu.Item key="-1">
              <Link href="/">
                <a>首页</a>
              </Link>
            </Menu.Item>
            <SubMenu key="0" title="物">
              <Menu.Item key="01">
                <Link href="/thing/thing-type">
                  <a>物模型</a>
                </Link>
              </Menu.Item>
              <Menu.Item key="02">
                <Link href="/thing/thing-instance">
                  <a>物实例</a>
                </Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>

        <AntLayout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <Content>{children}</Content>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </AntLayout>
      </AntLayout>

      <BackTop />
    </div>
  );
}

export default memo(AppLayout);
