import { Layout, theme } from 'antd';
import SiderX from '../sider/menuSider';
import { Outlet } from "react-router-dom";
import './mainLayout.scss'

const {Content, Footer } = Layout;

const MainLayout: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Content className='main-content' >
        <Layout className='main-layout' style={{background: colorBgContainer}}>
         <SiderX />
          <Content className='sub-content' style={{background: colorBgContainer, }}
            ><Outlet />
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  );
};

export default MainLayout;