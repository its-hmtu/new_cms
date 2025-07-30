import { Layout, Menu } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
import "./index.scss";
import AppHeader from "@/components/AppHeader";
import AppBreadcrumb from "@/components/AppBreadcrumb";
import AppSider from "@/components/AppSider";

const { Content, Sider } = Layout;

function MainLayout() {
  return (
    <Layout>
      <AppHeader />
      <Layout>
        <AppSider />
        <Content className="site-layout-content">
          <AppBreadcrumb />
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default MainLayout;
