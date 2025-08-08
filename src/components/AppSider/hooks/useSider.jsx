import PATH from "@/configs/paths/PATH";
import { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Label, LabelUppercase } from "../components/styles";
import {
  ChartBarIncreasingIcon,
  CommandIcon,
  MessageCircleMoreIcon,
  MessageSquareMoreIcon,
  MessagesSquareIcon,
  ShieldCheckIcon,
  ShuffleIcon,
  TableOfContentsIcon,
  UsersIcon,
} from "lucide-react";
import _ from "lodash";

const items = [
  {
    key: "monitor",
    type: "group",
    label: "Monitor",
    children: [
      {
        key: "smsc",
        label: "SMSC",
        icon: <MessageCircleMoreIcon size={16} />,
        children: [
          {
            key: "smsc-connection",
            label: "Connection",
            path: PATH.MONITOR.SMSC_CONNECTION,
          },
          {
            key: "smsc-mttps",
            label: "MT TPS",
            path: PATH.MONITOR.SMSC_MTTPS,
          },
          {
            key: "smsc-motps",
            label: "MO TPS",
            path: PATH.MONITOR.SMSC_MOTPS,
          },
        ],
      },
      {
        key: "monitor-client",
        label: "Client",
        icon: <TableOfContentsIcon size={16} />,
        children: [
          {
            key: "client-connection",
            label: "Connection",
            path: PATH.MONITOR.CLIENT_CONNECTION,
          },
          {
            key: "client-mt-traffic",
            label: "MT Traffic",
            path: PATH.MONITOR.CLIENT_MT_TRAFFIC,
          },
          {
            key: "client-mo-traffic",
            label: "MO Traffic",
            path: PATH.MONITOR.CLIENT_MO_TRAFFIC,
          },
        ],
      },
      {
        key: "queue-monitoring",
        label: "Queue Monitoring",
        icon: <ShuffleIcon size={16} />,
        path: PATH.MONITOR.QUEUE_MONITORING,
      },
    ],
  },
  {
    key: "management",
    type: "group",
    label: "Management",
    children: [
      {
        key: "smsc-info",
        label: "SMSC Information",
        icon: <MessagesSquareIcon size={16} />,
        path: PATH.MANAGEMENT.SMSC_INFO,
      },
      {
        key: "smsgw-info",
        label: "SMSGW Information",
        icon: <CommandIcon size={16} />,
        path: PATH.MANAGEMENT.SMSGW_INFO,
      },
      {
        key: "management-client",
        label: "Client",
        icon: <TableOfContentsIcon size={16} />,
        children: [
          {
            key: "client-mt-account",
            label: "MT Account",
            path: PATH.MANAGEMENT.CLIENT_MT_ACCOUNT,
          },
          {
            key: "client-mo-account",
            label: "MO Account",
            path: PATH.MANAGEMENT.CLIENT_MO_ACCOUNT,
          },
          {
            key: "tps-by-time",
            label: "TPS By Time Management",
            path: PATH.MANAGEMENT.CLIENT_TPS_BY_TIME,
          },
          {
            key: "delivery-report-account",
            label: "Delivery Report Account",
            path: PATH.MANAGEMENT.CLIENT_DELIVERY_REPORT_ACCOUNT,
          },
        ],
      },
    ],
  },
  {
    key: "history-report",
    label: "History & Report",
    type: "group",
    children: [
      {
        key: "sms-history",
        label: "SMS History",
        icon: <MessageSquareMoreIcon size={16} />,
        path: PATH.HISTORY_REPORT.SMS_HISTORY,
      },
      {
        key: "history-report-mt-traffic",
        label: "MT Traffic",
        icon: <TableOfContentsIcon size={16} />,
        children: [
          {
            key: "history-report-mt-traffic-client",
            label: "Client",
            path: PATH.HISTORY_REPORT.MT_TRAFFIC_CLIENT,
          },
          {
            key: "history-report-mt-traffic-smsc",
            label: "SMSC",
            path: PATH.HISTORY_REPORT.MT_TRAFFIC_SMSC,
          },
        ],
      },
      {
        key: "history-report-mo-traffic",
        label: "MO Traffic",
        icon: <TableOfContentsIcon size={16} />,
        children: [
          {
            key: "history-report-mo-traffic-client",
            label: "Client",
            path: PATH.HISTORY_REPORT.MO_TRAFFIC_CLIENT,
          },
          {
            key: "history-report-mo-traffic-smsc",
            label: "SMSC",
            path: PATH.HISTORY_REPORT.MO_TRAFFIC_SMSC,
          },
        ],
      },
    ],
  },
  {
    key: "administration",
    label: "Administration",
    type: "group",
    children: [
      {
        key: "account",
        label: "Account",
        icon: <UsersIcon size={16} />,
        path: PATH.ADMINISTRATION.ACCOUNT,
      },
      {
        key: "permission",
        label: "Permission",
        icon: <ChartBarIncreasingIcon size={16} />,
        path: PATH.ADMINISTRATION.PERMISSION,
      },
      {
        key: "permission-group",
        label: "Permission Group",
        icon: <ShieldCheckIcon size={16} />,
        path: PATH.ADMINISTRATION.PERMISSION_GROUP,
      },
    ],
  },
];

export default function useSider() {
  const location = useLocation();
  // const [selectedKey, setSelectedKey] = useState([]);
  const [defaultOpenKeys, setDefaultOpenKeys] = useState([""]);

  const findActiveMenuKeys = (path, items) => {
    const searchInItems = (itemsList, openKeys = []) => {
      for (const item of itemsList) {
        // Exact match first
        if (item.path === path) {
          return { selected: item.key, openKeys };
        }

        if (item.children) {
          const result = searchInItems(item.children, [...openKeys, item.key]);
          if (result.selected) {
            return result;
          }
        }
      }

      // Only do prefix matching for items without exact matches
      for (const item of itemsList) {
        if (
          item.path &&
          item.path !== path &&
          path.startsWith(item.path + "/")
        ) {
          return { selected: item.key, openKeys: [] };
        }
      }

      return { selected: "", openKeys: [] };
    };

    return searchInItems(items);
  };

  const selectedKey = useMemo(() => {
    const currentPath = location.pathname;

    const { selected } = findActiveMenuKeys(currentPath, items);
    let tabDefaultActive = "";

    items.forEach((item = {}) => {
      const { children } = item;
      children.forEach((childItem = {}) => {
        const childItem2 = childItem.children || null;
        if (childItem2) {
          childItem2.forEach((childItem2 = {}) => {
            if (childItem2.path === location.pathname) {
              tabDefaultActive = childItem.key;
            }
          });
        }
      });
    });
    setDefaultOpenKeys([tabDefaultActive]);
    return [selected];
  }, [location.pathname]);

  const handleMenuClick = (data) => {
    if (_.isEmpty(defaultOpenKeys, data.key)) {
      const newData = data.filter((item) => {
        if (item !== data.key) {
          return item;
        }
      });
      return setDefaultOpenKeys(newData);
    }
    setDefaultOpenKeys([...defaultOpenKeys, data.key]);
  };

  const transformMenuItems = (items) => {
    return items.map((item) => ({
      ...item,
      label: item.path ? (
        <NavLink
          to={item.path}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <span className="label">{item.label}</span>
        </NavLink>
      ) : item.type === "group" ? (
        <LabelUppercase>{item.label}</LabelUppercase>
      ) : (
        <div onClick={() => handleMenuClick(item)}>
          <Label>{item.label}</Label>
        </div>
      ),
      children: item.children ? transformMenuItems(item.children) : undefined,
    }));
  };

  const menuItems = useMemo(() => transformMenuItems(items), [defaultOpenKeys]);
  // const defaultOpenKeys = [
  //   "smsc",
  //   "monitor-client",
  //   "management-client",
  //   "history-report-mt-traffic",
  //   "history-report-mo-traffic",
  // ];
  return {
    selectedKey,
    menuItems,
    defaultOpenKeys,
  };
}
