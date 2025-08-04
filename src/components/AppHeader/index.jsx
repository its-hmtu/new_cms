import { Avatar, Layout, Space } from "antd";
import React, { useState } from "react";
import AppDropdown from "../AppDropdown";
import LogoutModal from "../AppModal/LogoutModal";
import { LogoutOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import PATH from "@/configs/paths/PATH";
import useAuth from "@/features/Auth/hooks/useAuth";

const { Header } = Layout;

function AppHeader() {
  const {
    user,
  } = useAuth();
  const [openModal, setOpenModal] = useState(false);
  console.log(user)
  return (
    <Header theme='light'>
      <Space className='items-center justify-between w-full h-full pl-7'>
        <div className='logo flex items-center justify-start flex-row gap-2 h-full'>
          <Link to={PATH.HOME}>
            {/* <img
              src='/logo.png'
              alt='Magic Wheel'
              className='aspect-auto w-24 h-auto'
            /> */}
          </Link>
        </div>
        <AppDropdown
          options={[
            {
              key: "1",
              label: "Sign out",
              icon: <LogoutOutlined />,
              onClick: () => setOpenModal(true),
            },
          ]}
          onChange={(item) => item.onClick()}
          placement='bottomRight'
          overlayStyle={{ minWidth: "150px" }}
        >
          <Space className='items-center h-fit justify-between gap-4'>
            <p className='font-medium'>
              Hello, <span className='font-normal'>{user?.fullname}</span>
            </p>

            <Avatar className='bg-gray-400 mb-1' />
          </Space>
        </AppDropdown>

        <LogoutModal openModal={openModal} setOpenModal={setOpenModal} />
      </Space>
    </Header>
  );
}

export default AppHeader;
