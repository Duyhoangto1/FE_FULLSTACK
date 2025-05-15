import  { useContext, useState } from 'react';
import {  MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/auth.context';


const Header = () => {
    const navigate = useNavigate();
    const {auth, setAuth} = useContext(AuthContext);
    console.log("Auth context in header", auth);
    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        setCurrent("home");
        navigate("/");
        setAuth({
        isAuthenticated: false,
        user: {
          email: "",
          name:  "",
          role:  "",
        },
      });
        
    };
    const items = [
        {
        label: <Link to={"/"}>Home Page</Link>,
        key: 'home',
        icon: <MailOutlined />,
        },

        ...(auth.isAuthenticated ? [{
        label: <Link to={"/user"}>Users</Link> ,
        key: 'users',
        icon: <SettingOutlined />,
        },] : []),

        {
        label: `Welcome ${auth?.user?.email}`,
        key: 'SubMenu',
        icon: <SettingOutlined />,

        children: [
            ...(auth.isAuthenticated ? [{
        label:<span onClick={handleLogout}>LogOut</span>,
        key: 'logout',
        },] : [{
        label: <Link to={"/login"}>Login</Link>,
        key: 'login',
        },]),


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