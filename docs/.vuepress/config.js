module.exports = {
  title: 'TypeScript4 文档',
  description: 'TypeScript4 最新官方文档翻译',
  base: '/learn-typescript/',
  // 设置主题
  theme: 'reco',
  // 设置语言
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  // 设置顶部菜单
  themeConfig: {
    // lastUpdated: '上次更新',
    subSidebar: 'auto',
    nav: [
      { text: '首页', link: '/' },
      {
        text: 'JavaScript 博客',
        items: [
          { text: 'Baidu', link: 'https://www.baidu.com/' },
          { text: '掘金', link: 'https://juejin.cn/' }
        ]
      }
    ],
    // 设置左侧菜单
    sidebar: [
      {
        title: '欢迎学习',
        path: '/',
        collapsable: false,
        children: [{ title: '学前必读', path: '/' }]
      },
      {
        title: '基础学习',
        path: '/handbook/ConditionalTypes',
        collapsable: false,
        children: [
          { title: '条件类型', path: '/handbook/ConditionalTypes' },
          { title: '泛型', path: '/handbook/Generics' }
        ]
      }
    ]
  }
}
