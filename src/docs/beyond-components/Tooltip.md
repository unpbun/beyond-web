---

title : Tooltip
description : 气泡组件
requires() :
    - 'beyond-components/lib/Tooltip/index.css'
imports() : 
    Header : 'scripts/components/Header'
    'Display,{Item}' : 'scripts/components/Display'
    'Tooltip,{Trigger}' : 'beyond-components/lib/Tooltip'

---

```render html

<Header title={props.title} description={props.description} />  

```

## 使用场景

- 提示按钮，提示图标



## 示例代码

```source _code
require("beyond-components/lib/Tooltip/index.css");
import Tooltip,{Trigger} from 'beyond-components/lib/Tooltip'
class App extends React.Component{

    render(){
        <Trigger tooltip={<Tooltip placement="top">hello world</Tooltip>}>
            <span>hover me</span>
        </Trigger>
    }
}
```


```render

<Display  name={props.title} description={props.description}>
    <Item code={_code} state="默认">
        <Trigger tooltip={<Tooltip placement="top">hello world</Tooltip>}>
            <span>hover me</span>
        </Trigger>
    </Item>
</Display>

```


## API 


### Tooltip

| 属性        |  类型   |  默认值  | 说明 |
| --------   | ----   | ----  |----  |
| placement  |   string   |  top  | top/bottom/left/right 设置 tooltip 显示的位置 |
| className  | string  |  tooltip  | 非必需，替换原有className，不建议|
| extraClassName  |    string    |  -  | 非必需，增加className，定制样式 |
| style    |  object   |   -   | 设置外层样式 |


### Trigger

| 属性        |  类型   |  默认值  | 说明 |
| --------   | ----   | ----  |----  |
| tooltip | Tooltip |  -   | 必须 |
