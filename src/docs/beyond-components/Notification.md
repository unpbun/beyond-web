---

title : Notification
description : 消息提示组件

imports() : 
    Header : 'scripts/components/Header'
    'Display,{Item}' : 'scripts/components/Display'
    NotificationExample : 'examples/Notification'

---

```render html

<Header title={props.title} description={props.description} />  

```

## 使用场景

- 消息提示
- 表单验证、提示



## 示例代码

```source _code
require('beyond-components/lib/Notification/index.css')

import React from 'react'
import Notification from 'beyond-components/lib/Notification'

const notice = Notification.getInstance(<Notification />)

class App extends React.Component{

	handlerClick(){
		notice.show('hello world' )
	}

	render(){
		return <button onClick={this.handlerClick}>click me</button>
	}
}
```


```render

<Display  name={props.title} description={props.description}>
    <Item code={_code} state="默认">
        <NotificationExample />
    </Item>
</Display>

```


## API 


### Notification (组件)

| 属性        |  类型   |  默认值  | 说明 |
| --------   | ----   | ----  |----  |
| visible    |  boolean   |   false  | 是否显示消息框，使用 notice 不需要设置 visible 属性 |
| duration    |  number   |   2  | 持续时间，单位为 秒 ，若为 0 则不自动消失 |
| x  |   string   |  center/left/right  | 消息框水平位置 |
| y  |   string   |  top/middle/bottom  | 消息框垂直位置 |
| reverse  |   boolean   |  false  |设置反转颜色 |
| className  | string  |  tooltip  | 非必需，替换原有className，不建议|
| extraClassName  |    string    |  -  | 非必需，增加className，定制样式 |
| style    |  object   |   -   | 设置外层样式 |



### Notification （类）

| 静态方法        |  返回类型   |  参数 | 说明 |
| --------   | ----   | ----  |----  |
| getInstance  |   -   |  -  | 返回一个 notice 对象 |



### notice （对象）

| 方法        |  返回类型   |  参数 | 说明 |
| --------   | ----   | ----  |----  |
| show  |   -   |  message : string  | 显示消息组件 |
| hide  |   -   |  -  | 隐藏消息组件 |