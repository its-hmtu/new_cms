import { Avatar, Space } from "antd";
import React, { useState } from "react";
import AppDropdown from "../AppDropdown";
import LogoutModal from "../AppModal/LogoutModal";
import { LogoutOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import PATH from "@/configs/paths/PATH";
import "./index.scss";
import { StyledHeader } from "./components/styles";

function AppHeader() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <StyledHeader theme='light'>
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
            <Avatar className='bg-gray-400 mb-1' />
          </Space>
        </AppDropdown>

        <LogoutModal openModal={openModal} setOpenModal={setOpenModal} />
      </Space>
    </StyledHeader>
  );
}

export default AppHeader;
