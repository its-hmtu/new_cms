import MainLayout from "@/layouts/MainLayout";
import PATH from "./paths/PATH";
import { Navigate } from "react-router-dom";
import ProtectedRoute from "@/components/common/ProtectedRoute";
import Login from "@/features/Auth";
import Dashboard from "@/features/Dashboard";

const routes = [
  {
    path: PATH.HOME,
    element: (
      // <ProtectedRoute>
        <MainLayout />
      // </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to={PATH.MONITOR.SMSC_CONNECTION} replace />
      },
      {
        path: PATH.MONITOR.ROOT,
        element: <Navigate to={PATH.MONITOR.SMSC_CONNECTION} replace />,
      },
      {
        path: PATH.MONITOR.SMSC,
        element: <Navigate to={PATH.MONITOR.SMSC_CONNECTION} replace />,
      },
      {
        path: PATH.MONITOR.SMSC_CONNECTION,
        element: <Dashboard />,
      },
      {
        path: PATH.MONITOR.SMSC_MTTPS,
        element: <Dashboard />,
      },
      {
        path: PATH.MONITOR.SMSC_MOTPS,
        element: <Dashboard />,
      },
      {
        path: PATH.MONITOR.CLIENT,
        element: <Navigate to={PATH.MONITOR.CLIENT_CONNECTION} replace />,
      },
      {
        path: PATH.MONITOR.CLIENT_CONNECTION,
        element: <Dashboard />,
      }, 
      {
        path: PATH.MONITOR.CLIENT_MT_TRAFFIC,
        element: <Dashboard />,
      },
      {
        path: PATH.MONITOR.CLIENT_MO_TRAFFIC,
        element: <Dashboard />,
      },
      {
        path: PATH.MONITOR.QUEUE_MONITORING,
        element: <Dashboard />,
      },
      {
        path: PATH.MANAGEMENT.ROOT,
        element: <Navigate to={PATH.MANAGEMENT.SMSC_INFO} replace />,
      },
      {
        path: PATH.MANAGEMENT.SMSC_INFO,
        element: <Dashboard />,
      },
      {
        path: PATH.MANAGEMENT.SMSGW_INFO,
        element: <Dashboard />,
      },
      {
        path: PATH.MANAGEMENT.CLIENT,
        element: <Navigate to={PATH.MANAGEMENT.CLIENT_MT_ACCOUNT} replace />,
      },
      {
        path: PATH.MANAGEMENT.CLIENT_MT_ACCOUNT,
        element: <Dashboard />,
      },
      {
        path: PATH.MANAGEMENT.CLIENT_MO_ACCOUNT,
        element: <Dashboard />,
      },
      {
        path: PATH.MANAGEMENT.CLIENT_TPS_BY_TIME,
        element: <Dashboard />,
      },
      {
        path: PATH.MANAGEMENT.CLIENT_DELIVERY_REPORT_ACCOUNT,
        element: <Dashboard />,
      },
      {
        path: PATH.HISTORY_REPORT.ROOT,
        element: <Navigate to={PATH.HISTORY_REPORT.SMS_HISTORY} replace />,
      },
      {
        path: PATH.HISTORY_REPORT.SMS_HISTORY,
        element: <Dashboard />,
      },
      {
        path: PATH.HISTORY_REPORT.MT_TRAFFIC,
        element: <Navigate to={PATH.HISTORY_REPORT.MT_TRAFFIC_CLIENT} replace />,
      },
      {
        path: PATH.HISTORY_REPORT.MT_TRAFFIC_CLIENT,
        element: <Dashboard />,
      },
      {
        path: PATH.HISTORY_REPORT.MT_TRAFFIC_SMSC,
        element: <Dashboard />,
      },
      {
        path: PATH.HISTORY_REPORT.MO_TRAFFIC,
        element: <Navigate to={PATH.HISTORY_REPORT.MO_TRAFFIC_CLIENT} replace />,
      },
      {
        path: PATH.HISTORY_REPORT.MO_TRAFFIC_CLIENT,
        element: <Dashboard />,
      },
      {
        path: PATH.HISTORY_REPORT.MO_TRAFFIC_SMSC,
        element: <Dashboard />,
      },
      {
        path: PATH.ADMINISTRATION.ROOT,
        element: <Navigate to={PATH.ADMINISTRATION.ACCOUNT} replace />,
      },
      {
        path: PATH.ADMINISTRATION.ACCOUNT,
        element: <Dashboard />,
      },
      {
        path: PATH.ADMINISTRATION.PERMISSION,
        element: <Dashboard />,
      },
      {
        path: PATH.ADMINISTRATION.PERMISSION_GROUP,
        element: <Dashboard />,
      }
    ],
  },
  {
    path: PATH.LOGIN,
    element: <Login />,
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
];

export default routes;
