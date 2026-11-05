import React,{useEffect} from 'react';
import { Card, Avatar, Descriptions, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

function Profile() {
 const [userData,setUserData]=React.useState(localStorage.getItem("user"))
 const user = userData ? JSON.parse(userData) : {};
  useEffect(() => {
    const handleAuthChange = () => {
      setUserData(localStorage.getItem("user"));
    };
 
    window.addEventListener("authChange", handleAuthChange);
 
    return () => {
      window.removeEventListener("authChange", handleAuthChange);
    };
  }, []);
 
 
  return (
    <div className="page profile-page">
      <Card className="profile-card">
        <div className="profile-header">
          <Avatar size={90} icon={<UserOutlined />} />

          <h2>{user.username}</h2>
          <p>{user.email}</p>
        </div>

        <div className="profile-details">
          <h3>Account Information</h3>

          <Descriptions column={1} bordered>
            <Descriptions.Item label="User Name">
              {user.username}
            </Descriptions.Item>

            <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
          </Descriptions>
        </div>
      </Card>
    </div>
  );
}

export default Profile