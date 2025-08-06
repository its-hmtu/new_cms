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
        path: PATH.MONITOR.SMSC,
        element: <Navigate to={PATH.MONITOR.SMSC_CONNECTION} replace />,
      },
      {
        path: PATH.MONITOR.SMSC_CONNECTION,
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
