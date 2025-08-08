import { Menu } from "antd";
import React, { useState } from "react";
import "./index.scss";
import { PanelLeftCloseIcon, PanelRightCloseIcon } from "lucide-react";
import { StyledSider, ToggleSider } from "./components/styles";
import useSider from "./hooks/useSider";

function AppSider() {
  const [collapsed, setCollapsed] = useState(false);
  // const { hasUnsaved } = useUnsaved();
  // const navigate = useNavigate();
  const { menuItems, selectedKey, defaultOpenKeys } = useSider();
  return (
    <StyledSider
      collapsible
      width={270}
      theme='dark'
      breakpoint='lg'
      onBreakpoint={(broken) => {
        if (broken) setCollapsed(true);
      }}
      trigger={
        <ToggleSider
          onClick={() => {
            setCollapsed((prev) => !prev);
          }}
          collapsed={collapsed}
        >
          {collapsed ? (
            <PanelRightCloseIcon size={16} />
          ) : (
            <PanelLeftCloseIcon size={16} />
          )}
        </ToggleSider>
      }
      collapsed={collapsed}
    >
      <div className='sider-logo'>
        <img
          src='/logo.png'
          alt='SMSGW 2.0'
          className={`${collapsed ? "logo-collapsed" : ""}`}
        />
        {!collapsed ? (
          <p>
            SMSGW
            <span>2.0</span>
          </p>
        ) : null}
      </div>
      <Menu
        theme='dark'
        mode='inline'
        selectedKeys={selectedKey}
        defaultOpenKeys={defaultOpenKeys}
        openKeys={defaultOpenKeys}
        items={menuItems}
      />
    </StyledSider>
  );
}

export default AppSider;
