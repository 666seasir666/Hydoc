---
id: Docusaurus-guides
slug: /Docusaurus-guides
title: Docusaurus 养成记录
author: Hyde
#用于在侧边栏中显示文档的顺序，数字越小越靠前
sidebar_position: 0
date: 2024-08-24
last_update:
  date: 2024-08-24
keywords: ['guides', 'Docusaurus', 'Docusaurus-guides']
---

- 这里记录着我搭建博客的部分踩坑过程，分享在这里希望能够给遇到类似问题或者需要类似教程的小伙伴一些帮助，尽量少走弯路。

- 对于博客框架底层的东西我也不是专业的，我的搭建的过程可以说是一通胡乱摸索，但是所记录的文档均是我运行成功的，可放心食用（如果有版本改动不一定适用）

- 如果遇到了和我不一样的情况，或者参考了我的步骤达不到预期效果，不要慌，要有耐心，要善于利用搜索引擎！！！

**👇 建议多翻阅文官文档，或许会有你需要的答案**

## 侧边栏类别生成的索引页
- 可选，并且将从父侧边栏类别的内容中自动推断出来
- 官方文档：https://docusaurus.io/blog/2022/09/01/docusaurus-2.1#doccardlist-improvements
- 在你需要的页面中添加以下代码
```jsx
import DocCardList from '@theme/DocCardList'; 

<DocCardList/>
```

<!-- 用于侧边栏类别生成的索引页 -->
<!-- 可选，并且将从父侧边栏类别的内容中自动推断出来 -->
<!-- 官方文档：https://docusaurus.io/blog/2022/09/01/docusaurus-2.1#doccardlist-improvements -->
import DocCardList from '@theme/DocCardList'; 

<DocCardList/>