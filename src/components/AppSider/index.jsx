import { Layout, Menu } from "antd";
import React, { useState, useEffect, useMemo } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import { UnsavedChangesModal } from '../AppModal/modals';
// import { useUnsaved } from "@/contexts/UnsavedContext";
import PATH from "@/configs/paths/PATH";
import {
  BarChartOutlined,
  CompassOutlined,
  ProductOutlined,
  ProfileOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  SolutionOutlined,
  StopOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

function AppSider() {
  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState([]);
  // const { hasUnsaved } = useUnsaved();
  const navigate = useNavigate();
  const items = useMemo(
    () => [
      {
        key: "report",
        icon: <BarChartOutlined />,
        label: "Report",
        children: [
          {
            key: "revenue",
            label: "Revenue",
            path: PATH.REPORT.REVENUE,
          },
          {
            key: "register",
            label: "Register",
            path: PATH.REPORT.REGISTER,
          },
          {
            key: "prize-stats",
            label: "Prize Statistics",
            path: PATH.REPORT.PRIZE_STATS,
          },
          {
            key: "login-stats",
            label: "Login Statistics",
            path: PATH.REPORT.LOGIN_STATS,
          },
        ],
      },
      {
        key: "prize-management",
        icon: <ProductOutlined />,
        label: "Prize Management",
        path: PATH.PRIZE_MANAGEMENT.ROOT,
      },
      {
        key: "customer-care",
        icon: <UserOutlined />,
        label: "Customer Care",
        children: [
          {
            key: "charge-history",
            label: "Charge History",
            path: PATH.CUSTOMER_CARE.CHARGE_HISTORY,
          },
          {
            key: "register-cancel-history",
            label: "Register/Cancel History",
            path: PATH.CUSTOMER_CARE.REGISTER_CANCEL_HISTORY,
          },
          {
            key: "free-play",
            label: "Free Play History",
            path: PATH.CUSTOMER_CARE.FREE_PLAY,
          },
          {
            key: "solo-mode-play-history",
            label: "Solo Mode Play History",
            path: PATH.CUSTOMER_CARE.SOLO_MODE_PLAY_HISTTORY,
          },
        ],
      },
      {
        key: "missions",
        icon: <ProfileOutlined />,
        label: "Missions",
        path: PATH.MISSIONS.ROOT,
      },
      {
        key: "topics",
        icon: <QuestionCircleOutlined />,
        label: "Topics",
        path: PATH.TOPIC.ROOT,
      },

      {
        key: "topic-answers",
        icon: <SolutionOutlined />,
        label: "Topic Answers",
        path: PATH.TOPIC_ANSWER.ROOT,
      },
      {
        key: "wheel",
        icon: <CompassOutlined />,
        label: "Wheel",
        path: PATH.WHEEL.ROOT,
      },
      {
        key: "msisdn-block",
        icon: <StopOutlined />,
        label: "MSISDN Block",
        path: PATH.MSISDN_BLOCK.ROOT,
      },
      {
        key: "config",
        icon: <SettingOutlined />,
        label: "Configuration",
        path: PATH.CONFIG,
      },
    ],
    []
  );

  useEffect(() => {
    const currentPath = location.pathname;
    const { selected } = findActiveMenuKeys(currentPath, items);
    setSelectedKey([selected]);
  }, [location, items]);

  const handleMenuClick = (e, target) => {
    // if (hasUnsaved) {
    //   e.preventDefault();
    //   // UnsavedChangesModal(() => {
    //   //   navigate(target, { replace: true });
    //   // });
    //   return false;
    // }

    return true;
  };

  const findActiveMenuKeys = (path, items) => {
    for (const item of items) {
      if (item.path === path) {
        return { selected: item.key };
      }
      if (item.children) {
        for (const child of item.children) {
          if (child.path === path || path.startsWith(child.path)) {
            return { selected: child.key };
          }
        }
        if (path.startsWith(item.path)) {
          return { selected: item.key };
        }
      } else if (item.path && path.startsWith(item.path)) {
        return { selected: item.key };
      }
    }
    return { selected: "" };
  };

  const menuItems = items.map((item) => ({
    ...item,
    label: (
      <NavLink to={item.path} onClick={(e) => handleMenuClick(e, item.path)}>
        {item.label}
      </NavLink>
    ),
    children: item.children?.map((child) => ({
      ...child,
      label: (
        <NavLink
          to={child.path}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          onClick={(e) => handleMenuClick(e, child.path)}
        >
          {child.label}
        </NavLink>
      ),
    })),
  }));

  return (
    <Sider collapsible width={250} theme="light">
      <div className='mt-1'>
        <Menu
          theme='light'
          mode='inline'
          selectedKeys={selectedKey}
          defaultOpenKeys={["report", "customer-care"]}
          items={menuItems}
        />
      </div>
    </Sider>
  );
}

export default AppSider;
