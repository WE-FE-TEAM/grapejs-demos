
## 名词解释

* 项目根目录 : 项目顶级目录,即package.json所在目录
* 模块根目录 : 源码子业务模块顶级目录, 即fis-conf.js所在目录


## 启动程序

### 工具安装

* npm install -g grape-cli

### 环境初始化
    
* 项目根目录执行 npm install
* 业务子模块(common)执行 npm install
* 项目根目录执行 npm run env:init

### 编译代码

* 编译各个模块

    
    模块根目录 grape release -cw
    
### 启动服务器

* 项目根目录启动server  grape run