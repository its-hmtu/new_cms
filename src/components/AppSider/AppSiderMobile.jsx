import { Menu } from "antd";
import React, { useEffect } from "react";
import "./index.scss";
import { StyledDrawer } from "./components/styles";
import useSider from "./hooks/useSider";
import { useLocation } from "react-router-dom";

function AppSiderMobile({ openDrawer, setOpenDrawer }) {
  // const { hasUnsaved } = useUnsaved();
  // const navigate = useNavigate();
  const { menuItems, selectedKey, defaultOpenKeys } = useSider();
  const location = useLocation();

  useEffect(() => {
    if (openDrawer) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openDrawer]);

  useEffect(() => {
    const handleLocationChange = () => {
      if (openDrawer) {
        setOpenDrawer(false);
      }
    };

    return () => {
      handleLocationChange();
    };
  }, [location.pathname, openDrawer]);

  return (
    <StyledDrawer
      open={openDrawer}
      placement='left'
      width={270}
      closable
      onClose={() => setOpenDrawer(false)}
      title={
        <div className='sider-logo'>
          <img src='/logo.png' alt='SMSGW 2.0' />
          <p>
            SMSGW
            <span>2.0</span>
          </p>
        </div>
      }
      closeIcon={false}
    >
      <Menu
        theme='dark'
        mode='inline'
        selectedKeys={selectedKey}
        defaultOpenKeys={defaultOpenKeys}
        openKeys={defaultOpenKeys}
        items={menuItems}
      />
    </StyledDrawer>
  );
}

export default AppSiderMobile;
