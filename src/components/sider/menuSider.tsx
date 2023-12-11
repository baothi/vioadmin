import { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import MenuItem from 'antd/es/menu/MenuItem';
import './sider.scss'

const {Sider } = Layout
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 1', '1'),
    getItem('Option 2', '2'),
    getItem('Option 3', '3'),
    getItem('Option 4', '4'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  
  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
  getItem('User', 'sub5', <UserOutlined />, [
    getItem('Profile', '13'),
    getItem('Log out', '14'),
    
  ]),
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const SiderX: React.FC = () => {
  const [openKeys, setOpenKeys] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
 
  return (  
    <Sider 
    className="sider"
    collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}
    reverseArrow={true} 
    breakpoint="md" 
    collapsedWidth="0" 
    >
      <div className="sider-logo">
        <img className='vio-logo' src='./src/assets/viofull-logo.png' alt="vio-logo" ></img>
      </div>
      <Menu
      className='sider-menu'
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      items={items}
      />  
    </Sider>
  );
};

export default SiderX;