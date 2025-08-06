import { Layout, Menu } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
import "./index.scss";
import AppHeader from "@/components/AppHeader";
import AppBreadcrumb from "@/components/AppBreadcrumb";
import AppSider from "@/components/AppSider";
import useMediaQuery, { mediaQueryPoints } from "@/hooks/useMediaQuery";

const { Content } = Layout;

function MainLayout() {
  const isMobile = useMediaQuery(`(max-width: ${mediaQueryPoints.md}px)`)
  return (
    <Layout>
      {
        isMobile ? null : <AppSider />
      }
      <Layout>
        <AppHeader />
        <Content className='site-layout-content'>
          <AppBreadcrumb />
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default MainLayout;
