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
  period: string
}

export interface ResumeContent {
  name: string
  title: string
  location: string
  contacts: { label: string; url: string }[]
  experienceHeading: string
  personalProjectsHeading: string
  languagesHeading: string
  summaryHeading: string
  skillsHeading: string
  summary: string
  skillGroups: SkillGroupLine[]
  experience: {
    company: string
    role: string
    period: string
    projects: ExperienceProject[]
  }
  personalProjects: PersonalProject[]
  educationHeading: string
  education: ResumeEducationItem[]
  coursesLabel: string
  courses: string[]
  languagesLine: string
}

export interface ShortResumeContent {
  summary: string
  personalHighlights: { title: string; note: string }[]
  personalOther: string
  courses: string[]
}

const en: ResumeContent = {
  name: 'Elena Duka',
  title: 'Full-Stack Developer · TypeScript · Node.js · React',
  location: 'Based in Novi Sad, Serbia (from December 2026)',
  contacts: [
    { label: 'sadelenik.a@gmail.com', url: 'mailto:sadelenik.a@gmail.com' },
    { label: 'github.com/Sakitsudzukeru', url: 'https://github.com/Sakitsudzukeru' },
    { label: 'linkedin.com/in/elena-duka-212b803bb', url: 'https://www.linkedin.com/in/elena-duka-212b803bb/' },
    { label: 'sakitsudzukeru.github.io/my-profile', url: 'https://sakitsudzukeru.github.io/my-profile/' },
  ],
  experienceHeading: 'EXPERIENCE',
  personalProjectsHeading: 'PERSONAL PROJECTS',
  languagesHeading: 'LANGUAGES',
  summaryHeading: 'SUMMARY',
  skillsHeading: 'SKILLS',
  summary:
    'Full-stack developer with 4+ years of commercial experience building web platforms, APIs, and high-load data-processing services for a telecom company. Designed a 17-module corporate platform from scratch, built messaging and request-routing systems handling 1,000+ SMS and 200+ requests daily, and own services end-to-end – from database design to Docker/Nginx deployment and production support.',
  skillGroups: [
    { label: 'Languages & Frameworks', value: 'TypeScript, JavaScript, Node.js, NestJS, Express, Next.js, React, Vue.js' },
    { label: 'Databases', value: 'PostgreSQL, Oracle (PL/SQL), MongoDB, MariaDB, Redis · Prisma, TypeORM, Mongoose' },
    { label: 'Messaging & Real-time', value: 'RabbitMQ, WebSockets, background jobs, event-driven architecture' },
    { label: 'DevOps', value: 'Docker, Nginx, Linux (Ubuntu, Debian), CI/CD (GitHub Actions, GitLab CI), Bash, AWS S3' },
    { label: 'Testing & Docs', value: 'Jest, Swagger/OpenAPI' },
    {
      label: 'Design',
      value: 'Adobe Photoshop, Krita, Figma (basic) · product cards & infographics, banners, landing pages, illustrations, presentations',
    },
    { label: 'Marketing (practice-based courses)', value: 'sales funnel, target audience analysis, content strategy' },
    { label: 'Also worked with', value: 'PHP/Laravel, C#, React Native, Flutter/Dart, Python' },
    { label: 'Tools & AI', value: 'Git · agentic AI tooling (Claude Code) for workflow automation and accelerated prototyping' },
  ],
  experience: {
    company: 'Mobile operator (telecom), Russia',
    role: 'Software Engineer',
    period: 'Apr 2022 – Present',
    projects: [
      {
        title: 'Corporate Management Platform',
        bullets: [
          'Designed and built a corporate platform from scratch (17+ modules, microservices), covering DB schema, backend and UI/UX.',
          'Built a two-way SMS module processing 1,000+ outbound and 300+ inbound messages daily.',
          'Automated request routing and status tracking for 200+ customer requests per day.',
          'Implemented authentication across microservices and optimized queries across Oracle, PostgreSQL and MongoDB.',
          'Wrote complex SQL and PL/SQL for search, batch updates and reporting over large joined tables.',
          'Received a company award for implementing key platform modules.',
        ],
      },
      {
        title: 'CDR Streaming Parser',
        bullets: [
          'Replaced a manual workflow with an automated high-load pipeline processing multi-million-row telecom files.',
          'Implemented chunked streaming and batched PostgreSQL inserts to keep memory usage low and stable.',
        ],
      },
      {
        title: 'Mass SMS Management System',
        bullets: [
          'Built a SPA with real-time campaign status via WebSockets and an admin panel for monitoring and control.',
          'Implemented multi-database sync with change detection (eventual consistency).',
        ],
      },
      {
        title: 'Data Processing Microservices',
        bullets: ['Developed queue-based microservices for JSON, TXT, DOCX and Excel processing, document template generators and integration APIs.'],
      },
      {
        title: 'DevOps & Support',
        bullets: [
          'Deployed and maintained production services in Docker with Nginx reverse proxy; debugged production issues (TIME_WAIT, OPcache).',
          'Maintained and refactored legacy systems (PHP/Laravel, C#, Vue.js), fixed critical bugs and vulnerabilities, added Jest unit tests.',
        ],
      },
      {
        title: 'Marketing & Design (course project)',
        summary: 'Korean cosmetics store',
        bullets: [
          "Built a content strategy for the store's social media: content plan, formats and topics.",
          'Designed product cards, infographics and banners for skincare products in Adobe Photoshop.',
        ],
      },
    ],
  },
  personalProjects: [
    {
      title: 'LangLib – Language Learning Application',
      summary: 'A toolkit for learning foreign languages',
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
      summary: 'Game project',
      bullets: [
        'Deployed Qwen2.5-7B-Instruct locally via llama-server.',
        "The backend service calls llama-server's API to generate character dialogue and lines, giving each character its own personality and speech style without relying on external LLM APIs.",
      ],
      techStack: 'Tech stack: NestJS, Node.js, llama-server, Docker',
    },
    {
      title: 'Language Quiz Flashcards',
      summary: 'Small pet project, local offline card storage',
      bullets: [],
      techStack: 'Tech stack: React Native, SQLite, Android build via Android Studio',
    },
    {
      title: 'Mobile Photo Application',
      bullets: [
        'Flutter client with a photo editor and content recommendation feed; NestJS backend.',
        'Python microservice for image processing.',
        'Python content-moderation microservice (detects explicit content on upload).',
        'Node.js background worker for asynchronous processing.',
        'AWS S3 for cloud image storage.',
      ],
      techStack: 'Tech stack: Flutter/Dart, NestJS, Node.js, Python, AWS S3, Docker',
    },
    {
      title: 'Telegram Bots',
      bullets: ['Built a dating bot with profile forms and matchmaking.', 'Built a job-search bot.', 'Implemented commands and user input handling.'],
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
      techStack: 'Tech stack: NestJS, React, Redux, PostgreSQL',
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
      techStack: 'Tech stack: React, SQLite',
    },
  ],
  educationHeading: 'EDUCATION',
  education: [
    { institution: 'V. Dahl State University', degree: 'B.Sc., Software Engineering', period: '2024' },
    { institution: 'V. Dahl State University College', degree: 'Diploma in Programming (with honors)', period: '2022' },
  ],
  coursesLabel: 'Courses & certificates',
  courses: [
    'Infrastructure Solutions for Programmers – Institute of Applied Automation and Programming, 2025',
    'Comprehensive Internet Marketing – Redford School, 2023',
  ],
  languagesLine: 'Russian – native · English – B2 (actively improving) · Serbian – learning',
}

const ru: ResumeContent = {
  name: 'Елена Дука',
  title: 'Full-Stack разработчик · TypeScript · Node.js · React',
  location: 'Нови-Сад, Сербия (с декабря 2026)',
  contacts: [
    { label: 'sadelenik.a@gmail.com', url: 'mailto:sadelenik.a@gmail.com' },
    { label: 'github.com/Sakitsudzukeru', url: 'https://github.com/Sakitsudzukeru' },
    { label: 'linkedin.com/in/elena-duka-212b803bb', url: 'https://www.linkedin.com/in/elena-duka-212b803bb/' },
    { label: 'sakitsudzukeru.github.io/my-profile', url: 'https://sakitsudzukeru.github.io/my-profile/' },
  ],
  experienceHeading: 'ОПЫТ РАБОТЫ',
  personalProjectsHeading: 'ЛИЧНЫЕ ПРОЕКТЫ',
  languagesHeading: 'ЯЗЫКИ',
  summaryHeading: 'О СЕБЕ',
  skillsHeading: 'НАВЫКИ',
  summary:
    'Fullstack-разработчик с 4+ годами коммерческого опыта создания веб-платформ, API и высоконагруженных сервисов обработки данных для телеком-компании. Спроектировала с нуля корпоративную платформу из 17+ модулей, разработала системы обмена сообщениями и маршрутизации заявок на 1000+ SMS и 200+ заявок в день, веду свои сервисы полностью – от схемы БД до деплоя в Docker/Nginx и поддержки в проде.',
  skillGroups: [
    { label: 'Языки и фреймворки', value: 'TypeScript, JavaScript, Node.js, NestJS, Express, Next.js, React, Vue.js' },
    { label: 'Базы данных', value: 'PostgreSQL, Oracle (PL/SQL), MongoDB, MariaDB, Redis · Prisma, TypeORM, Mongoose' },
    { label: 'Обмен сообщениями и real-time', value: 'RabbitMQ, WebSockets, фоновые задачи, событийная архитектура' },
    { label: 'DevOps', value: 'Docker, Nginx, Linux (Ubuntu, Debian), CI/CD (GitHub Actions, GitLab CI), Bash, AWS S3' },
    { label: 'Тестирование и документация', value: 'Jest, Swagger/OpenAPI' },
    {
      label: 'Дизайн',
      value: 'Adobe Photoshop, Krita, Figma (базово) · карточки товаров и инфографика, баннеры, лендинги, иллюстрации, презентации',
    },
    { label: 'Маркетинг (практические курсы)', value: 'воронка продаж, анализ ЦА, контент-стратегия' },
    { label: 'Также работала с', value: 'PHP/Laravel, C#, React Native, Flutter/Dart, Python' },
    { label: 'Инструменты и AI', value: 'Git · агентные AI-инструменты (Claude Code) для автоматизации процессов и ускорения разработки' },
  ],
  experience: {
    company: 'Мобильный оператор (телеком), Россия',
    role: 'Инженер-программист',
    period: '04.2022 – наст. время',
    projects: [
      {
        title: 'Корпоративная платформа управления',
        bullets: [
          'Спроектировала и разработала с нуля корпоративную платформу (17+ модулей, микросервисы): от схемы БД до бэкенда и UI/UX.',
          'Разработала модуль двусторонних SMS: 1 000+ исходящих и 300+ входящих сообщений в день.',
          'Автоматизировала маршрутизацию и отслеживание статусов для 200+ заявок клиентов в день.',
          'Реализовала авторизацию между микросервисами, оптимизировала запросы к Oracle, PostgreSQL и MongoDB.',
          'Писала сложные SQL-запросы и PL/SQL-блоки для поиска, пакетных обновлений и отчётов по большим связанным таблицам.',
          'Награждена грамотой компании за внедрение ключевых модулей платформы.',
        ],
      },
      {
        title: 'Потоковый парсер CDR',
        bullets: [
          'Заменила ручной процесс автоматизированным высоконагруженным пайплайном обработки телеком-файлов на миллионы строк.',
          'Реализовала потоковое чтение чанками и пакетные вставки в PostgreSQL для низкого и стабильного потребления памяти.',
        ],
      },
      {
        title: 'Система управления массовыми SMS-рассылками',
        bullets: [
          'Разработала SPA со статусом рассылок в реальном времени через WebSockets и админ-панель для мониторинга и управления.',
          'Реализовала синхронизацию нескольких БД с отслеживанием изменений (eventual consistency).',
        ],
      },
      {
        title: 'Микросервисы обработки данных',
        bullets: ['Разработала микросервисы на очередях для обработки JSON, TXT, DOCX и Excel, генераторы документов по шаблонам и интеграционные API.'],
      },
      {
        title: 'DevOps и поддержка',
        bullets: [
          'Разворачивала и поддерживала продакшен-сервисы в Docker с Nginx (reverse proxy); отлаживала проблемы в продакшене (TIME_WAIT, OPcache).',
          'Поддерживала и рефакторила legacy-системы (PHP/Laravel, C#, Vue.js), исправляла критические баги и уязвимости, покрывала код unit-тестами на Jest.',
        ],
      },
      {
        title: 'Маркетинг и дизайн (учебный проект)',
        summary: 'Магазин корейской косметики',
        bullets: [
          'Разработала контент-стратегию для соцсетей магазина: контент-план, форматы и темы.',
          'Создавала карточки товаров, инфографику и баннеры для уходовой косметики в Adobe Photoshop.',
        ],
      },
    ],
  },
  personalProjects: [
    {
      title: 'LangLib – приложение для изучения языков',
      summary: 'Инструмент для изучения иностранных языков',
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
      summary: 'Игровой проект',
      bullets: [
        'Развернула локально Qwen2.5-7B-Instruct через llama-server.',
        'Бэкенд-сервис приложения обращается к llama-server по API для генерации диалогов и реплик персонажей, что даёт каждому персонажу собственную индивидуальность и стиль речи без обращения к внешним LLM API.',
      ],
      techStack: 'Стек: NestJS, Node.js, llama-server, Docker',
    },
    {
      title: 'Квиз-карточки для изучения языка',
      summary: 'Мини пет-проект, локальное офлайн-хранение карточек',
      bullets: [],
      techStack: 'Стек: React Native, SQLite, Android-сборка через Android Studio',
    },
    {
      title: 'Мобильное приложение для работы с картинками',
      bullets: [
        'Flutter-клиент с фоторедактором и лентой рекомендаций контента; бэкенд на NestJS.',
        'Python-микросервис обработки изображений.',
        'Python-микросервис контент-модерации (детект эксплицитного контента при загрузке).',
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
      techStack: 'Стек: NestJS, React, Redux, PostgreSQL',
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
      techStack: 'Стек: React, SQLite',
    },
  ],
  educationHeading: 'ОБРАЗОВАНИЕ',
  education: [
    { institution: 'Государственный университет им. В. Даля', degree: 'Бакалавр, программная инженерия', period: '2024' },
    { institution: 'Колледж Государственного университета им. В. Даля', degree: 'Техник-программист (диплом с отличием)', period: '2022' },
  ],
  coursesLabel: 'Курсы и сертификаты',
  courses: [
    'Infrastructure Solutions for Programmers – Институт прикладной автоматизации и программирования, 2025',
    'Комплексный интернет-маркетинг – Redford School, 2023',
  ],
  languagesLine: 'Русский – родной · Английский – B2 (совершенствую) · Сербский – изучаю',
}

export const resumeByLocale: Record<Locale, ResumeContent> = { ru, en }

const shortEn: ShortResumeContent = {
  summary: en.summary,
  personalHighlights: [
    {
      title: 'LangLib – language learning platform',
      note: 'Full-stack platform for learning languages: payments, idempotency, similar-word search. Next.js, NestJS, MongoDB, Redis, RabbitMQ.',
    },
    {
      title: 'Visual Novel',
      note: 'Game project with a local LLM (Qwen2.5-7B via llama-server) generating unique character dialogue.',
    },
    {
      title: 'Mobile Photo Application',
      note: 'Flutter client with a photo editor, NestJS backend, Python services for image processing and content moderation.',
    },
  ],
  personalOther:
    'Also built language-quiz flashcards (React Native), Telegram bots (dating, job search), a VK game chat bot, and two thesis projects – a corporate messenger and a jewelry online store.',
  courses: ['Infrastructure Solutions for Programmers – Institute of Applied Automation and Programming, 2025'],
}

const shortRu: ShortResumeContent = {
  summary: ru.summary,
  personalHighlights: [
    {
      title: 'LangLib – языковая платформа',
      note: 'Full-stack платформа для изучения языков: платежи, идемпотентность, поиск похожих слов. Next.js, NestJS, MongoDB, Redis, RabbitMQ.',
    },
    {
      title: 'Визуальная новелла',
      note: 'Игровой проект с локальной LLM (Qwen2.5-7B через llama-server) для генерации уникальных диалогов персонажей.',
    },
    {
      title: 'Мобильное приложение для работы с картинками',
      note: 'Flutter-клиент с фоторедактором, NestJS backend, Python-сервисы обработки изображений и контент-модерации.',
    },
  ],
  personalOther:
    'Также делала квиз-карточки для изучения языка (React Native), Telegram-ботов (знакомства, поиск работы), игрового чат-бота для ВКонтакте и два дипломных проекта – корпоративный мессенджер и интернет-магазин украшений.',
  courses: ['Infrastructure Solutions for Programmers – Институт прикладной автоматизации и программирования, 2025'],
}

export const shortResumeByLocale: Record<Locale, ShortResumeContent> = { ru: shortRu, en: shortEn }
