const PATH = {
  HOME: '/',
  LOGIN: '/login',
  REPORT: {
    ROOT: '/report',
    REVENUE: '/report/revenue',
    REGISTER: '/report/register',
    PRIZE_STATS: '/report/prize-statistics',
    LOGIN_STATS: '/report/login-statistics',
  },
  PRIZE_MANAGEMENT: {
    ROOT: '/prize-management',
    CREATE: '/prize-management/create',
    UPDATE: '/prize-management/:id',
    PIECE_UPDATE: '/prize-management/piece-update',
  },
  CUSTOMER_CARE: {
    ROOT: '/customer-care',
    CHARGE_HISTORY: '/customer-care/charge-history',
    REGISTER_CANCEL_HISTORY: '/customer-care/register-cancel-history',
    FREE_PLAY: '/customer-care/free-play',
    SOLO_MODE_PLAY_HISTTORY: '/customer-care/solo-mode-play-history',
  },
  MISSIONS: {
    ROOT: '/missions',
    CREATE: '/missions/create',
    UPDATE: '/missions/:id',
  },
  QUESTIONS: '/questions',
  WHEEL: {
    ROOT: '/wheel',
    CREATE: '/wheel/create',
    UPDATE: '/wheel/:id',
  },
  MSISDN_BLOCK: {
    ROOT: '/msisdn-block',
    CREATE: '/msisdn-block/create',
  },
  CONFIG: '/configuration',
  TOPIC: {
    ROOT: '/topics',
    CREATE: '/topics/create',
    UPDATE: '/topics/:id',
    CONFIG: '/topics/config',
  },
  TOPIC_ANSWER: {
    ROOT: '/topic-answers',
    CREATE: '/topic-answers/create',
    UPDATE: '/topic-answers/:id',
  },
};

export default PATH;
