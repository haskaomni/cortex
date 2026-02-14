import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/cortex/',
  title: 'Cortex',
  description: '前额叶训练手册 — 系统化课程，在任何意识状态下保持大脑主权',
  lang: 'zh-CN',
  cleanUrls: true,

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '开始训练', link: '/training/00-overview' }
    ],

    sidebar: [
      {
        text: '课程总览',
        items: [
          { text: '总览', link: '/training/00-overview' }
        ]
      },
      {
        text: '第一阶段 · 地基',
        items: [
          { text: '01 · 睡眠', link: '/training/01-sleep' },
          { text: '02 · 营养', link: '/training/02-nutrition' },
          { text: '03 · 运动', link: '/training/03-exercise' }
        ]
      },
      {
        text: '第二阶段 · 冷训练',
        items: [
          { text: '04 · 抑制控制', link: '/training/04-inhibition' },
          { text: '05 · 工作记忆', link: '/training/05-working-memory' },
          { text: '06 · 注意力', link: '/training/06-attention' }
        ]
      },
      {
        text: '第三阶段 · 热训练',
        items: [
          { text: '07 · 情绪调节', link: '/training/07-emotion-regulation' },
          { text: '08 · 延迟满足', link: '/training/08-delayed-gratification' },
          { text: '09 · 认知重构', link: '/training/09-cognitive-reframing' }
        ]
      },
      {
        text: '第四阶段 · 极限训练',
        items: [
          { text: '10 · 在恐惧中思考', link: '/training/10-fear' },
          { text: '11 · 在兴奋中思考', link: '/training/11-excitement' },
          { text: '12 · 在梦中思考', link: '/training/12-lucid-dreaming' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/haskaomni/cortex' }
    ],

    footer: {
      message: '训练你的前额叶',
      copyright: '© 2026 Cortex'
    },

    outline: { label: '目录' },
    docFooter: { prev: '上一环节', next: '下一环节' }
  }
})
