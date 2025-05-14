import  { useState } from 'react';
import {  MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';


const Header = () => {
    const items = [
{
label: <Link to={"/"}>Home Page</Link>,
key: 'home',
icon: <MailOutlined />,
},

{
label: 'Welcome',
key: 'SubMenu',
icon: <SettingOutlined />,

children: [
{
label: 'Login',
key: 'login',
},
{
label: 'Logout',
key: 'logout',
},
],



},
{
label: <Link to={"/user"}>Users</Link> ,
key: 'users',
icon: <SettingOutlined />,

children: [
{
label: 'Login',
key: 'login',
},
{
label: 'Logout',
key: 'logout',
},
],



},
];
const [current, setCurrent] = useState('mail');
const onClick = (e) => {
console.log('click ', e);
setCurrent(e.key);
};
return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default Header;