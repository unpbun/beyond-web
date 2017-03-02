---

title : Tabs
description : 标签页组件库
requires() :
    - 'beyond-components/lib/Tabs/index.css'
imports() : 
    Header : 'scripts/components/Header'
    'Display,{Item}' : 'scripts/components/Display'
    'Tabs,{Tab}' : 'beyond-components/lib/Tabs'

---

```render html

<Header title={props.title} description={props.description} />  

```

## 使用场景

- 页面分类展示



## 示例代码

```source _code
require('beyond-components/lib/Tabs/index.css')
import Tabs,{Tab} from 'beyond-components/lib/Tabs'

<Tabs defaultActiveKey="0">
    <Tab title="标题1" key="0">内容1</Tab>
    <Tab title="标题2" key="1" disabled>内容2</Tab>
    <Tab title="标题3" key="2">内容3</Tab>
    <Tab title="标题4" key="3">内容4</Tab>
</Tabs>
```


```render

<Display  name={props.title} description={props.description}>
    <Item code={_code} state="默认">
        <Tabs defaultActiveKey="0">
            <Tab title="标题1" key="0">内容1</Tab>
            <Tab title="标题2" key="1" disabled>内容2</Tab>
            <Tab title="标题3" key="2">内容3</Tab>
            <Tab title="标题4" key="3">内容4</Tab>
        </Tabs>
    </Item>
</Display>

```


## API 

### Tabs

| 属性        |  类型   |  默认值  | 说明 |
| --------   | ----   | ----  |----  |
| defaultActiveKey     | string |   -    | 默认的 active Tab，不受控 |
| activeKey    |  string   |   0   | active Tab，受控 |
| onChange  |   function   |  -  | 切换 tab 时的回掉函数 |
| className  | string  |  tabs  | 非必需，替换原有className，不建议|
| extraClassName  |    string    |  -  | 非必需，增加className，定制样式 |

### Tab

| 属性        |  类型   |  默认值  | 说明 |
| --------   | ----   | ----  |----  |
| navExtraClassName     | string |  -   | 增加 tab 的 nav 样式|
| paneExtraClassName    |  string   |   -   | 增加 tab 的 pane 样式 |
| key  |   string    |  -  | 必须，标识 key |
| title  |    string    |   - | 每个 tab 的标题|
| disabled  | boolean |  false  | 禁止切换到该 tab |