import React from 'react';
import { Layout,Avatar,Menu, Breadcrumb } from 'antd';
import './App.css';
import {  MailOutlined,UserOutlined } from '@ant-design/icons';
import Hello from './component/Hello'
import OptionRadio from './component/OptionRadio';
import Title from 'antd/lib/typography/Title';
const {Header,Sider, Content,Footer } = Layout;
const { SubMenu } = Menu;


function App() {
  return (
    <div className="App">
     <Layout>
    <Header style={{padding:10}}>
        <Avatar style={{float:'right'}} icon={<UserOutlined />} />
        <Title style={{color:'white'}} level={3}>Manish</Title>
        </Header>
     <Layout>
      <Sider>
        <Menu defaultSelectedKeys={['Dashboard']}
          mode="inline">
        
          <Menu.Item key='Dashboard'>
            Dashboard
          </Menu.Item>
          <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
          <Menu.ItemGroup key="g1" title="Item 1">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
      <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight:580}}>
        <p>Hello<br/> How are You !!</p>
        <Hello/>
        <OptionRadio/>
        </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design Layout Created by Manish</Footer>
      </Layout>
      </Layout>
    </Layout>
    </div>
  );
}

export default App;
