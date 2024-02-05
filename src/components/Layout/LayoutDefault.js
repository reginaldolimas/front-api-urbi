import React, { useEffect, useState } from 'react';
import './LayoutDefault.css';
import logo from '../../img/logo.png';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import ProcessList from '../ProcessList/ProcessList';
import { Link, useLocation } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];
console.log('aquiiiii',items);
console.log('aquiiiii',items.length);
const LayoutDefault = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [breadcrumbItems, setBreadcrumbItems] = useState([]);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleMenuClick = (keyPath) => {
    setBreadcrumbItems(keyPath.reverse()); // Reverse the keyPath to match breadcrumb order
  };

  useEffect(() => {
    // Set the default breadcrumb items when the component mounts
    setBreadcrumbItems(['1']);
  }, []);

  function itemRender(route, params, items, paths) {
    /* const location = useLocation(); */
    const last = items.indexOf(route) === items.length - 1;
    return last ? <span>{route.label}</span> : <Link to={paths.join('/')}>{route.label}</Link>;
  }


  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical">
          <img src={logo} alt="logo" style={{ width: '170px' }} />
        </div>
        <Menu theme="dark" 
        defaultSelectedKeys={['1']} 
        mode="inline" 
        items={items} 
        onClick={({ keyPath }) => handleMenuClick(keyPath)} 
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
            itemRender={itemRender}
            items={items}
            routes={breadcrumbItems.map((key) => items.find((item) => item.key === key))}
          />
       {/*      {breadcrumbItems.map((key, index) => {
              const selectedItem = items.find((item) => item.key === key);
              const isLastItem = index === breadcrumbItems.length - 1;

              return (
                <Breadcrumb.Item key={key}>
                  {isLastItem ? selectedItem.label : (
                    <span onClick={() => setBreadcrumbItems(breadcrumbItems.slice(0, index + 1))}>
                      {selectedItem.label}
                    </span>
                  )}
                </Breadcrumb.Item>
              );
            })} */}
            {/*     {breadcrumbItems.map((key) => {
              const selectedItem = items.find((item) => item.key === key);
              return selectedItem ? (
                <Breadcrumb.Item key={key}>{selectedItem.label}</Breadcrumb.Item>
              ) : null;
            })} */}
            {/*  {breadcrumbItems.map((key) => (
              <Breadcrumb.Item key={key}>{items.find((item) => item.key === key).label}</Breadcrumb.Item>
            ))} */}
            {/* <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
          {/* </Breadcrumb> */}
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <ProcessList />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          ©2023. Todos os direitos reservador - Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default LayoutDefault;