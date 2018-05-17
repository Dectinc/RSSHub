(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{53:function(e,t,r){"use strict";r.r(t);var a=r(0),s=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"部署"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#部署","aria-hidden":"true"}},[e._v("#")]),e._v(" 部署")]),r("p",[e._v("部署 \bRSSHub 非常简单，如果您在部署过程中遇到无法解决的问题请到 "),r("a",{attrs:{href:"https://github.com/DIYgod/RSSHub/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("issues")]),e._v(" 寻找类似的问题或 "),r("a",{attrs:{href:"https://github.com/DIYgod/RSSHub/issues/new",target:"_blank",rel:"noopener noreferrer"}},[e._v("向我们提问")]),e._v("，我们会尽快给您答复。")]),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#手动部署"}},[e._v("手动部署")]),r("ul",[r("li",[r("a",{attrs:{href:"#在安装之前"}},[e._v("在安装之前")])]),r("li",[r("a",{attrs:{href:"#安装-git"}},[e._v("安装 Git")])]),r("li",[r("a",{attrs:{href:"#安装-node-js"}},[e._v("安装 Node.JS")])]),r("li",[r("a",{attrs:{href:"#安装-rsshub"}},[e._v("安装 RSSHub")])]),r("li",[r("a",{attrs:{href:"#启动-rsshub"}},[e._v("启动 RSSHub")])]),r("li",[r("a",{attrs:{href:"#添加配置"}},[e._v("添加配置")])]),r("li",[r("a",{attrs:{href:"#使用-redis-数据库缓存"}},[e._v("使用 Redis 数据库缓存")])])])]),r("li",[r("a",{attrs:{href:"#部署到-docker"}},[e._v("部署到 Docker")]),r("ul",[r("li",[r("a",{attrs:{href:"#安装-docker"}},[e._v("安装 Docker")])]),r("li",[r("a",{attrs:{href:"#部署"}},[e._v("部署")])]),r("li",[r("a",{attrs:{href:"#添加配置"}},[e._v("添加配置")])]),r("li",[r("a",{attrs:{href:"#使用-docker-compose-部署"}},[e._v("使用 docker-compose 部署")])])])]),r("li",[r("a",{attrs:{href:"#部署到-heroku"}},[e._v("部署到 Heroku")])]),r("li",[r("a",{attrs:{href:"#配置"}},[e._v("配置")]),r("ul",[r("li",[r("a",{attrs:{href:"#应用配置"}},[e._v("应用配置")])]),r("li",[r("a",{attrs:{href:"#部分-rss-模块配置"}},[e._v("部分 RSS 模块配置")])])])])])]),r("p"),r("h2",{attrs:{id:"手动部署"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#手动部署","aria-hidden":"true"}},[e._v("#")]),e._v(" 手动部署")]),r("p",[e._v("部署 \b"),r("code",[e._v("RSSHub")]),e._v(" 最直接的方式，\b 您可以按照以下步骤将 "),r("code",[e._v("RSSHub")]),e._v(" 部署在您的 \b 电脑、服务器或者其他任何地方。")]),r("h3",{attrs:{id:"在安装之前"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#在安装之前","aria-hidden":"true"}},[e._v("#")]),e._v(" 在安装之前")]),r("p",[e._v("在安装 RSSHub 之前，请确保您的电脑中已经安装了 "),r("a",{attrs:{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git")]),e._v(" 和 "),r("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js >= 10.0")]),e._v("。")]),r("h3",{attrs:{id:"安装-git"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装-git","aria-hidden":"true"}},[e._v("#")]),e._v(" 安装 Git")]),r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[e._v("提示")]),r("p",[e._v("首先您应该输入 "),r("code",[e._v("git")]),e._v("，看看系统有没有安装 Git：")]),r("p",[e._v("windows 打开 "),r("code",[e._v("cmd")]),e._v("， macOS 打开"),r("code",[e._v("终端(terminal)")]),e._v("。")]),r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("$ "),r("span",{attrs:{class:"token function"}},[e._v("git")]),e._v("\nusage: "),r("span",{attrs:{class:"token function"}},[e._v("git")]),e._v(" "),r("span",{attrs:{class:"token punctuation"}},[e._v("[")]),e._v("--version"),r("span",{attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),r("span",{attrs:{class:"token punctuation"}},[e._v("[")]),e._v("--help"),r("span",{attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),r("span",{attrs:{class:"token punctuation"}},[e._v("[")]),e._v("-C "),r("span",{attrs:{class:"token operator"}},[e._v("<")]),e._v("path"),r("span",{attrs:{class:"token operator"}},[e._v(">")]),r("span",{attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),r("span",{attrs:{class:"token punctuation"}},[e._v("[")]),e._v("-c name"),r("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v("value"),r("span",{attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),r("span",{attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])])]),r("ul",[r("li",[e._v("Windows：从 Git 官网直接"),r("a",{attrs:{href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[e._v("下载安装程序")]),e._v("。")]),r("li",[e._v("MacOS：使用 "),r("a",{attrs:{href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Homebrew")]),r("code",[e._v("$ brew install git")]),e._v(" 或者"),r("a",{attrs:{href:"https://git-scm.com/download/mac",target:"_blank",rel:"noopener noreferrer"}},[e._v("下载安装程序")]),e._v("。")]),r("li",[e._v("Linux：使用您的包管理器安装例如 "),r("code",[e._v("$ sudo apt-get install git")]),e._v("。")])]),r("h3",{attrs:{id:"安装-node-js"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装-node-js","aria-hidden":"true"}},[e._v("#")]),e._v(" 安装 Node.JS")]),r("h4",{attrs:{id:"windows"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#windows","aria-hidden":"true"}},[e._v("#")]),e._v(" Windows")]),r("p",[e._v("Windows 用户请 "),r("a",{attrs:{href:"https://nodejs.org/zh-cn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("下载安装程序")]),e._v("。安装时，请勾选"),r("code",[e._v("Add to PATH")]),e._v("选项。")]),r("h4",{attrs:{id:"macos-linux"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#macos-linux","aria-hidden":"true"}},[e._v("#")]),e._v(" MacOS & Linux")]),r("p",[e._v("安装 NodeJS 的最佳方式是使用 "),r("a",{attrs:{href:"https://github.com/creationix/nvm",target:"_blank",rel:"noopener noreferrer"}},[e._v("nvm")]),e._v("。")]),r("p",[e._v("安装 "),r("code",[e._v("nvm")])]),r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("$ "),r("span",{attrs:{class:"token function"}},[e._v("curl")]),e._v(" https://raw.github.com/creationix/nvm/master/install.sh "),r("span",{attrs:{class:"token operator"}},[e._v("|")]),e._v(" sh\n")])]),r("p",[e._v("安装完成后，重启终端并执行下列命令即可安装 "),r("code",[e._v("Node.js")]),e._v("。")]),r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("$ nvm "),r("span",{attrs:{class:"token function"}},[e._v("install")]),e._v(" node\n")])]),r("h3",{attrs:{id:"安装-rsshub"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装-rsshub","aria-hidden":"true"}},[e._v("#")]),e._v(" 安装 RSSHub")]),r("p",[e._v("首先是下载 "),r("code",[e._v("RSSHub")]),e._v(" 的源码，请执行下列命令。")]),r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("$ "),r("span",{attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/DIYgod/RSSHub.git\n$ "),r("span",{attrs:{class:"token function"}},[e._v("cd")]),e._v(" RSSHub\n")])]),r("p",[e._v("下载完成后，需要安装依赖。")]),r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("$ "),r("span",{attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),r("span",{attrs:{class:"token function"}},[e._v("install")]),e._v("\n")])]),r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[e._v("提示")]),r("p",[e._v("推荐使用 "),r("a",{attrs:{href:"https://yarn.bootcss.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Yarn")]),e._v(" ，"),r("code",[e._v("Yarn")]),e._v(" 比 "),r("code",[e._v("npm")]),e._v(" 更快更稳定。")]),r("p",[e._v("使用 "),r("code",[e._v("Yarn")]),e._v(" 安装依赖时只需要键入")]),r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("$ yarn\n")])]),r("p",[e._v("由于众所周知的原因，在中国使用 "),r("code",[e._v("npm")]),e._v(" 下载依赖十分缓慢，建议挂一个代理或者考虑使用 "),r("a",{attrs:{href:"https://npm.taobao.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("NPM 镜像")]),e._v("。")])]),r("h3",{attrs:{id:"启动-rsshub"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#启动-rsshub","aria-hidden":"true"}},[e._v("#")]),e._v(" 启动 RSSHub")]),r("p",[e._v("在 "),r("code",[e._v("RSSHub")]),e._v(" 文件夹中运行下面的命令就可以启动。")]),r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("$ "),r("span",{attrs:{class:"token function"}},[e._v("npm")]),e._v(" start\n")])]),r("p",[e._v("在浏览器中打开 "),r("a",{attrs:{href:"http://127.0.0.1:1200/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://127.0.0.1:1200/")]),e._v("，enjoy it! ✅")]),r("h3",{attrs:{id:"添加配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#添加配置","aria-hidden":"true"}},[e._v("#")]),e._v(" 添加配置")]),r("p",[e._v("可以通过修改 "),r("code",[e._v("config.js")]),e._v(" 或者设置环境变量来配置 RSSHub。")]),r("p",[r("strong",[e._v("如何设置环境变量")])]),r("p",[e._v("Windows 系统在 cmd.exe 中运行 "),r("code",[e._v("$ set PORT=1000")])]),r("p",[e._v("macOS & Linux 运行 "),r("code",[e._v("$ PORT=1000")])]),r("p",[e._v("再运行 "),r("code",[e._v("$ npm start")]),e._v(" 启动 RSSHub 即可将监听端口设置为 "),r("code",[e._v("1000")]),e._v("。")]),r("p",[e._v("此处设置的环境变量在关闭终端后就会被清除，如果您想保存这些配置可以编写一个简单的 "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Batch_file",target:"_blank",rel:"noopener noreferrer"}},[e._v("批处理文件")]),e._v(" 或 "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Shell_script",target:"_blank",rel:"noopener noreferrer"}},[e._v("shell")]),e._v("。")]),r("p",[e._v("更多配置项请看 "),r("a",{attrs:{href:"#%E5%BA%94%E7%94%A8%E9%85%8D%E7%BD%AE"}},[e._v("应用配置")])]),r("h3",{attrs:{id:"使用-redis-数据库缓存"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用-redis-数据库缓存","aria-hidden":"true"}},[e._v("#")]),e._v(" 使用 Redis 数据库缓存")]),r("p",[e._v("RSSHub 默认会有 5 分钟的缓存，默认这个缓存是存放在内存中的。RSSHub 还支持 Redis 数据库缓存。")]),r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[e._v("提示")]),r("p",[e._v("除非流量特别大或者您需要建立分布式集群，否则不需要 Redis 缓存。")])]),r("h4",{attrs:{id:"安装-redis"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装-redis","aria-hidden":"true"}},[e._v("#")]),e._v(" 安装 Redis")]),r("p",[r("strong",[e._v("Windows")])]),r("p",[e._v("安装 Redis on Windows 直接"),r("a",{attrs:{href:"https://github.com/MicrosoftArchive/redis/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("下载安装程序")]),e._v("。")]),r("p",[e._v("在安装目录中运行下面的命令启动 Redis。")]),r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("$ redis-server  redis.windows.conf\n")])]),r("p",[r("strong",[e._v("MacOS")])]),r("p",[e._v("使用 "),r("a",{attrs:{href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Homebrew")]),e._v(" 安装 Redis。")]),r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("$ brew "),r("span",{attrs:{class:"token function"}},[e._v("install")]),e._v(" redis\n")])]),r("p",[e._v("再运行下面的命令启动 Redis。")]),r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("$ brew services start redis\n")])]),r("p",[r("strong",[e._v("Linux")])]),r("p",[e._v("使用您的包管理器安装 Redis。")]),r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{attrs:{class:"token comment"}},[e._v("# apt")]),e._v("\n$ "),r("span",{attrs:{class:"token function"}},[e._v("sudo")]),e._v(" apt "),r("span",{attrs:{class:"token function"}},[e._v("install")]),e._v(" redis-server\n\n"),r("span",{attrs:{class:"token comment"}},[e._v("# yum")]),e._v("\n$ "),r("span",{attrs:{class:"token function"}},[e._v("sudo")]),e._v(" yum "),r("span",{attrs:{class:"token function"}},[e._v("install")]),e._v(" redis\n")])]),r("p",[e._v("然后运行 "),r("code",[e._v("$ redis-server")]),e._v(" 启动 Redis。")]),r("h4",{attrs:{id:"启用-redis-数据库缓存"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#启用-redis-数据库缓存","aria-hidden":"true"}},[e._v("#")]),e._v(" 启用 Redis 数据库缓存")]),r("p",[e._v("修改配置项 "),r("code",[e._v("CACHE_TYPE")]),e._v(" 为 "),r("code",[e._v("redis")]),e._v("，RSSHub 将使用默认地址 "),r("code",[e._v("redis://localhost:6379/")]),e._v(" 连接 Redis，如果需要修改地址请看 "),r("a",{attrs:{href:"#%E5%BA%94%E7%94%A8%E9%85%8D%E7%BD%AE"}},[e._v("应用配置")]),e._v("。")]),r("h2",{attrs:{id:"部署到-docker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#部署到-docker","aria-hidden":"true"}},[e._v("#")]),e._v(" 部署到 Docker")]),r("p",[e._v("Docker 属于 Linux 容器的一种封装，提供简单易用的容器使用接口。它是目前最流行的 Linux 容器解决方案。")]),r("h3",{attrs:{id:"安装-docker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装-docker","aria-hidden":"true"}},[e._v("#")]),e._v(" 安装 Docker")]),r("p",[e._v("官方网站上有各种环境下的 "),r("a",{attrs:{href:"https://docs.docker.com/engine/installation/",target:"_blank",rel:"noopener noreferrer"}},[e._v("安装指南")])]),r("h3",{attrs:{id:"部署-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#部署-2","aria-hidden":"true"}},[e._v("#")]),e._v(" 部署")]),r("p",[e._v("运行下面的命令下载 RSSHub 镜像。")]),r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("$ docker pull diygod/rsshub\n")])]),r("p",[e._v("然后运行 RSSHub 即可")]),r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("$ docker run -d --name rsshub -p 1200:1200 diygod/rsshub\n")])]),r("p",[e._v("在浏览器中打开 "),r("a",{attrs:{href:"http://127.0.0.1:1200/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://127.0.0.1:1200/")]),e._v("，enjoy it! ✅")]),r("p",[e._v("您可以使用下面的命令来关闭 RSSHub。")]),r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("$ docker stop rsshub\n")])]),r("h3",{attrs:{id:"添加配置-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#添加配置-2","aria-hidden":"true"}},[e._v("#")]),e._v(" 添加配置")]),r("p",[e._v("配置运行在 docker 中的 RSSHub，最便利的方法是使用环境变量。")]),r("p",[e._v("以设置缓存时间为 1 小时举例，只需要在运行时增加参数："),r("code",[e._v("-e CACHE_EXPIRE=3600")])]),r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("$ docker run -d --name rsshub -p 1200:1200 -e CACHE_EXPIRE"),r("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v("3600 PORT"),r("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v("1000 diygod/rsshub\n")])]),r("p",[e._v("更多配置项请看 "),r("a",{attrs:{href:"#%E5%BA%94%E7%94%A8%E9%85%8D%E7%BD%AE"}},[e._v("应用配置")])]),r("h3",{attrs:{id:"使用-docker-compose-部署"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用-docker-compose-部署","aria-hidden":"true"}},[e._v("#")]),e._v(" 使用 docker-compose 部署")]),r("p",[r("a",{attrs:{href:"https://docs.docker.com/compose/overview/",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker-compose")]),e._v(" 是用来运行多容器 Docker 应用的小工具，可以简化配置部署过程：")]),r("ol",[r("li",[e._v("创建 volume 持久化 Redis 缓存")])]),r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("$ docker volume create redis-data\n")])]),r("ol",{attrs:{start:"2"}},[r("li",[r("p",[e._v("修改 "),r("a",{attrs:{href:"https://github.com/DIYgod/RSSHub/blob/master/docker-compose.yml",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker-compose.yml")]),e._v(" 中的 "),r("code",[e._v("environment")]),e._v(" 进行配置")])]),r("li",[r("p",[e._v("部署")])])]),r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("$ docker-compose up\n")])]),r("ol",{attrs:{start:"4"}},[r("li",[e._v("更新")])]),r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("$ docker-compose build\n$ docker-compose up\n")])]),r("h2",{attrs:{id:"部署到-heroku"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#部署到-heroku","aria-hidden":"true"}},[e._v("#")]),e._v(" 部署到 Heroku")]),r("p",[r("a",{attrs:{href:"https://heroku.com/deploy?template=https%3A%2F%2Fgithub.com%2FDIYgod%2FRSSHub",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://i.imgur.com/e6ZcmUY.png",alt:"Deploy"}})])]),r("h2",{attrs:{id:"配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置","aria-hidden":"true"}},[e._v("#")]),e._v(" 配置")]),r("h3",{attrs:{id:"应用配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#应用配置","aria-hidden":"true"}},[e._v("#")]),e._v(" 应用配置")]),r("p",[e._v("可以通过修改 "),r("code",[e._v("config.js")]),e._v(" 或者设置环境变量来配置 RSSHub。")]),r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[e._v("提示")]),r("p",[e._v("建议通过设置环境变量来配置 RSSHub。避免版本更新时的冲突。")])]),r("p",[r("code",[e._v("PORT")]),e._v(": 监听端口，默认为 "),r("code",[e._v("1200")])]),r("p",[r("code",[e._v("CACHE_TYPE")]),e._v(": 缓存类型，可为 "),r("code",[e._v("memory")]),e._v(" 和 "),r("code",[e._v("redis")]),e._v("，设为空可以禁止缓存，默认为 "),r("code",[e._v("memory")])]),r("p",[r("code",[e._v("CACHE_EXPIRE")]),e._v(": 缓存过期时间，单位为秒，默认 300")]),r("p",[r("code",[e._v("LISTEN_INADDR_ANY")]),e._v(": 是否允许公网连接，默认 1")]),r("p",[r("code",[e._v("REDIS_URL")]),e._v(": Redis 连接地址（memory 缓存类型时无效），默认为 "),r("code",[e._v("redis://localhost:6379/")])]),r("p",[r("code",[e._v("REDIS_PASSWORD")]),e._v(": Redis 连接密码（memory 缓存类型时无效）")]),r("h3",{attrs:{id:"部分-rss-模块配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#部分-rss-模块配置","aria-hidden":"true"}},[e._v("#")]),e._v(" 部分 RSS 模块配置")]),r("p",[r("code",[e._v("pixiv")]),e._v(": "),r("a",{attrs:{href:"https://accounts.pixiv.net/signup",target:"_blank",rel:"noopener noreferrer"}},[e._v("注册地址")])]),r("p",[r("code",[e._v("disqus")]),e._v(": "),r("a",{attrs:{href:"https://disqus.com/api/applications/",target:"_blank",rel:"noopener noreferrer"}},[e._v("申请地址")])]),r("p",[r("code",[e._v("twitter")]),e._v(": "),r("a",{attrs:{href:"https://apps.twitter.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("申请地址")])]),r("p",[r("code",[e._v("youtube")]),e._v(": "),r("a",{attrs:{href:"https://console.developers.google.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("申请地址")])])])}],!1,null,null,null);t.default=s.exports}}]);