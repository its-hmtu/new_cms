import MainLayout from "@/layouts/MainLayout";
import PATH from "./paths/PATH";
import { Navigate } from "react-router-dom";
import ProtectedRoute from "@/components/common/ProtectedRoute";
import Login from "@/pages/Login";

const routes = [
  {
    path: PATH.HOME,
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <Navigate to={PATH.REPORT.REVENUE} />,
      },
      {
        path: PATH.REPORT.ROOT,
        element: <Navigate to={PATH.REPORT.REVENUE} />,
      },
      {
        path: PATH.REPORT.REVENUE,
        // element: <ReportRevenue />,
      },
      {
        path: PATH.REPORT.REGISTER,
        // element: <Register />,
      },
      {
        path: PATH.REPORT.PRIZE_STATS,
        // element: <PrizeStats />,
      },
      {
        path: PATH.REPORT.LOGIN_STATS,
        // element: <LoginStats />,
      },
      {
        path: PATH.PRIZE_MANAGEMENT.ROOT,
        // element: <PrizeManagement />,
      },
      {
        path: PATH.PRIZE_MANAGEMENT.CREATE,
        // element: <PrizeManagementCreate />,
      },
      {
        path: PATH.PRIZE_MANAGEMENT.UPDATE,
        // element: <PrizeManagementUpdate />,
      },
      {
        path: PATH.CUSTOMER_CARE.ROOT,
        element: <Navigate to={PATH.CUSTOMER_CARE.CHARGE_HISTORY} />,
      },
      {
        path: PATH.CUSTOMER_CARE.CHARGE_HISTORY,
        // element: <ChargeHistory />,
      },
      {
        path: PATH.CUSTOMER_CARE.REGISTER_CANCEL_HISTORY,
        // element: <RegisterCancelHistory />,
      },
      {
        path: PATH.CUSTOMER_CARE.FREE_PLAY,
        // element: <FreePlay />,
      },
      {
        path: PATH.CUSTOMER_CARE.SOLO_MODE_PLAY_HISTTORY,
        // element: <SoloModePlay />,
      },
      {
        path: PATH.MISSIONS.ROOT,
        // element: <Mission />,
      },
      {
        path: PATH.MISSIONS.CREATE,
        // element: <MissionCreate />,
      },
      {
        path: PATH.MISSIONS.UPDATE,
        // element: <MissionUpdate />,
      },
      {
        path: PATH.TOPIC.ROOT,
        // element: <Topic />,
      },
      {
        path: PATH.TOPIC.CREATE,
        // element: <TopicCreate />,
      },
      {
        path: PATH.TOPIC.UPDATE,
        // element: <TopicUpdate />,
      },
      {
        path: PATH.TOPIC.CONFIG,
        // element: <TopicConfig />,
      },
      {
        path: PATH.TOPIC_ANSWER.ROOT,
        // element: <TopicAnswer />,
      },
      {
        path: PATH.TOPIC_ANSWER.CREATE,
        // element: <TopicAnswerCreate />,
      },
      {
        path: PATH.TOPIC_ANSWER.UPDATE,
        // element: <TopicAnswerUpdate />,
      },
      {
        path: PATH.WHEEL.ROOT,
        // element: <Wheel />,
      },
      {
        path: PATH.WHEEL.CREATE,
        // element: <WheelCreate />,
      },
      {
        path: PATH.WHEEL.UPDATE,
        // element: <WheelUpdate />,
      },
      {
        path: PATH.MSISDN_BLOCK.ROOT,
        // element: <MsisdnBlock />,
      },
      {
        path: PATH.MSISDN_BLOCK.CREATE,
        // element: <MsisdnBlockCreate />,
      },
      {
        path: PATH.CONFIG,
        // element: <Configuration />,
      },
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
