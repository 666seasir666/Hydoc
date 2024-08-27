import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
  mySidebar: [
    {
      type: 'autogenerated',
      dirName: '.'
    }
  ], // 自动生成侧边栏
}

module.exports = sidebars
