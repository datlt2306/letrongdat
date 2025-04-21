export default {
    title: "Polytuts",
    description: "Interactive learning platform for web development",
    themeConfig: {
        nav: [
            { text: "Home", link: "/" },
            { text: "HTML/CSS", link: "/html-css/" },
            { text: "JavaScript", link: "/javascript/" },
            { text: "React", link: "/react/" },
            { text: "Node.js", link: "/nodejs/" },
            { text: "MongoDB", link: "/mongodb/" },
            { text: "Blog", link: "/blog/" }, // Added blog link to main navigation
            { text: "NextJs", link: "/nextjs/" }, // Added blog link to main navigation
        ],
        sidebar: {
            "/html-css/": [
                {
                    text: "Chapter 1: Cơ bản về HTML",
                    collapsed: false,
                    items: [
                        { text: "1.1 Giới thiệu HTML", link: "/html-css/" },
                        { text: "1.2 Cấu trúc trang HTML", link: "/html-css/html-structure" },
                        { text: "1.3 Các thẻ HTML cơ bản", link: "/html-css/html-tags" },
                    ],
                },
                {
                    text: "Chapter 2: CSS Cơ bản",
                    collapsed: false,
                    items: [
                        { text: "2.1 Giới thiệu CSS", link: "/html-css/intro-css" },
                        { text: "2.2 Selectors & Properties", link: "/html-css/css-selectors" },
                        { text: "2.3 Box Model", link: "/html-css/box-model" },
                    ],
                },
                {
                    text: "Chapter 3: Layout & Responsive Design",
                    collapsed: false,
                    items: [
                        { text: "3.1 Flexbox", link: "/html-css/flexbox" },
                        { text: "3.2 CSS Grid", link: "/html-css/css-grid" },
                        { text: "3.3 Media Queries", link: "/html-css/media-queries" },
                    ],
                },
                {
                    text: "Chapter 4: CSS Nâng cao",
                    collapsed: false,
                    items: [
                        { text: "4.1 CSS Animations", link: "/html-css/animations" },
                        { text: "4.2 CSS Variables", link: "/html-css/css-variables" },
                        { text: "4.3 CSS Frameworks", link: "/html-css/frameworks" },
                    ],
                },
            ],
            "/javascript/": [
                {
                    text: "Chapter 1: Giới thiệu JavaScript",
                    collapsed: false,
                    items: [
                        { text: "1.1 Giới thiệu về JavaScript", link: "/javascript/" },
                        { text: "1.2 Cài đặt môi trường", link: "/javascript/setup" },
                    ],
                },
                {
                    text: "Chapter 2: Nền tảng JavaScript",
                    collapsed: false,
                    items: [
                        {
                            text: "2.1 Biến, kiểu dữ liệu, toán tử",
                            link: "/javascript/variables-datatypes",
                        },
                        {
                            text: "2.2 Câu lệnh điều kiện, vòng lặp",
                            link: "/javascript/conditionals-loops",
                        },
                        { text: "2.3 Hàm & Scope", link: "/javascript/functions-scope" },
                    ],
                },
                {
                    text: "Chapter 3: JavaScript Nâng cao",
                    collapsed: false,
                    items: [
                        { text: "3.1 Object & Array", link: "/javascript/objects-arrays" },
                        { text: "3.2 Bất đồng bộ trong JavaScript", link: "/javascript/async" },
                        { text: "3.3 ES6+ Features", link: "/javascript/es6-features" },
                    ],
                },
                {
                    text: "Chapter 4: DOM & Browser APIs",
                    collapsed: false,
                    items: [
                        { text: "4.1 DOM Manipulation", link: "/javascript/dom" },
                        { text: "4.2 Events & Event Handling", link: "/javascript/events" },
                        { text: "4.3 Fetch API & AJAX", link: "/javascript/fetch-ajax" },
                    ],
                },
            ],
            "/react/": [
                {
                    text: "Chapter 1: React Fundamentals",
                    collapsed: false,
                    items: [
                        { text: "1.1 Giới thiệu về React", link: "/react/" },
                        { text: "1.2 React Components", link: "/react/components" },
                    ],
                },
                {
                    text: "Chapter 2: React State & Props",
                    collapsed: false,
                    items: [
                        { text: "2.1 Component State", link: "/react/state" },
                        { text: "2.2 Props & PropTypes", link: "/react/props" },
                    ],
                },
            ],
            "/nodejs/": [
                {
                    text: "Chapter 1: Node.js Basics",
                    collapsed: false,
                    items: [
                        { text: "1.1 Giới thiệu về Node.js", link: "/nodejs/" },
                        { text: "1.2 Modules & NPM", link: "/nodejs/modules" },
                    ],
                },
                {
                    text: "Chapter 2: Building APIs with Node.js",
                    collapsed: false,
                    items: [
                        { text: "2.1 REST API Basics", link: "/nodejs/rest-api" },
                        { text: "2.2 Express.js", link: "/nodejs/express" },
                    ],
                },
            ],
            "/mongodb/": [
                {
                    text: "Chapter 1: MongoDB Basics",
                    collapsed: false,
                    items: [
                        { text: "1.1 Giới thiệu về MongoDB", link: "/mongodb/" },
                        { text: "1.2 CRUD Operations", link: "/mongodb/crud" },
                    ],
                },
                {
                    text: "Chapter 2: Advanced MongoDB",
                    collapsed: false,
                    items: [
                        { text: "2.1 Aggregation Framework", link: "/mongodb/aggregation" },
                        { text: "2.2 Indexing & Performance", link: "/mongodb/indexing" },
                    ],
                },
            ],
            "/blog/": [
                {
                    text: "Blog Posts",
                    collapsed: false,
                    items: [
                        { text: "Tất cả bài viết", link: "/blog/" },
                        {
                            text: "Giới thiệu về phát triển web",
                            link: "/blog/intro-to-web-development",
                        },
                        { text: "JavaScript Tips", link: "/blog/javascript-tips" },
                        { text: "CSS Grid vs Flexbox", link: "/blog/css-grid-vs-flexbox" },
                    ],
                },
                {
                    text: "Chủ đề",
                    collapsed: false,
                    items: [
                        { text: "JavaScript", link: "/blog/tag/javascript" },
                        { text: "HTML & CSS", link: "/blog/tag/html-css" },
                        { text: "Web Performance", link: "/blog/tag/web-performance" },
                        { text: "Tutorials", link: "/blog/tag/tutorials" },
                    ],
                },
            ],
            "/nextjs/": [
                {
                    text: "Bắt đầu với Next.js",
                    collapsed: false,
                    items: [
                        { text: "1. Chào mừng đến với khóa học", link: "/nextjs/" },
                        {
                            text: "2. Nextjs là gì? tại sao sử dụng nó",
                            link: "/nextjs/nextjs-la-gi",
                        },
                    ],
                },
                {
                    text: "Chapter 2: Advanced MongoDB",
                    collapsed: false,
                    items: [
                        { text: "2.1 Aggregation Framework", link: "/mongodb/aggregation" },
                        { text: "2.2 Indexing & Performance", link: "/mongodb/indexing" },
                    ],
                },
            ],
        },
        socialLinks: [{ icon: "github", link: "https://github.com/yourusername/polytuts-4" }],
        footer: {
            message: "Released under the MIT License.",
            copyright: "Copyright © 2023-present Polytuts Learning",
        },
        search: {
            provider: "local",
        },
        outlineTitle: "Mục lục",
        lastUpdatedText: "Cập nhật lần cuối",
        darkModeSwitchLabel: "Chế độ hiển thị",
        returnToTopLabel: "Về đầu trang",
        sidebarMenuLabel: "Menu",
        docFooter: {
            prev: "Bài trước",
            next: "Bài tiếp theo",
        },
    },
    markdown: {
        lineNumbers: true,
    },
};
