import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
  // Blog 侧边栏配置
  Blog: [
    {
      label: '概述',
      type: 'doc',
      id: 'Blog/introduction', // 指向 introduction.md
    },
    {
      label: 'Blog部署指南',
      type: 'category',
      link: {
        type: 'doc',
        id: 'Blog/tutorial/index',  // 指向索引页文档的 ID
      },
      collapsed: true,  // 默认折叠侧边栏
      items: [

        {
          小张的个人博客: [
            {
              type: 'doc',
              id: 'Blog/tutorial/BT/Detailed',
              label: '宝塔详细版'
            }
          ],
        },
        {
          全网最美博客: [
            {
              type: 'doc',
              id: 'Blog/tutorial/Ruyu-Blog/Ruyu-Blog',
              label: 'Ruyu-Blog V1.3.2'
            },
            {
              type: 'doc',
              id: 'Blog/tutorial/Ruyu-Blog/hitokoto',
              label: 'hitokoto'
            },
            {
              type: 'doc',
              id: 'Blog/tutorial/Ruyu-Blog/Music-module',
              label: 'Music module'
            },
            {
              type: 'doc',
              id: 'Blog/tutorial/Ruyu-Blog/Gitee',
              label: 'Gitee'
            }
          ],
        }
      ],
    },
  ], 
  skill: [
    'skill/introduction',
    {
      label: 'Docusaurus 主题魔改',
      type: 'category',
      link: {
        type: 'doc',
        id: 'skill/docusaurus/docusaurus-guides',
      },
      items: [
        'skill/docusaurus/docusaurus-config',
        'skill/docusaurus/docusaurus-style',
        'skill/docusaurus/docusaurus-component',
        'skill/docusaurus/docusaurus-plugin',
        'skill/docusaurus/docusaurus-search',
        'skill/docusaurus/docusaurus-comment',
        'skill/docusaurus/docusaurus-deploy',
      ],
    },
    {
      label: '代码规范',
      type: 'category',
      link: {
        type: 'doc',
        id: 'skill/code-specification/code-specification-guides',
      },
      items: [
        'skill/code-specification/eslint',
        'skill/code-specification/prettier',
        'skill/code-specification/stylelint',
        'skill/code-specification/editorconfig',
        'skill/code-specification/husky',
        'skill/code-specification/npmrc',
      ],
    },
    {
      label: 'Web',
      type: 'category',
      link: { type: 'generated-index' },
      items: [
        {
          label: 'Vue',
          type: 'category',
          link: { type: 'generated-index' },
          items: [
            'skill/web/vue/vue-reactive-data-object',
            'skill/web/vue/vue-reactive-data-array',
            'skill/web/vue/vue-reactive-data-basic-type',
            'skill/web/vue/pinia',
          ],
        },
        {
          label: 'React',
          type: 'category',
          link: { type: 'generated-index' },
          items: [
            {
              type: 'autogenerated',
              dirName: 'skill/web/react',
            },
          ],
        },
        {
          label: 'Css',
          type: 'category',
          link: { type: 'generated-index' },
          items: [
            {
              type: 'autogenerated',
              dirName: 'skill/web/css',
            },
          ],
        },
        {
          label: 'Browser',
          type: 'category',
          link: { type: 'generated-index' },
          items: [
            {
              type: 'autogenerated',
              dirName: 'skill/web/browser',
            },
          ],
        },
      ],
    },
    {
      label: 'JavaScript/Typescript',
      type: 'category',
      link: { type: 'generated-index' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'skill/js&ts',
        },
      ],
    },
    {
      label: 'Node',
      type: 'category',
      link: { type: 'generated-index' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'skill/node',
        },
      ],
    },
    {
      label: '编程语言',
      type: 'category',
      link: { type: 'generated-index' },
      items: [
        {
          label: 'Java',
          type: 'category',
          link: { type: 'generated-index' },
          items: [
            {
              type: 'autogenerated',
              dirName: 'skill/programming-languages/java',
            },
          ],
        },
        {
          label: 'Python',
          type: 'category',
          link: { type: 'generated-index' },
          items: [
            {
              type: 'autogenerated',
              dirName: 'skill/programming-languages/python',
            },
          ],
        },
        {
          label: 'Go',
          type: 'category',
          link: { type: 'generated-index' },
          items: [
            'skill/programming-languages/go/go-environment-install',
            'skill/programming-languages/go/go-json-usage',
            'skill/programming-languages/go/go-send-http-request',
            'skill/programming-languages/go/go-call-js',
            'skill/programming-languages/go/go-concurrent',
            'skill/programming-languages/go/try-gin-framework',
          ],
        },
      ],
    },
    {
      label: 'Git',
      type: 'category',
      link: { type: 'generated-index' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'skill/git',
        },
      ],
    },
    {
      label: '算法',
      type: 'category',
      link: {
        type: 'doc',
        id: 'skill/algorithm/algorithm-introduction',
      },
      items: [
        'skill/algorithm/two-sum',
        'skill/algorithm/three-sum',
        'skill/algorithm/sliding-window',
        'skill/algorithm/double-pointer',
      ],
    },
    {
      label: '逆向',
      type: 'category',
      link: {
        title: '逆向笔记',
        description: 'Web逆向与安卓逆向笔记',
        type: 'generated-index',
        keywords: ['reverse', 'web', 'android', 'frida'],
      },
      items: [
        {
          label: '安卓',
          type: 'category',
          link: { type: 'generated-index' },
          items: [
            {
              type: 'autogenerated',
              dirName: 'skill/reverse/android',
            },
          ],
        },
        {
          label: 'Web',
          type: 'category',
          items: [
            {
              type: 'autogenerated',
              dirName: 'skill/reverse/web',
            },
          ],
        },
        {
          label: '密码学',
          type: 'category',
          items: [
            {
              type: 'autogenerated',
              dirName: 'skill/reverse/crypto',
            },
          ],
        },
      ],
    },
    {
      label: 'Docker',
      type: 'category',
      link: { type: 'generated-index' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'skill/docker',
        },
      ],
    },
    {
      label: '数据库',
      type: 'category',
      link: {
        // title: '',
        // description: '',
        type: 'generated-index',
        keywords: ['database', 'mysql', 'mongodb', 'redis', 'elasticsearch'],
      },
      items: [
        {
          label: 'Mysql',
          type: 'category',
          link: {
            type: 'doc',
            id: 'skill/database/mysql/mysql-note',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'skill/database/mysql',
            },
          ],
        },
        {
          label: 'MongoDB',
          type: 'category',
          link: {
            type: 'doc',
            id: 'skill/database/mongo/mongodb-note',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'skill/database/mongo',
            },
          ],
        },
        {
          label: 'Redis',
          type: 'category',
          link: {
            type: 'doc',
            id: 'skill/database/redis/redis-note',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'skill/database/redis',
            },
          ],
        },
        {
          label: 'Elasticsearch',
          type: 'category',
          link: {
            type: 'doc',
            id: 'skill/database/elasticsearch/elasticsearch-note',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'skill/database/elasticsearch',
            },
          ],
        },
      ],
    },
    {
      label: '杂项',
      type: 'category',
      link: { type: 'generated-index' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'skill/misc',
        },
      ],
    },
    {
      label: 'nav模糊',
      type: 'category',
      link: { type: 'generated-index' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'skill/NavFilter',
        },
      ],
    },
  ],
  tools: [
    'tools/introduction',
    'tools/everything-quick-search-local-files',
    'tools/wappalyzer-recognize-technology',
    'tools/windows-custom-right-click-menu',
    'tools/vscode-config',
    'tools/idea-config',
    'tools/vite-plugin',
    'tools/jetbrains-product-activation-method',
  ], 
}

module.exports = sidebars
