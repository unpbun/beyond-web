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


##  脚手架是什么

脚手架是一套完整的开发环境，集成了整个开发过程中的各类工具，开箱即用，Beyond 目前提供了以下脚手架 ：

- [ts-boilerplate2（推荐使用）](https://github.com/bestsuperdev/ts-boilerplate2)
- [react-less-boilerplate（即将废弃）](https://github.com/bestsuperdev/react-less-boilerplate) 
- [react-less-boilerplate2（推荐使用）](https://github.com/bestsuperdev/react-less-boilerplate2) 
- [react-component-boilerplate（开发组件使用）](https://github.com/bestsuperdev/react-less-boilerplate) 

脚手架集成的功能如下

- React
- Beyond 基础类库
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
	<Item key="0" state="react-less-boilerplate2" code="git clone https://github.com/bestsuperdev/react-less-boilerplate2 --depth=1"></Item>
	<Item key="0" state="ts-boilerplate2" code="git clone https://github.com/bestsuperdev/ts-boilerplate2 --depth=1"></Item>
</Display>

```

**具体的使用，可以查看脚手架页面的文档说明。**
