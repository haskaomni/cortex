import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/cortex/',
  title: 'Cortex',
  description: '前额叶 — 探索大脑的指挥中心',
  lang: 'zh-CN',
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/blog/' }
    ],

    sidebar: [
      {
        text: '文章',
        items: [
          { text: '前额叶全谱系训练体系', link: '/blog/pfc-full-spectrum-training' },
          { text: '什么是前额叶皮层？', link: '/blog/what-is-prefrontal-cortex' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/haskaomni/cortex' }
    ],

    footer: {
      message: '探索大脑的前沿',
      copyright: '© 2026 Cortex'
    },

    outline: {
      label: '目录'
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  }
})
