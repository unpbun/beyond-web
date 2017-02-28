---
title : Placeholder
description : placeholder for IE8 & IE9
imports() : 
    Header : 'scripts/components/Header'
    'Display,{Item}' : 'scripts/components/Display'
    Placeholder : 'beyond-components/lib/Placeholder'
---

```render html
<Header title={props.title} description={props.description} />  


```

## 使用场景

在不支持 Placeholder 的浏览器上（IE8,IE9）上模拟 Placeholder，会自动判断当前浏览器是否支持 Placeholder，如果支持则使用原生。  


## 示例代码

```source _code

import Placeholder from 'beyond-components/lib/Placeholder'

class App extends React.Component{

    constructor(props){
        super(props)
        this.state = {value : ''}
    }

    handlerInputChange(event){
        let value = event.target.value
        this.setState({value})
    }

    render(){
        <Placeholder>
            <input type="text" 
                placeholder="input your name" 
                value={this.state.value} 
                onChange={this.handlerInputChange.bind(this)} />
        </Placeholder>
    }
}
```

```render html
<Display defaultUnfold name={props.title} description={props.description}>
    <Item code={_code} state="normal">
        <Placeholder>
            <input type="text" placeholder="input your name"  />
        </Placeholder>
        <p>上述示例，请在 IE9 下查看</p>
    </Item>
</Display>
```


## API 

| 属性     | 类型   |  说明  | 默认值 |
| -------- | -----  | ----   | ---- |
| color    | string |   placeholder 显示时候的默认颜色   | #999 |