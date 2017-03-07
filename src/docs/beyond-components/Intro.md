---

title : 基础组件库-beyond-components
descrbeyond : 
imports() : 
    Header : 'scripts/components/Header'
    'Display,{Item}' : 'scripts/components/Display'

---

```render html

<Header title={props.title} description={props.description} />  

```

## 使用场景

基础组件库 beyond-components 是一套基本的 React 组件库，主要用于二次开发。
组件只提供了最基本的样式，开发人员可以根据不同的项目进行样式的覆写。


## 安装

```render
<Display name="安装" defaultUnfold>
	<Item lang="bash" code="npm install beyond-components  --save"></Item>
</Display>
```