export const projects = [
  {
    id: "zenSpace",
    title: 'ZenSpace Web/Mobile (B2C)',
    EN_description: 'ZenSpace is an online platform for virtual workplace reservations. The service emphasizes customization, catering to specific preferences and budgets.',
    ZH_description: 'ZenSpace 是一個線上平台，用戶可以預訂虛擬工作場所。服務強調定制化，滿足特定的需求和預算。',
    banner: 'projects/cardImages/zenSpace.png',
    category: ['sideProject'],
    type: 'web',
  },
  {
    id: "betway",
    title: 'Betway Native App (B2C)',
    EN_description: 'This is Betway Sports. Our team seamlessly integrates various gaming genres, including eSports and casino games.',
    ZH_description: '這是 Betway 體育。我們的團隊無縫集成了各種遊戲類型，包括電子競技和賭場遊戲。',
    banner: 'projects/cardImages/betway.png',
    category: ['work'],
    type: 'app',
  },
  {
    id: "fun",
    title: 'Fun Native App (B2C)',
    EN_description: 'This is Fun App, which provides customers with a wide variety of gambling games and a gaming experience that promotes both healthy gambling and leisure entertainment.',
    ZH_description: '這是 Fun App，為客戶提供了各種各樣的賭博遊戲，並促進了健康賭博和休閒娛樂的遊戲體驗。',
    banner: 'projects/cardImages/fun.png',
    category: ['work'],
    type: 'app',
  },
]

export const projectDetail = [
  {
    id: "zenSpace",
    type: 'web',
    title: 'ZenSpace Web/Mobile (B2B/B2C)',
    subTitle: 'Web Development',
    EN_description: "Zen Space is an online platform for virtual workplace reservations. It offers flexible booking options for trendy cafes, suburban spots, and co-working facilities. The service emphasizes customization, catering to specific preferences and budgets. It's perfect for remote workers, freelancers, and businesses needing temporary project spaces.",
    ZH_description: "ZenSpace 是一個線上平台，用戶可以預訂虛擬工作場所。它提供了時尚咖啡廳、郊區場所和共享工作空間的靈活預訂選擇。服務強調定制化，滿足特定的需求和預算。它非常適合遠程工作者、自由職業者和需要臨時項目空間的企業。",
    technologies: ['React', 'Redux', 'Material UI', 'NodeJS', 'PostgreSQL', 'Stripe'],
    ProjectLink: [
      {
        name: 'ZenSpace Web',
        link: 'https://zenspace-frontend.onrender.com/',
      }
    ],
    mainColor: '#1E285F',
    secondColor: '#A6A7C2',
    banner: 'projects/detail/zenSpace/banner.png',
    section: {
      main: {
        title: 'Open Project',
        image: 'projects/detail/zenSpace/main.png',
        description: [],
      },
      second: {
        title: 'ZenSpace Mobile',
        image: 'projects/detail/zenSpace/second.png',
        description: [
          {
            title: 'Book anytime',
            EN_content: 'Users can book office space easily with convenient responsive design, clear pricing, transaction information, and user reviews.',
            ZH_content: '用戶可以輕鬆預訂辦公空間，並獲得便捷的響應式設計、清晰的價格、交易信息和用戶評論。',
          }
        ],
      }
    },
  },
  {
    id: "betway",
    type: 'app',
    title: 'Betway App  (B2C)',
    subTitle: 'App Development',
    EN_description: "This is Betway Sports. Our team seamlessly integrates various gaming genres, including eSports and casino games. Crafted with a professional perspective and driven by the brand philosophy of Betway, our platform ensures an all-encompassing entertainment experience.",
    ZH_description: "這是 Betway 體育。我們的團隊無縫集成了各種遊戲類型，包括電子競技和賭場遊戲。我們的平台以專業的角度打造，並以 Betway 的品牌理念為驅動，確保全面的娛樂體驗。",
    technologies: ['React', 'React-Native', 'Piwik',],
    ProjectLink: [
      {
        name: 'Download App',
        link: 'https://cn.biwei665.com/cn/mobile/Appinstall.html?affCode=IT6666',
      }
    ],
    mainColor: '#6CC847',
    secondColor: '#6CC847',
    banner: 'projects/detail/betway/banner.png',
    section: {
      main: {
        title: 'Betway CN App',
        image: 'projects/detail/betway/main.png',
        description: [
          {
            title: 'Visual Appeal',
            EN_content: 'Immerse yourself in an engaging environment with our visually pleasing design. The user interface is not only functional but also aesthetically crafted to ensure an enjoyable overall experience.',
            ZH_content: '沉浸在引人入勝的環境中，我們的視覺設計令人愉悅。用戶界面不僅功能齊全，而且在美學上精心打造，確保整體體驗愉快。',
          },
          {
            title: 'Bank Center',
            EN_content: 'Enjoy the convenience of the Bank Center, facilitating effortless deposits and withdrawals. Our intuitive design ensures a seamless financial transaction experience for users.',
            ZH_content: '享受銀行中心的便利，輕鬆存款和提款。我們直觀的設計確保用戶無縫的金融交易體驗。',
          },
        ],
      },
      second: {
        title: '',
        image: 'projects/detail/betway/second.png',
        description: [
          {
            title: 'Integrated Gaming',
            EN_content: 'Betway Sports goes beyond traditional sports betting. We seamlessly integrate various gaming genres, including eSports and casino games, offering a diverse range of entertainment options for our users.',
            ZH_content: 'Betway 體育不僅限於傳統的體育博彩。我們無縫集成了各種遊戲類型，包括電子競技和賭場遊戲，為用戶提供多樣化的娛樂選擇。',
          }
        ],
      }
    },
  },
  {
    id: "fun",
    type: 'app',
    title: 'Fun Native App (B2C)',
    subTitle: 'App Development',
    EN_description: "TFun App is a diversified gambling application that provides various gaming experiences such as sports, e-sports, casino, mini games, etc. Whether you are a sports fan, e-sports enthusiast, casino player or casual player, you can find your favorite games in Fun App.",
    ZH_description: "Fun App 是一款多元化的博彩應用程式，提供體育、電競、casino、小遊戲等各種遊戲體驗。無論您是體育迷、電競愛好者、casino 玩家還是休閒玩家，都能在 Fun App 找到自己喜愛的遊戲。",
    technologies: ['React', 'React-Native', 'Piwik',],
    ProjectLink: [
      {
        name: 'CN',
        link: 'https://www.fun282.com/cn/mobile/Appinstall.html?affCode=IT6666',
      },
      {
        name: 'TH',
        link: 'https://f1m2apstag.fun88.biz/Appinstall.html?affCode=IT6666',
      },
      {
        name: 'VN',
        link: 'https://www.u62f7.com/Appinstall.html?affCode=IT6666',
      }
    ],
    mainColor: '#49A2F7',
    secondColor: '#49A2F7',
    banner: 'projects/detail/fun/banner.png',
    section: {
      main: {
        title: '',
        image: 'projects/detail/fun/main.png',
        description: [
          {
            title: 'Visual Appeal',
            EN_content: 'Immerse yourself in an engaging environment with our visually pleasing design. The user interface is not only functional but also aesthetically crafted to ensure an enjoyable overall experience.',
            ZH_content: '沉浸在引人入勝的環境中，我們的視覺設計令人愉悅。用戶界面不僅功能齊全，而且在美學上精心打造，確保整體體驗愉快。',
          },
          {
            title: 'Bank Center',
            EN_content: 'Enjoy the convenience of the Bank Center, facilitating effortless deposits and withdrawals. Our intuitive design ensures a seamless financial transaction experience for users.',
            ZH_content: '享受銀行中心的便利，輕鬆存款和提款。我們直觀的設計確保用戶無縫的金融交易體驗。',
          },
        ],
      },
      second: {
        title: '',
        image: 'projects/detail/fun/second.png',
        description: [
          {
            title: 'Integrated Gaming',
            EN_content: 'Fun Sports goes beyond traditional sports betting. We seamlessly integrate various gaming genres, including eSports and casino games, offering a diverse range of entertainment options for our users.',
            ZH_content: 'Fun 體育不僅限於傳統的體育博彩。我們無縫集成了各種遊戲類型，包括電子競技和賭場遊戲，為用戶提供多樣化的娛樂選擇。',
          }
        ],
      }
    },
  },
]