# 演示 demo
- [vant-material](#)
- [echarts-material](#)
- [api-panel-plugin](#)

# 目录 Menu
- [安装 Installation](#)
- [介绍 Introduction](#)
  - [功能](#)
- [用法 Usage](#)
  - [Webpack](#)
  - [CDN](#)
- [组件 Components](#)
  - [lce-material](#)
  - [lce-tree](#)
  - [lce-render](#)
  - [lce-setter](#)
- [协议 Protocol](#)
  - [简单的例子](#)
  - [协议标准](#)
- [贡献指南 Contribution](#)

# 安装 Installation
```bash
npm install low-code-editor
```

# 介绍 Introduction

拿LCE(low-code editor)来做 LCDP(low-code development platform)

原理
[渲染函数](https://v3.cn.vuejs.org/guide/render-function.html#渲染函数)
尝试
[模板编译](https://v3.cn.vuejs.org/guide/render-function.html#模板编译)

## 功能

- [ ] 快捷键：复制、剪切、重做、粘贴、保存、下载、打开、回退、重做
- [ ] 历史记录存储与管理
- [ ] 组件选择高亮
- [ ] 组件树
- [ ] Desktop 与 Mobile 设计器切换
- [ ] 模拟器中预览

# 用法 Usage
## Webpack
## CDN

# 组件 Components

## lce-material

## lce-tree

## lce-render

## lce-setter

# 协议 Protocol

## 简单的例子
```javascript
{
  "version": "v1.0.0",
  "title": "LCE home page",
  "desc": "LCE protocol demo",
  "icon": "http://lce.com/logo.png",
  "elements": [
    {
      "type": "el-button",
      "props": {
        "type": "primary",
        "disabled": false,
        "@click": "goHome($event, 'http://lce.com/')",
        ":text": "buttonText"
      },
      "children": []
    }
  ],
  "script": `export default {
    data () {
      return {
        buttonText: 'LCE home'
      }
    },
    methods: {
      goHome (event, url) {
        location.href = url
      }
    }
  }`,
  "style": `
    :root {
      font-size: 16px;
      margin: 0;
    }
  `
}
```

## 协议标准

> \* 为了《按协议编写的文档》保存至服务器，我们使用了标准的 [JSON](https://www.json.org/json-zh.html)，所以 prop value 不支持节点中有 Function、Date 等对象或表达式。

#### version
类型：`String`<br>
详细：协议版本号，预留后续升级带来的兼容性考虑

#### title
类型：`String`<br>
详细：当前页面标题

#### description
类型：`String`<br>
详细：当前页面描述

#### elements
类型：`Array`<br>
详细：LCE 参考了 [Vue3 h()](https://v3.cn.vuejs.org/api/global-api.html#h)，加上 LCE 必要的字段

###### [node]
```javascript
{
  id: String,
  title: String,
  desc: String,
  icon: String,
  disabled: Boolean,
  hidden: Boolean,
  type: String,
  props: Object,
  children: Array
}
```

\* 纯文本节点有点特殊，通过 $text 描述，设置如下：
```javascript
{
  "type": "span",
  "props": {
    "$text": "纯文本"
  },
  "children": []
}
```
```html
<span>
  纯文本
</span>
```
\* 插槽 children 写法
```javascript
{
  "type": "todo-button",
  "props": {},
  "children": [
    {
      "type": "span",
      "props": {
        "$text": "'Add todo'"
      }
    }
  ]
}
// 等同于，具名插槽写法
{
  "type": "todo-button",
  "props": {},
  "children": [
    {
      "type": "template",
      "props": {
        "$slot:default": null
      },
      "children": [
        {
          "type": "span",
          "props": {
            "$text": "'Add todo'"
          }
        }
      ]
    }
  ]
}
```
```html
<todo-button>
  <span>Add todo<span>
</todo-button>
````

\* 具名插槽 children 写法
```javascript
{
  "type": "base-layout",
  "props": {},
  "children": [
    {
      "type": "template",
      "props": {
        "$slot:header": null
      },
      "children": [
        {
          "type": "h1",
          "props": {
            "$text": "'Here might be a page title'"
          }
        }
      ]
    },
    ...
  ]
}
```
```html
<base-layout>
  <template v-slot:header>
    <h1>Here might be a page title</h1>
  </template>

  <template v-slot:default>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </template>

  <template v-slot:footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
```

\* 作用域插槽 children 写法
```javascript
{
  "type": "todo-list",
  "props": {},
  "children": [
    {
      "type": "template",
      "props": {
        "$slot:default": "slotProps"
      },
      "children": [
        {
          "type": "span",
          "props": {
            "$text": "slotProps.item"
          }
        }
      ]
    },
    ...
  ]
}
```
```html
<todo-list>
  <template v-slot:default="slotProps">
    <span>{{ slotProps.item }}</span>
  </template>
  <template v-slot:other="otherSlotProps">
    ...
  </template>
</todo-list>
```

###### [node].props

**数据类型**<br>
```javascript
// 协议
{
  ...
  "type": "button",
  "props": {
    "size": "small", // String
    "border": 0, // Number
    ":setup": "{ foo: true }", // Object
    ":options": "['foo', 'bar', 'baz']", // Array
    "loading": false, // Boolean
    "disabled": null, // null
    ":date": "new Date()" // Others
  }
}
```
```html
<!-- Vue template -->
<button
  size="small"
  :border="0"
  :setup="{ foo: true }"
  :options="['foo', 'bar', 'baz']"
  :loading="false"
  disabled
  :date="new Date()"
>
```

**事件修饰符**<br>
```javascript
// 协议
{
  ...
  "type": "button",
  "props": {
    "@click.stop": "open"
  }
}
```
```html
<!-- Vue template -->
<button @click.stop="open">
```
> [点击了解更多](https://v3.cn.vuejs.org/api/directives.html#v-on)

**v-model 修饰符**<br>
```javascript
// 协议
{
  ...
  "type": "input",
  "props": {
    "$model.trim": "msg"
  }
}
```
```html
<!-- Vue template -->
<input v-model.trim="msg">
```
> [点击了解更多](https://v3.cn.vuejs.org/guide/forms.html#修饰符)

**v-bind 修饰符**<br>
```javascript
// 协议
{
  ...
  "type": "svg",
  "props": {
    ":view-box.camel": "viewBox"
  }
}
```
```html
<!-- Vue template -->
<svg :view-box.camel="viewBox"></svg>
```
> [点击了解更多](https://v3.cn.vuejs.org/api/directives.html#v-bind)

**Vue 指令**<br>
*所有指令的值都是表达式*

v-bind（缩写 :）

```javascript
// 协议
{
  ...
  "type": "img",
  "props": {
    ":src": "imageSrc"
  }
}
```

```html
<!-- Vue template -->
<img :src="imageSrc">
```

v-on（缩写 @）
```javascript
// 协议
{
  ...
  "type": "button",
  "props": {
    "@click": "open"
  }
}
```
```html
<!-- Vue template -->
<button @click="open">
```

v-slot（缩写 #）
```javascript
// 协议
{
  ...
  "type": "template",
  "props": {
    "#header": "{ item }"
  }
}
```
```html
<!-- Vue template -->
<template #header="{ item }">
  <h1>Hi {{ item }}</h1>
</template>
```

v-for（缩写 $）
```javascript
// 协议
{
  ...
  "type": "li",
  "props": {
    "$for": "item in items"
  }
}
```
```html
<!-- Vue template -->
<li v-for="item in items" />
```

> 以此类推所有没有缩写的 Vue 指令，全部通过 $ 替代 v-<br>
> [点击了解更多](https://v3.cn.vuejs.org/api/directives.html)

**特殊指令**<br>
```javascript
// 协议
{
  ...
  "type": "div",
  "props": {
    "key": "nanoid"
  }
}
```
```html
<!-- Vue template -->
<div key="nanoid"></div>
```
> [点击了解更多](https://v3.cn.vuejs.org/api/special-attributes.html)

#### script
类型：`String`<br>
详细：页面脚本，与 .vue 文件中 script 标签内部代码

必须以 export default 开始

#### style
类型：`String`<br>
详细：页面样式


Vue2 与 Vue 3 注意事项，这个与生成代码有关
