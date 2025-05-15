import { useEffect, useState } from 'react';

import { Table, message, notification } from 'antd';
import { getListUser } from '../util/api'; // Replace with your actual API function

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);


  
  useEffect(() => {
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await getListUser(); // Fetch users from API
      console.log("Users:", response);
      if (!response?.message) {
        setUsers(response); // Assuming response is an array of users
      } else {
        notification.error({
          message: "Error",
          description: response.message,
        });
       
      }
    } catch (error) {
      message.error("Failed to fetch users. Please try again later.");
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchUsers();
}, []);

  const columns = [
    
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>User Page</h1>
      <Table
        dataSource={users}
        columns={columns}
        loading={loading}
        rowKey="_id"
        bordered
      />
    </div>
  );
};

export default UserPage;