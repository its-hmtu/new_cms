import { Avatar, Badge, Button, Popover, Space } from "antd";
import React, { useState } from "react";
import AppDropdown from "../AppDropdown";
import LogoutModal from "../AppModal/LogoutModal";
import "./index.scss";
import { HeaderGroup, StyledHeader } from "./components/styles";
import useMediaQuery, { mediaQueryPoints } from "@/hooks/useMediaQuery";
import { BellIcon, LogOutIcon, MenuIcon, UsersIcon, XIcon } from "lucide-react";
import avatar from "@/assets/images/avatar.png";

function AppHeader({ setOpenDrawer }) {
  const [openModal, setOpenModal] = useState(false);
  const [openPopover, setOpenPopover] = useState(false);
  const isMobile = useMediaQuery(`(max-width: ${mediaQueryPoints.md}px)`);

  return (
    <StyledHeader theme='light'>
      {isMobile && (
        <Button
          type='text'
          className='menu-button'
          onClick={() => setOpenDrawer(true)}
        >
          <MenuIcon size={20} color='#6c737f' />
        </Button>
      )}

      <HeaderGroup>
        <Popover
          open={openPopover}
          content={
            <div>Notifications</div>
          }
          title={
            <Space className='popover-title' style={{ 
              width: '100%',
              justifyContent: 'space-between'
            }}>
              <h3>Notifications</h3>
              <Button
                type='text'
                onClick={() => setOpenPopover(false)}
                className='close-button'
                style={{ padding: 0}}
              >
                <XIcon size={16} />
              </Button>
            </Space>
          }
          trigger='click'
          onOpenChange={(visible) => setOpenPopover(visible)}
        >
          <Button
            type='text'
            className='header-button'
          >
            <Badge count={5} size='small'>
              <BellIcon size={20} color='#6c737f' />
            </Badge>
          </Button>
        </Popover>
        <Button type='text' className='header-button'>
          <UsersIcon size={20} color='#6c737f' />
        </Button>
        <div>
          <AppDropdown
            options={[
              {
                key: "1",
                label: "Sign out",
                icon: <LogOutIcon size={14} />,
                onClick: () => setOpenModal(true),
              },
            ]}
            onChange={(item) => item.onClick()}
            overlayStyle={{ minWidth: "150px" }}
            arrow
          >
            <Avatar src={avatar} size={40} />
          </AppDropdown>
        </div>
      </HeaderGroup>

      <LogoutModal openModal={openModal} setOpenModal={setOpenModal} />
    </StyledHeader>
  );
}

export default AppHeader;
