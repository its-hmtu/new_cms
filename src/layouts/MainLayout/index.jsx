import { Button, Layout, Space } from "antd";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./index.scss";
import AppHeader from "@/components/AppHeader";
import AppBreadcrumb from "@/components/AppBreadcrumb";
import AppSider from "@/components/AppSider";
import useMediaQuery, { mediaQueryPoints } from "@/hooks/useMediaQuery";
import AppSiderMobile from "@/components/AppSider/AppSiderMobile";
import dayjs from "dayjs";
import { RotateCcwIcon } from "lucide-react";
import styled from "styled-components";

const { Content } = Layout;

function MainLayout() {
  const isMobile = useMediaQuery(`(max-width: ${mediaQueryPoints.md}px)`);
  const [openDrawer, setOpenDrawer] = useState(false);
  const currentDate = dayjs().format("dddd, MMMM DD, YYYY");
  const isMobileXs = useMediaQuery(`(max-width: ${mediaQueryPoints.xs}px)`);

  return (
    <Layout>
      {isMobile ? (
        <AppSiderMobile openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      ) : (
        <AppSider />
      )}
      <Layout>
        <AppHeader setOpenDrawer={setOpenDrawer} />
        <Content className='site-layout-content'>
          <div className='current-date'>
            <p>{currentDate}</p>
          </div>
          <StyledSpace>
            <AppBreadcrumb />

            <Button
              type='primary'
              icon={<RotateCcwIcon size={16} />}
              style={{ alignItems: "center" }}
            >
              {isMobileXs ? "" : "Sync Data"}
            </Button>
          </StyledSpace>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default MainLayout;

const StyledSpace = styled(Space)`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  button {
    background: #6366f1;
    font-weight: 500;
    border-radius: 12px;

    &:hover {
      background: #4f46e5 !important;
    }

    &:active,
    &:focus {
      background: #6366f1;
    }

    @media (min-width: 768px) {
      min-height: 40px;
    }

    .ant-btn-icon {
      font-weight: 500;
      width: 16px;
      height: 16px;
    }
  }
`;
