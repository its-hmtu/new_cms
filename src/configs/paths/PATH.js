const PATH = {
  HOME: '/',
  LOGIN: '/login',
  MONITOR: {
    ROOT: '/monitor',
    SMSC: '/monitor/smsc',
    SMSC_CONNECTION: '/monitor/smsc/connection',
    SMSC_MTTPS: '/monitor/smsc/mttps',
    SMSC_MOTPS: '/monitor/smsc/motps',

    CLIENT:  '/monitor/client',
    CLIENT_CONNECTION: '/monitor/client/connection',
    CLIENT_MT_TRAFFIC: '/monitor/client/mt-traffic',
    CLIENT_MO_TRAFFIC: '/monitor/client/mo-traffic',

    QUEUE_MONITORING: '/monitor/queue-monitoring',
  },
  MANAGEMENT: {
    ROOT: '/management',
    SMSC_INFO: '/management/smsc-infomation',
    SMSGW_INFO: '/management/smsgw-infomation',
    CLIENT: '/management/client',
    CLIENT_MT_ACCOUNT: '/management/client-mt-account',
    CLIENT_MO_ACCOUNT: '/management/client-mo-account',
    CLIENT_TPS_BY_TIME: '/management/client-tps-by-time',
    CLIENT_DELIVERY_REPORT_ACCOUNT: '/management/client-delivery-report-account',
  },
  HISTORY_REPORT: {
    ROOT: '/history-report',
    SMS_HISTORY: '/history-report/sms-history',
    MT_TRAFFIC: '/history-report/mt-traffic',
    MT_TRAFFIC_CLIENT: '/history-report/mt-traffic/client',
    MT_TRAFFIC_SMSC: '/history-report/mt-traffic/smsc',
    MO_TRAFFIC: '/history-report/mo-traffic',
    MO_TRAFFIC_CLIENT: '/history-report/mo-traffic/client',
    MO_TRAFFIC_SMSC: '/history-report/mo-traffic/smsc',
  },
  ADMINISTRATION: {
    ROOT: '/administration',
    ACCOUNT: '/administration/account',
    PERMISSION: '/administration/permission',
    PERMISSION_GROUP: '/administration/permission-group',
  }
};

export default PATH;
