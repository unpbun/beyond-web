---

title : web 前端脚手架
description : 脚手架是一套完整的开发环境，集成了整个开发过程中的各类工具，比如单元测试、代码打包压缩等等
imports() : 
    Header : 'Header'
    'Display,{Item}' : 'Display'

---

```render
<Header title={props.title} description={props.description} />
```


##  脚手架是什么？

脚手架是一套完整的开发环境，集成了整个开发过程中的各类工具，开箱即用，Beyond 目前提供了两套脚手架 ：[react-less-boilerplate](https://github.com/bestsuperdev/react-less-boilerplate) 和 [ts-boilerplate2](https://github.com/bestsuperdev/ts-boilerplate2)， 前者采用 babel ，支持 es2015 的写法，后者采用 typescript ，其余功能一致， 以下是脚手架的具体功能

- React
- Beyond 基础类库
    - beyond-lib 
    - beyond-remote
- 开发服务器 webpack-dev-server
- 模块依赖 webpack
- 代码编译  bable/typescript + less
- 代码质量检测 eslint
- 单元测试 karma+jasmine
- 假数据服务 json-server
- 代码编译合并压缩  webpack


## 使用脚手架

```render 
<Display defaultUnfold name="安装脚手架">
	<Item state="react-less-boilerplate" code="git clone https://github.com/bestsuperdev/react-less-boilerplate --depth=1"></Item>
	<Item state="ts-boilerplate2" code="git clone https://github.com/bestsuperdev/ts-boilerplate2 --depth=1"></Item>
</Display>

```

具体的使用，可以查看脚手架页面的文档说明。
