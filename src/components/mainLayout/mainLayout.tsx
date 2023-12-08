import type { MenuProps } from 'antd';
import { Layout, theme } from 'antd';
import SiderX from '../sider/menuSider';
import { Outlet } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

const { Header, Content, Footer } = Layout;

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));


const MainLayout: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  return (
    <Layout>
      <Content style={{ padding: '0px' }}>
        <Layout style={{ padding: '10px 0', background: colorBgContainer,  }}>
         <SiderX />
          <Content style={{
            overflow: isMobile ? "hidden" :'cover',
            padding: isMobile ?   '0' : '0 24px',
            minHeight: 500,
            margin: isMobile ? '0' : "0px 16px",
            background: colorBgContainer, 
            maxWidth: isMobile ? "inherits" : "inherits" 
            }}><Outlet /></Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  );
};

export default MainLayout;