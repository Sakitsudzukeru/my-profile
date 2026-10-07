import type { Dictionary, Locale } from "./types";

const ru: Dictionary = {
  nav: {
    about: "обо мне",
    work: "проекты",
    gallery: "галерея",
    experience: "опыт",
    skills: "стек",
    contact: "связь",
  },
  hero: {
    eyebrow: "// открыта к переезду",
    titleWhite: "full stack",
    titlePink: "разработка",
    subtitle:
      "Привет, меня зовут Елена. Мне 23 года. Занимаюсь созданием масштабируемых веб-приложений вот как уже 4 года. Специализируюсь на высоконагруженной обработке данных, оптимизации API и разработке модульных систем для автоматизации бизнес-процессов; Обладаю практическими навыками в DevOps: самостоятельно развертываю и отлаживаю сервисы в продакшене. Как так вышло? На втором курсе колледжа я откликнулась на вакансию программиста от местного оператора связи и меня взяли. Как то так с:",
    ctaPrimary: "мои проекты →",
    sticker1: "кодим",
    sticker2: "RUN IT",
  },
  skillsStickerText: "+ люблю разбираться в новом ♥",
  liveStickerText: "+ живой пример ♥",
  projectsSectionTitle: "проекты",
  codeOnGithubText: "Полный код в репозитории на GitHub.",
  seeGalleryText: "Скриншоты проекта — в галерее ниже ↓",
  gallery: {
    sectionTitle: "галерея",
    subtitle:
      "визуальная часть проектов, реальные скриншоты интерфейсов и макетов.",
    captions: [
      "LangLib — моя языковая платформа",
      "LangLib — режимы практики",
      "LangLib — кроссворд",
      "LangLib — поиск и аналоги слов",
      "NPC Dialogue — мой проект, один из режимов визуальной новеллы",
      "Модерация фото на запрещённый контент",
      "Flashcards — мое приложение для повтора слов",
      "Мой город — макет формы авторизации",
    ],
  },
  projects: {
    langLib: {
      tabLabel: "LangLib",
      status: "финальная стадия разработки · личный проект",
      title: "LangLib — языковая платформа",
      description:
        "Языковая платформа для изучения языков: платежи, идемпотентность операций, поиск аналогов слов, режимы практики. Проект на финальной стадии разработки — скоро выхожу с ним в мир.",
    },
    flashcards: {
      tabLabel: "Flashcards",
      status: "личный проект",
      title: "Flashcards — мое приложение для повтора слов",
      description:
        "Мобильное приложение на React Native для запоминания слов по системе интервальных повторений с локальным хранением на устройстве",
    },
    cdrParser: {
      tabLabel: "CDR Parser",
      status: "highload · коммерческий проект",
      title: "CDR Streaming Parser",
      description:
        "Обработка многомиллионных файлов: читаю чанками через поток, кладу в очередь, а затем пишу в базу пачками",
    },
    moderation: {
      tabLabel: "Модерация фото",
      status: "в разработке · личный проект",
      title: "NSFW-модерация загрузок",
      description:
        "Python-микросервис проверяет каждое загружаемое фото ещё до сохранения в S3 (часть моего приложения с фоторедактором на Flutter и бэкендом на NestJS)",
    },
    sticker: {
      tabLabel: "Стикер",
      status: "CSS решения",
      title: "Стикер на скотче",
      description:
        "Тот самый розовый стикер, который вы видите на этом сайте с:",
      cssComment: "/* полоска скотча сверху */",
      htmlComment: "&lt;!-- обычный html --&gt;",
      reactComment: "// использование",
    },
    catRunner: {
      tabLabel: "Котик-раннер",
      status: "мини-игра",
      title: "Помогите котику догнать клубок",
      description:
        "Если вам надоело читать текст, можете отвлечься на котика (вдохновлялась знаменитым динозавром :D)",
    },
    memoryGame: {
      tabLabel: "Мемори",
      status: "мини-игра",
      title: "Найди пару котиков",
      description: "Найдите всех парных котиков с:",
    },
    whackAMole: {
      tabLabel: "Котик в коробке",
      status: "мини-игра",
      title: "Поймай котика",
      description:
        "Котик выскакивает из случайной коробки. Успейте кликнуть, пока он опять не спрятался",
    },
  },
  skillsSectionTitle: "мой стек",
  skillGroupLabels: {
    backend: "бэкенд",
    frontend: "фронтенд",
    mobile: "мобильная разработка",
    data: "данные и очереди",
    devops: "devops и инструменты",
    design: "дизайн",
  },
  experienceSectionTitle: "опыт работы",
  timeline: [
    {
      when: "04.2022 — наст. время",
      title: "Software Engineer (1st category)",
      company: "Mobile Operator",
      description:
        "Разрабатываю и поддерживаю корпоративные системы: от архитектуры с нуля до высоконагруженных сервисов и legacy-поддержки.",
      highlights: [
        {
          label: "Корпоративная платформа управления",
          bullets: [
            "Спроектировала полную архитектуру с нуля (от схемы БД до UI/UX).",
            "Модуль двусторонних SMS: исходящие уведомления + обработка входящих (1000+/300+ в день).",
            "Система обработки заявок: 200+/день с автоматической маршрутизацией и отслеживанием статусов.",
            "Авторизация между микросервисами; оптимизация запросов по Oracle, PostgreSQL, MongoDB.",
            "Сложные SQL и PL/SQL блоки над большими связанными (joined) таблицами для поиска, пакетных обновлений, отчётности.",
            "Награждёна сертификатом компании за реализацию модулей портала.",
          ],
        },
        {
          label: "CDR Streaming Parser",
          bullets: [
            "Обрабатывает файлы с миллионами строк через очередь при низком и стабильном потреблении памяти.",
            "Потоковое (chunked) чтение для обработки больших файлов (2+ млн записей) без полной загрузки в память.",
            "Пакетные (batched) вставки в PostgreSQL для высокой пропускной способности загрузки данных.",
          ],
        },
        {
          label: "Система массовых SMS-рассылок",
          bullets: [
            "SPA с отслеживанием статуса кампаний в реальном времени через WebSockets.",
            "Админ-панель для мониторинга и управления кампаниями.",
            "Модуль синхронизации между базами данных с детекцией изменений (eventual consistency).",
          ],
        },
        {
          label: "Микросервисы обработки данных",
          bullets: [
            "Микросервисы для обработки JSON, TXT, DOCX, Excel с очередями задач под большие объёмы.",
            "Генераторы шаблонов документов и интеграционные API.",
          ],
        },
        {
          label: "DevOps и инфраструктура",
          bullets: [
            "Деплой и поддержка приложений в Docker (продакшн Docker/Nginx/Laravel).",
            "Администрирование Linux-серверов (CLI, настройка сервисов, деплой).",
            "Nginx как reverse proxy; дебаг продакшн-инцидентов (TIME_WAIT, OPcache).",
          ],
        },
        {
          label: "Поддержка корпоративных систем",
          bullets: [
            "Новый функционал + поддержка легаси-кода (PHP, Laravel, C#, Vue.js): бизнес-логика, дебаг, продакшн-фиксы.",
            "Jest-тесты для предотвращения регрессий.",
            "Постоянная поддержка продакшн-систем, рефакторинг и миграция легаси, устранение критических багов и уязвимостей.",
          ],
        },
        {
          label: "Маркетинг и дизайн (учебный проект, магазин корейской косметики)",
          bullets: [
            "Разработала контент-стратегию для соцсетей магазина: контент-план, форматы и темы.",
            "Создавала карточки товаров, инфографику и баннеры для уходовой косметики в Adobe Photoshop.",
          ],
        },
      ],
    },
  ],
  aboutSectionTitle: "обо мне",
  aboutText:
    "Интересуюсь сложными системами и архитектурой. Помимо работы веду pet-проекты. ",
  aboutFacts: [
    { icon: "bolt", text: "4+ года в коммерческой разработке" },
    { icon: "network", text: "highload и распределённые системы" },
    {
      icon: "award",
      text: "корпоративный сертификат за внедрение модулей портала",
    },
    {
      icon: "clipboard",
      text: "PM-функции: пишу ТЗ, ставлю задачи команде, общаюсь с маркетингом на одном языке",
    },
    {
      icon: "trending",
      text: "маркетинг (практические курсы): воронка продаж, анализ ЦА, контент-стратегия",
    },
    {
      icon: "bot",
      text: "использую Claude Code для рутинных задач",
    },
    {
      icon: "globe",
      text: "языки: русский — родной, английский — B2 (совершенствую), сербский — изучаю",
    },
  ],
  personalFacts: [
    {
      icon: "berry",
      text: "люблю клубнику",
    },
    {
      icon: "palette",
      text: "любимые цвета: винный, розовый, чёрный, ну и еще много других",
    },
    {
      icon: "cat",
      text: "есть кошка по кличке Персик",
    },
    {
      icon: "plane",
      text: "люблю путешествовать",
    },
    {
      icon: "car",
      text: "есть права, умею водить машину",
    },
    {
      icon: "sparkle",
      text: "увлекаюсь аниме, мангой, фильмами, сериалами, книгами, рисованием, танцами, спортом",
    },
  ],
  educationSectionTitle: "образование",
  education: [
    {
      institution: "Государственный университет им. В. Даля",
      degree: "Бакалавр, программная инженерия",
      credential: "Бакалавриат",
      period: "сент. 2022 — июнь 2024",
      note: "Заочная форма обучения — занятия по выходным",
    },
    {
      institution: "Колледж Государственного университета им. В. Даля",
      degree: "Техник-программист, программирование в компьютерных системах",
      credential: "Диплом о среднем профессиональном образовании с отличием",
      period: "сент. 2018 — июнь 2022",
      note: "Устроилась на работу на последнем курсе колледжа",
    },
  ],
  coursesLabel: "курсы и сертификаты",
  courses: [
    "Infrastructure Solutions for Programmers — C-19154, 2025",
    "Комплексный интернет-маркетинг — Redford School, 2023",
  ],
  footer: {
    headingBefore: "готова присоединиться",
    headingAfter: "к вашей ",
    headingHighlight: "команде",
    location: "Нови-Сад, Сербия (с декабря 2026)",
    stickyLine1: "буду рада",
    stickyLine2: "вашему сообщению",
  },
  footerBottom: "© 2026 сделано с любовью",
  common: { scoreLabel: "очки", bestLabel: "рекорд" },
  runner: {
    startHint: "пробел или тап — прыжок",
    gameOverText: "врезался!",
    restartHint: "пробел — заново",
  },
  memory: {
    movesLabel: "ходы",
    winText: "все пары найдены!",
    playAgainHint: "нажми на карточку, чтобы сыграть снова",
  },
  whack: {
    startHint: "тап — начать",
    timeLabel: "время",
    gameOverText: "время вышло!",
    restartHint: "тап — заново",
  },
};

const en: Dictionary = {
  nav: {
    about: "about",
    work: "work",
    gallery: "gallery",
    experience: "experience",
    skills: "stack",
    contact: "contact",
  },
  hero: {
    eyebrow: "// open to relocate",
    titleWhite: "full stack",
    titlePink: "development",
    subtitle:
      "Hi, I'm Elena. I'm 23. I've been building scalable web applications for about 4 years now. I specialize in high-load data processing, API optimization, and modular systems for business process automation; I'm hands-on with DevOps: I deploy and debug my own services in production. How did that happen? In my second year of college I applied for a developer job at a local mobile operator, and they hired me. That's basically it c:",
    ctaPrimary: "my projects →",
    sticker1: "always shipping",
    sticker2: "RUN IT",
  },
  skillsStickerText: "+ love figuring out new things ♥",
  liveStickerText: "+ live example, not a screenshot ♥",
  projectsSectionTitle: "projects",
  codeOnGithubText: "Full code lives in the GitHub repo.",
  seeGalleryText: "Project screenshots are in the gallery below ↓",
  gallery: {
    sectionTitle: "gallery",
    subtitle: "the visual side of these projects — real UI screenshots.",
    captions: [
      "Language Library — landing page",
      "LangLib — practice modes",
      "LangLib — crossword",
      "LangLib — word search & analogs",
      "NPC Dialogue — visual novel",
      "Photo moderation — blocked content",
      "Flashcards — study card",
      "My City — sign in screen",
    ],
  },
  projects: {
    langLib: {
      tabLabel: "LangLib",
      status: "final development stage · personal project",
      title: "LangLib — language learning platform",
      description:
        "A language-learning platform: payments, operation idempotency, word-analog search, practice modes. In the final stretch of development — launching it soon.",
    },
    flashcards: {
      tabLabel: "Flashcards",
      status: "personal project",
      title: "Flashcards — spaced repetition",
      description:
        "A React Native mobile app for memorizing words with spaced repetition — cards and progress are stored locally on the device.",
    },
    cdrParser: {
      tabLabel: "CDR Parser",
      status: "highload · commercial project",
      title: "CDR Streaming Parser",
      description:
        "Multi-million-record call log files can't be loaded into memory whole: I read them in chunks through a stream, queue them, and write to the database in batches.",
    },
    moderation: {
      tabLabel: "Photo Moderation",
      status: "in development · personal project",
      title: "NSFW upload moderation",
      description:
        "A Python microservice screens every uploaded photo before it reaches S3 (part of a cross-platform app with a Flutter photo editor and a NestJS backend).",
    },
    sticker: {
      tabLabel: "Sticky note",
      status: "meta",
      title: "The sticky note",
      description: "That exact pink sticky note you see on this site c:",
      cssComment: "/* tape strip on top */",
      htmlComment: "&lt;!-- plain html --&gt;",
      reactComment: "// usage",
    },
    catRunner: {
      tabLabel: "Cat Runner",
      status: "mini game",
      title: "The cat that runs",
      description:
        "If you're tired of reading text, take a break with the cat (inspired by that famous dinosaur :D)",
    },
    memoryGame: {
      tabLabel: "Memory",
      status: "mini game",
      title: "Find the matching cats",
      description: "Find all the matching cats c:",
    },
    whackAMole: {
      tabLabel: "Cat In A Box",
      status: "mini game",
      title: "Catch the cat",
      description: "A cat pops out of a random box. Click it before it hides.",
    },
  },
  skillsSectionTitle: "my stack",
  skillGroupLabels: {
    backend: "backend",
    frontend: "frontend",
    mobile: "mobile",
    data: "data & queues",
    devops: "devops & tools",
    design: "design",
  },
  experienceSectionTitle: "experience",
  timeline: [
    {
      when: "04.2022 — present",
      title: "Software Engineer (1st category)",
      company: "Mobile Operator",
      description:
        "Building and maintaining corporate systems: from ground-up architecture to high-load services and legacy support.",
      highlights: [
        {
          label: "Corporate Management Platform",
          bullets: [
            "Designed the full architecture from scratch (DB schema to UI/UX).",
            "Two-way SMS module: outbound + inbound processing (1,000+/300+ daily).",
            "Request processing: 200+/day with automatic routing and status tracking.",
            "Auth across microservices; optimized queries across Oracle, PostgreSQL, MongoDB.",
            "Complex SQL and PL/SQL blocks over large joined tables for search, batch updates, and reporting.",
            "Awarded a company certificate for implementing portal modules.",
          ],
        },
        {
          label: "CDR Streaming Parser",
          bullets: [
            "Processes multi-million-row files via queue with low, stable memory.",
            "Chunked reading to stream large files without full in-memory load.",
            "Batched PostgreSQL inserts for high-throughput ingestion.",
          ],
        },
        {
          label: "Mass SMS Management System",
          bullets: [
            "SPA with real-time campaign status via WebSockets.",
            "Admin panel for campaign monitoring and control.",
            "Multi-database sync with change detection (eventual consistency).",
          ],
        },
        {
          label: "Microservices for Data Processing",
          bullets: [
            "Microservices for JSON, TXT, DOCX, Excel processing with task queues.",
            "Document template generators and integration APIs.",
          ],
        },
        {
          label: "DevOps & Infrastructure",
          bullets: [
            "Deployed and maintained apps in Docker (incl. production Docker/Nginx/Laravel).",
            "Linux server administration and setup (CLI, service config, deployment).",
            "Nginx reverse proxy; debugged production issues (TIME_WAIT, OPcache).",
          ],
        },
        {
          label: "Corporate Systems Support",
          bullets: [
            "New features and legacy maintenance (PHP, Laravel, C#, Vue.js): business logic, debugging, production fixes.",
            "Jest unit tests to prevent regressions.",
            "Ongoing support, legacy refactoring/migration, critical bug and vulnerability fixes.",
          ],
        },
        {
          label: "Marketing & Design (course project, Korean cosmetics store)",
          bullets: [
            "Built a content strategy for the store's social media: content plan, formats and topics.",
            "Designed product cards, infographics and banners for skincare products in Adobe Photoshop.",
          ],
        },
      ],
    },
  ],
  aboutSectionTitle: "about me",
  aboutText:
    "I'm interested in complex systems and architecture. Alongside my main job I run a few pet projects.",
  aboutFacts: [
    { icon: "bolt", text: "4+ years in commercial development" },
    { icon: "network", text: "highload and distributed systems" },
    {
      icon: "award",
      text: "company certificate for implementing corporate portal modules",
    },
    {
      icon: "clipboard",
      text: "PM duties: write specs, scope tasks for the team, speak the same language as marketing",
    },
    {
      icon: "trending",
      text: "marketing (practice-based courses): sales funnel, target audience analysis, content strategy",
    },
    {
      icon: "bot",
      text: "use Claude Code for routine tasks",
    },
    {
      icon: "globe",
      text: "languages: Russian — native, English — B2 (actively improving), Serbian — learning",
    },
  ],
  personalFacts: [
    {
      icon: "berry",
      text: "love strawberries",
    },
    {
      icon: "palette",
      text: "favorite colors: wine red, pink, black, and a bunch of others",
    },
    {
      icon: "cat",
      text: "have a cat named Persik",
    },
    {
      icon: "plane",
      text: "love to travel",
    },
    {
      icon: "car",
      text: "have a driver's license, know how to drive",
    },
    {
      icon: "sparkle",
      text: "into anime, manga, books, drawing, dancing, sports",
    },
  ],
  educationSectionTitle: "education",
  education: [
    {
      institution: "V. Dahl State University",
      degree: "Bachelor, Software Engineering",
      credential: "Bachelor's degree",
      period: "Sep 2022 – Jun 2024",
      note: "Correspondence program — classes on weekends",
    },
    {
      institution: "V. Dahl State University College",
      degree: "Diploma in Programming, computer systems",
      credential: "Diploma of secondary vocational education, with honors",
      period: "Sep 2018 – Jun 2022",
      note: "Got a job during my last year of college",
    },
  ],
  coursesLabel: "courses & certificates",
  courses: [
    "Infrastructure Solutions for Programmers — C-19154, 2025",
    "Comprehensive Internet Marketing — Redford School, 2023",
  ],
  footer: {
    headingBefore: "ready to join",
    headingAfter: "your ",
    headingHighlight: "team",
    location: "Novi Sad, Serbia (from December 2026)",
    stickyLine1: "would love",
    stickyLine2: "to hear from you",
  },
  footerBottom: "© 2026 made with love",
  common: { scoreLabel: "score", bestLabel: "best" },
  runner: {
    startHint: "space or tap to jump",
    gameOverText: "crashed!",
    restartHint: "space to restart",
  },
  memory: {
    movesLabel: "moves",
    winText: "all pairs found!",
    playAgainHint: "tap a card to play again",
  },
  whack: {
    startHint: "tap to start",
    timeLabel: "time",
    gameOverText: "time's up!",
    restartHint: "tap to restart",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { ru, en };
