---
title : Document
description : for document trigger click on React
imports() : 
    Header : 'scripts/components/Header'
    'Display,{Item}' : 'scripts/components/Display'
    Document : 'beyond-components/lib/document'
---

```render
<Header title={props.title} description={props.description} />

```

## 使用场景

用 react 绑定的事件，会全部绑定在 document 元素上，如果用原生 js 在 document 上绑定点击事件，用 react 绑定的点击事件，即使阻止冒泡，也会触发原生绑定在 document 上的点击事件，该组件就是为了解决此类问题。可用于弹窗、下拉框等组件的开发。

## 示例代码

```source _code
import Document from 'beyond-components/lib/Document'

class App extends React.Component{

    documentClick(){
        console.log('from document')
    }

    innerClick(){
        console.log('from button')
    }

    render(){
        <Document onClick={this.documentClick.bind(this)}>
            <button type="button" onClick={this.innerClick.bind(this)}>click me</button>
        </Document>
    }
}


```

```render

<Display defaultUnfold name={props.title} description={props.description}>
    <Item code={_code}></Item>
</Display>

```


## API

| 属性     | 类型   |  说明  | 默认值 |
| -------- | -----  | ----   | ---- |
| onClick    | function   |   | - |
| delay    | number   | document 事件延迟触发，请勿修改小于50  | 100 |
