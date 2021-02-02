# Security Policy

## Supported Versions

Use this section to tell people about which versions of your project are
currently being supported with security updates.

| Version | Supported          |
| ------- | ------------------ |
| 5.1.x   | :white_check_mark: |
| 5.0.x   | :x:                |
| 4.0.x   | :white_check_mark: |
| < 4.0   | :x:                |

## JavaScript linting

我們要確保我們寫的 JavaScript 風格一致，我們用的是 standand js。

它是無腦的，只要跟著它對 js 語法格式規範就可以了。

最主要就是你的 vscode 要安裝 `StandardJS` 的插件。

然後重開 vscode 就可以了。

---


## 資料夾結構

- api: 跟後端有關的東西都會放 api
- components: 網頁用到的 components 放這裡
- db: 資料庫的 migration 和 seeds 放這裡
- lib: api 和網頁兩者都有機會用到的奇奇怪怪的檔案放這裡
- pages: 放網頁
- pages/api: 後端 api 的進入點
- public: 放圖片之類，靜態的檔案
- shared: 放置複雜的程式碼集合
- shared/db: 資料庫的 models
- shared/graphql: graphql scalar, fragments, mutations, queries
- shared/imgix: imgix 有關的檔案

---


## 环境变数

### now.json

环境变数全部写在 `now.json`。

分两次写，`build.env` 和 `env` 内各写一次环境变数。

### next.config.js

环境变数若果要给网页用，要在 `next.config.js` 中的 `env` 写一次。

---

## Styles

全域的样式可以放在 `pages/_app.js` 中。

有两种方式：

1. 直接 import css
2. 放在 style-jsx global 中

---

## SEO

预设的 SEO 讯息放在 `pages/_app.js` 中。
但也可以透过不同的 page 去更改预设的 SEO。

参考 `next-seo`

## jsconfig

compilerOptions
    来配置JavaScript语言支持
    baseUrl  用于解析非相对模块名称的基目录。
    target 指定要使用的默认库
    "compilerOptions": {
    "baseUrl": ".",
    "target": "es6"
    }

exclude属性   
    排除由构建过程生成的文件  
    "exclude": [
        "node_modules"
    ]

include属性  
    如果不存在include属性，则默认为包含目录和子目录中的所有文件。
    如果指定了include属性，则只包括这些文件。     
     "include": [
        "src/**/*"
    ]     

 ## 更新 sentry 和 error 的方式
 https://github.com/vercel/next.js/tree/canary/examples/with-sentry