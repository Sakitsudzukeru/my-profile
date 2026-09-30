import type { Locale } from '../content/types'

export interface SkillGroupLine {
  label: string
  value: string
}

export interface ExperienceProject {
  title: string
  summary?: string
  bullets: string[]
}

export interface PersonalProject {
  title: string
  status?: string
  summary?: string
  bullets: string[]
  techStack: string
}

export interface ResumeEducationItem {
  institution: string
  degree: string
  credential?: string
  period: string
  note?: string
}

export interface ResumeContent {
  name: string
  title: string
  contacts: { label: string; url: string }[]
  experienceHeading: string
  personalProjectsHeading: string
  summary: string
  skillGroups: SkillGroupLine[]
  openToRelocation: string
  experience: {
    company: string
    role: string
    period: string
    techStack: string
    projects: ExperienceProject[]
  }
  personalProjects: PersonalProject[]
  educationHeading: string
  education: ResumeEducationItem[]
  coursesLabel: string
  courses: string[]
}

export interface ShortResumeContent {
  summary: string
  supportBullets: string[]
  personalHighlights: { title: string; note: string }[]
  personalOther: string
  courses: string[]
}

const en: ResumeContent = {
  name: 'Elena Duka',
  title: 'Full Stack Developer',
  contacts: [
    { label: 'sadelenik.a@gmail.com', url: 'mailto:sadelenik.a@gmail.com' },
    { label: 'github.com/Sakitsudzukeru', url: 'https://github.com/Sakitsudzukeru' },
    { label: 'linkedin.com/in/elena-duka-212b803bb', url: 'https://www.linkedin.com/in/elena-duka-212b803bb/' },
  ],
  experienceHeading: 'EXPERIENCE',
  personalProjectsHeading: 'PERSONAL PROJECTS',
  summary:
    "Hi, I'm Elena, 23. Fullstack developer with 4+ years of experience building scalable web applications. I specialize in high-load data processing, API optimization, and modular systems for business process automation; I'm hands-on with DevOps: I deploy and debug my own services in production. Designed a corporate platform from scratch and am currently building my own products alongside full-time work.",
  skillGroups: [
    { label: 'Core stack', value: 'TypeScript · Node.js · NestJS · Express · Next.js · React · REST API · WebSockets' },
    {
      label: 'Data & ORM',
      value: 'Oracle · PL/SQL · PostgreSQL · MariaDB · MongoDB · Redis · Prisma · TypeORM · Mongoose · multi-database systems',
    },
    { label: 'Messaging & Queues', value: 'RabbitMQ · background job processing · event-based architecture' },
    {
      label: 'DevOps & Infrastructure',
      value:
        'Docker · Nginx (reverse proxy, production tuning) · Linux administration & setup (Ubuntu, Debian, Arch) · CI/CD (GitHub Actions, GitLab CI) · Bash scripting · AWS S3',
    },
    { label: 'Also worked with', value: 'Flutter/Dart · React Native · PHP/Laravel · C# · Vue.js · Python · Hapi.js · Strapi · Tailwind CSS' },
    { label: 'Testing & Docs', value: 'Jest · Swagger/OpenAPI' },
    { label: 'Tools & AI', value: 'Git · AI-assisted development (Claude Code) in personal projects' },
  ],
  openToRelocation: 'Open to relocation.',
  experience: {
    company: 'Mobile operator',
    role: 'Software Engineer (1st category)',
    period: 'Apr 2022 – Present',
    techStack:
      'Tech stack: TypeScript, JavaScript, Node.js, NestJS, Next.js, React, Hapi.js · MongoDB, PostgreSQL · RabbitMQ, WebSockets · Nginx, Docker · PHP, Laravel, C#, Vue.js',
    projects: [
      {
        title: 'Corporate Management Platform',
        summary: 'Corporate portal for data processing and customer request management, 17+ modules, scalable microservices architecture.',
        bullets: [
          'Designed the full architecture from scratch (DB schema to UI/UX).',
          'Two-way SMS module: outbound + inbound processing (1,000+/300+ daily).',
          'Request processing: 200+/day with automatic routing and status tracking.',
          'Auth across microservices; optimized queries across Oracle, PostgreSQL, MongoDB.',
          'Complex SQL and PL/SQL blocks over large joined tables for search, batch updates, and reporting.',
          'Awarded a company certificate for implementing portal modules.',
        ],
      },
      {
        title: 'CDR Streaming Parser',
        summary: 'High-load telecom parser replacing a manual workflow with an automated pipeline.',
        bullets: [
          'Processes multi-million-row files via queue with low, stable memory.',
          'Chunked reading to stream large files without full in-memory load.',
          'Batched PostgreSQL inserts for high-throughput ingestion.',
        ],
      },
      {
        title: 'Mass SMS Management System',
        bullets: [
          'SPA with real-time campaign status via WebSockets.',
          'Admin panel for campaign monitoring and control.',
          'Multi-database sync with change detection (eventual consistency).',
        ],
      },
      {
        title: 'Microservices for Data Processing',
        bullets: [
          'Microservices for JSON, TXT, DOCX, Excel processing with task queues.',
          'Document template generators and integration APIs.',
        ],
      },
      {
        title: 'DevOps & Infrastructure',
        bullets: [
          'Deployed and maintained apps in Docker (incl. production Docker/Nginx/Laravel).',
          'Linux server administration and setup (CLI, service config, deployment).',
          'Nginx reverse proxy; debugged production issues (TIME_WAIT, OPcache).',
        ],
      },
      {
        title: 'Corporate Systems Support',
        bullets: [
          'New features and legacy maintenance (PHP, Laravel, C#, Vue.js): business logic, debugging, production fixes.',
          'Jest unit tests to prevent regressions.',
          'Ongoing support, legacy refactoring/migration, critical bug and vulnerability fixes.',
        ],
      },
    ],
  },
  personalProjects: [
    {
      title: 'Language Learning Application',
      summary: 'a toolkit for learning foreign languages',
      bullets: [
        'Designed the full architecture from scratch: database, API, UI.',
        'Redis for payment idempotency, cron flag management, and leaderboard infrastructure (sorted sets).',
        'RabbitMQ task queues for background data processing.',
        'Containerized all services with Docker for deployment and scaling.',
      ],
      techStack: 'Tech stack: Next.js, NestJS, MongoDB, Redis, RabbitMQ, Node.js, Docker',
    },
    {
      title: 'Visual Novel',
      summary: 'game project',
      bullets: [
        'Deployed Qwen2.5-7B-Instruct locally via llama-server.',
        "The backend service calls llama-server's API to generate character dialogue and lines, giving each character its own personality and speech style without relying on external LLM APIs.",
      ],
      techStack: 'Tech stack: NestJS, Node.js, llama-server, Docker',
    },
    {
      title: 'Language Quiz Flashcards',
      summary: 'small pet project, local offline card storage',
      bullets: [],
      techStack: 'Tech stack: React Native, SQLite, Android build via Android Studio',
    },
    {
      title: 'Mobile Photo Application',
      bullets: [
        'Flutter client with a photo editor and content recommendation feed; NestJS backend.',
        'Python microservice for image processing.',
        'Python content-moderation microservice (detects NSFW/explicit content on upload).',
        'Node.js background worker for asynchronous processing.',
        'AWS S3 for cloud image storage.',
      ],
      techStack: 'Tech stack: Flutter/Dart, NestJS, Node.js, Python, AWS S3, Docker',
    },
    {
      title: 'Telegram Bots',
      bullets: [
        'Built a dating bot with profile forms and matchmaking.',
        'Built a job-search bot.',
        'Implemented commands and user input handling.',
      ],
      techStack: 'Tech stack: Node.js, Telegram Bot API',
    },
    {
      title: 'VK Chat Bot',
      bullets: [
        'Built a game bot with interactive features.',
        'Implemented a command system and game logic.',
        'Integrated with the VKontakte API for message handling.',
      ],
      techStack: 'Tech stack: Node.js, VK API',
    },
    {
      title: 'Corporate Messenger with Task Management',
      status: 'Thesis project (university)',
      bullets: [
        'Built a full-stack app for internal corporate communication.',
        'Implemented authorization and user management.',
        'Built chat functionality and task assignment.',
        'Integrated a database for storing message and task history.',
      ],
      techStack: 'Tech stack: Nest.js, React.js, Redux, PostgreSQL',
    },
    {
      title: 'Jewelry Online Store',
      status: 'Thesis project (college)',
      bullets: [
        'Implemented user authorization and registration.',
        'Built a product catalog with categories and filters.',
        'Built a cart and checkout system.',
        'Integrated a database for managing products and orders.',
      ],
      techStack: 'Tech stack: React.js, SQLite',
    },
  ],
  educationHeading: 'EDUCATION',
  education: [
    {
      institution: 'Volodymyr Dahl National University',
      degree: 'Bachelor, Software Engineering',
      credential: "Bachelor's degree",
      period: 'Sep 2022 – Jun 2024',
      note: 'Correspondence program — classes on weekends',
    },
    {
      institution: 'V. Dahl State University College',
      degree: 'Mid-level specialist, Programming in computer systems',
      credential: 'Diploma of secondary vocational education, with honors',
      period: 'Sep 2018 – Jun 2022',
      note: 'Got a job during my last year of college',
    },
  ],
  coursesLabel: 'Courses & certificates',
  courses: ['Infrastructure Solutions for Programmers — C-19154, 2025', 'Comprehensive Internet Marketing — Redford School, 2023'],
}

const ru: ResumeContent = {
  name: 'Елена Дука',
  title: 'Full Stack Developer',
  contacts: [
    { label: 'sadelenik.a@gmail.com', url: 'mailto:sadelenik.a@gmail.com' },
    { label: 'github.com/Sakitsudzukeru', url: 'https://github.com/Sakitsudzukeru' },
    { label: 'linkedin.com/in/elena-duka-212b803bb', url: 'https://www.linkedin.com/in/elena-duka-212b803bb/' },
  ],
  experienceHeading: 'ОПЫТ РАБОТЫ',
  personalProjectsHeading: 'ЛИЧНЫЕ ПРОЕКТЫ',
  summary:
    'Привет, меня зовут Елена, мне 23 года. Fullstack-разработчик с 4+ годами опыта создания масштабируемых веб-приложений. Специализируюсь на обработке высоконагруженных данных, оптимизации API и модульных системах для автоматизации бизнес-процессов; плотно работаю с DevOps: самостоятельно деплою и отлаживаю свои сервисы в проде. Спроектировала корпоративную платформу с нуля и сейчас параллельно с основной работой развиваю собственные продукты.',
  skillGroups: [
    { label: 'Основной стек', value: 'TypeScript · Node.js · NestJS · Express · Next.js · React · REST API · WebSockets' },
    {
      label: 'Данные и ORM',
      value: 'Oracle · PL/SQL · PostgreSQL · MariaDB · MongoDB · Redis · Prisma · TypeORM · Mongoose · работа с несколькими БД одновременно',
    },
    { label: 'Очереди и обмен сообщениями', value: 'RabbitMQ · фоновая обработка задач · событийная архитектура' },
    {
      label: 'DevOps и инфраструктура',
      value:
        'Docker · Nginx (reverse proxy, production-тюнинг) · администрирование и настройка Linux (Ubuntu, Debian, Arch) · CI/CD (GitHub Actions, GitLab CI) · Bash-скрипты · AWS S3',
    },
    { label: 'Также работала с', value: 'Flutter/Dart · React Native · PHP/Laravel · C# · Vue.js · Python · Hapi.js · Strapi · Tailwind CSS' },
    { label: 'Тестирование и документация', value: 'Jest · Swagger/OpenAPI' },
    { label: 'Инструменты и AI', value: 'Git · разработка с AI-ассистентом (Claude Code) в личных проектах' },
  ],
  openToRelocation: 'Открыта к релокации.',
  experience: {
    company: 'Мобильный оператор',
    role: 'Software Engineer (1 категория)',
    period: '04.2022 — наст. время',
    techStack:
      'Стек: TypeScript, JavaScript, Node.js, NestJS, Next.js, React, Hapi.js · MongoDB, PostgreSQL · RabbitMQ, WebSockets · Nginx, Docker · PHP, Laravel, C#, Vue.js',
    projects: [
      {
        title: 'Корпоративная платформа управления',
        summary:
          'Корпоративный портал для обработки данных и управления клиентскими запросами, 17+ модулей, масштабируемая микросервисная архитектура.',
        bullets: [
          'Спроектировала полную архитектуру с нуля (от схемы БД до UI/UX).',
          'Модуль двусторонних SMS: исходящие уведомления + обработка входящих (1000+/300+ в день).',
          'Система обработки заявок: 200+/день с автоматической маршрутизацией и отслеживанием статусов.',
          'Авторизация между микросервисами; оптимизация запросов по Oracle, PostgreSQL, MongoDB.',
          'Сложные SQL и PL/SQL блоки над большими связанными (joined) таблицами для поиска, пакетных обновлений, отчётности.',
          'Награждёна сертификатом компании за реализацию модулей портала.',
        ],
      },
      {
        title: 'CDR Streaming Parser',
        summary: 'Высоконагруженный парсер для телеком-данных, заменивший ручной процесс обработки.',
        bullets: [
          'Обрабатывает файлы с миллионами строк через очередь при низком и стабильном потреблении памяти.',
          'Потоковое (chunked) чтение для обработки больших файлов (2+ млн записей) без полной загрузки в память.',
          'Пакетные (batched) вставки в PostgreSQL для высокой пропускной способности загрузки данных.',
        ],
      },
      {
        title: 'Система массовых SMS-рассылок',
        bullets: [
          'SPA с отслеживанием статуса кампаний в реальном времени через WebSockets.',
          'Админ-панель для мониторинга и управления кампаниями.',
          'Модуль синхронизации между базами данных с детекцией изменений (eventual consistency).',
        ],
      },
      {
        title: 'Микросервисы обработки данных',
        bullets: [
          'Микросервисы для обработки JSON, TXT, DOCX, Excel с очередями задач под большие объёмы.',
          'Генераторы шаблонов документов и интеграционные API.',
        ],
      },
      {
        title: 'DevOps и инфраструктура',
        bullets: [
          'Деплой и поддержка приложений в Docker (продакшн Docker/Nginx/Laravel).',
          'Администрирование Linux-серверов (CLI, настройка сервисов, деплой).',
          'Nginx как reverse proxy; дебаг продакшн-инцидентов (TIME_WAIT, OPcache).',
        ],
      },
      {
        title: 'Поддержка корпоративных систем',
        bullets: [
          'Новый функционал + поддержка легаси-кода (PHP, Laravel, C#, Vue.js): бизнес-логика, дебаг, продакшн-фиксы.',
          'Jest-тесты для предотвращения регрессий.',
          'Постоянная поддержка продакшн-систем, рефакторинг и миграция легаси, устранение критических багов и уязвимостей.',
        ],
      },
    ],
  },
  personalProjects: [
    {
      title: 'Language Learning Application',
      summary: 'инструмент для изучения иностранных языков',
      bullets: [
        'Спроектировала полную архитектуру с нуля: база данных, API, UI.',
        'Redis для идемпотентности платежей, управления cron-флагами и инфраструктурой лидерборда (sorted sets).',
        'Очереди задач RabbitMQ для фоновой обработки данных.',
        'Контейнеризация всех сервисов через Docker для деплоя и масштабирования.',
      ],
      techStack: 'Стек: Next.js, NestJS, MongoDB, Redis, RabbitMQ, Node.js, Docker',
    },
    {
      title: 'Визуальная новелла',
      summary: 'игровой проект',
      bullets: [
        'Развернула локально Qwen2.5-7B-Instruct через llama-server.',
        'Бэкенд-сервис приложения обращается к llama-server по API для генерации диалогов и реплик персонажей, что даёт каждому персонажу собственную индивидуальность и стиль речи без обращения к внешним LLM API.',
      ],
      techStack: 'Стек: NestJS, Node.js, llama-server, Docker',
    },
    {
      title: 'Квиз-карточки для изучения языка',
      summary: 'мини пет-проект, локальное офлайн-хранение карточек',
      bullets: [],
      techStack: 'Стек: React Native, SQLite, Android-сборка через Android Studio',
    },
    {
      title: 'Мобильное приложение для работы с картинками',
      bullets: [
        'Flutter-клиент с фоторедактором и лентой рекомендаций контента; бэкенд на NestJS.',
        'Python-микросервис обработки изображений.',
        'Python-микросервис контент-модерации (детект NSFW/эксплицитного контента при загрузке).',
        'Фоновый воркер на Node.js для асинхронной обработки.',
        'AWS S3 для облачного хранения изображений.',
      ],
      techStack: 'Стек: Flutter/Dart, NestJS, Node.js, Python, AWS S3, Docker',
    },
    {
      title: 'Телеграм-боты',
      bullets: [
        'Разработка бота для знакомств с системой анкет и подбора пар.',
        'Создание бота для поиска работы.',
        'Реализация команд и обработки пользовательского ввода.',
      ],
      techStack: 'Стек: Node.js, Telegram Bot API',
    },
    {
      title: 'ВК чат-бот',
      bullets: [
        'Создание игрового бота с интерактивными функциями.',
        'Реализация системы команд и игровой логики.',
        'Интеграция с API ВКонтакте для обработки сообщений.',
      ],
      techStack: 'Стек: Node.js, VK API',
    },
    {
      title: 'Корпоративный мессенджер с системой управления задачами',
      status: 'Дипломный проект (университет)',
      bullets: [
        'Разработка full-stack приложения для внутрикорпоративного общения.',
        'Реализация системы авторизации и управления пользователями.',
        'Создание функционала чатов и назначения задач.',
        'Интеграция с базой данных для хранения истории сообщений и задач.',
      ],
      techStack: 'Стек: Nest.js, React.js, Redux, PostgreSQL',
    },
    {
      title: 'Интернет-магазин ювелирных украшений',
      status: 'Дипломный проект (колледж)',
      bullets: [
        'Реализация системы авторизации и регистрации пользователей.',
        'Разработка каталога товаров с категориями и фильтрами.',
        'Создание корзины и системы оформления заказов.',
        'Интеграция с базой данных для управления товарами и заказами.',
      ],
      techStack: 'Стек: React.js, SQLite',
    },
  ],
  educationHeading: 'ОБРАЗОВАНИЕ',
  education: [
    {
      institution: 'Volodymyr Dahl National University',
      degree: 'Бакалавр, программная инженерия',
      credential: 'Бакалавриат',
      period: 'сент. 2022 — июнь 2024',
      note: 'Заочная форма обучения — занятия по выходным',
    },
    {
      institution: 'V. Dahl State University College',
      degree: 'Младший специалист, программирование в компьютерных системах',
      credential: 'Диплом о среднем профессиональном образовании с отличием',
      period: 'сент. 2018 — июнь 2022',
      note: 'Устроилась на работу на последнем курсе колледжа',
    },
  ],
  coursesLabel: 'Курсы и сертификаты',
  courses: ['Infrastructure Solutions for Programmers — C-19154, 2025', 'Комплексный интернет-маркетинг — Redford School, 2023'],
}

export const resumeByLocale: Record<Locale, ResumeContent> = { ru, en }

const shortEn: ShortResumeContent = {
  summary: en.summary,
  supportBullets: [
    'Feature development and legacy maintenance (PHP/Laravel, C#, Vue.js), refactoring and migration.',
    'Production bug and vulnerability fixes; Jest unit tests to prevent regressions.',
  ],
  personalHighlights: [
    {
      title: 'LangLib — language learning platform',
      note: 'Full-stack platform for learning languages: payments, idempotency, word-analog search. Next.js, NestJS, MongoDB, Redis, RabbitMQ.',
    },
    {
      title: 'Visual Novel',
      note: 'Game project with a local LLM (Qwen2.5-7B via llama-server) generating unique character dialogue.',
    },
    {
      title: 'Mobile Photo Application',
      note: 'Flutter client with a photo editor, NestJS backend, Python services for image processing and NSFW moderation.',
    },
  ],
  personalOther:
    'Also built language-quiz flashcards (React Native), Telegram bots (dating, job search), a VK game chat bot, and two thesis projects — a corporate messenger and a jewelry online store.',
  courses: ['Infrastructure Solutions for Programmers — C-19154, 2025'],
}

const shortRu: ShortResumeContent = {
  summary: ru.summary,
  supportBullets: [
    'Разработка нового функционала и поддержка легаси (PHP/Laravel, C#, Vue.js), рефакторинг и миграция.',
    'Исправление продакшн-багов и уязвимостей; Jest-тесты для предотвращения регрессий.',
  ],
  personalHighlights: [
    {
      title: 'LangLib — языковая платформа',
      note: 'Full-stack платформа для изучения языков: платежи, идемпотентность, поиск аналогов слов. Next.js, NestJS, MongoDB, Redis, RabbitMQ.',
    },
    {
      title: 'Визуальная новелла',
      note: 'Игровой проект с локальной LLM (Qwen2.5-7B через llama-server) для генерации уникальных диалогов персонажей.',
    },
    {
      title: 'Мобильное приложение для работы с картинками',
      note: 'Flutter-клиент с фоторедактором, NestJS backend, Python-сервисы обработки изображений и NSFW-модерации.',
    },
  ],
  personalOther:
    'Также делала квиз-карточки для изучения языка (React Native), Telegram-ботов (знакомства, поиск работы), игрового чат-бота для ВКонтакте и два дипломных проекта — корпоративный мессенджер и интернет-магазин украшений.',
  courses: ['Infrastructure Solutions for Programmers — C-19154, 2025'],
}

export const shortResumeByLocale: Record<Locale, ShortResumeContent> = { ru: shortRu, en: shortEn }
