---

title : Grid
description : 排版布局组件
requires() :
    - 'beyond-components/lib/Grid/index.css'
imports() : 
    Header : 'scripts/components/Header'
    'Display,{Item}' : 'scripts/components/Display'
    '{Row,Col}' : 'beyond-components/lib/Grid'

---

```render html

<Header title={props.title} description={props.description} />  

```

## 使用场景

- 基本排版布局



## 示例代码

```source _code
<Row>
    <Col style={{border : '1px solid pink'}} key="0" col={4}>
        col 1
    </Col>
    <Col style={{border : '1px solid pink'}} key="1" col={4}>
        col 2
    </Col>
    <Col style={{border : '1px solid pink'}} key="2" col={4}>
        col 3
    </Col>
</Row>

```

```source _code2
<Row grids={24}>
    <Col style={{border : '1px solid pink'}} key="0" col={3}>
        col 3
    </Col>
    <Col style={{border : '1px solid pink'}} key="1" col={21}>
        col 21
    </Col>
</Row>

```

```render

<Display  name={props.title} description={props.description}>
    <Item code={_code} state="默认">
        <Row verticalGutter={10}>
            <Col style={{border : '1px solid pink'}} key="0" col={4}>
                col 1
            </Col>
            <Col style={{border : '1px solid pink'}} key="1" col={4}>
                col 2
            </Col>
            <Col style={{border : '1px solid pink'}} key="2" col={4}>
                col 3
            </Col>
        </Row>
    </Item>
    <Item code={_code2} state="24格">
        <Row verticalGutter={10} grids={24}>
            <Col style={{border : '1px solid pink'}} key="0" col={3}>
                col 3
            </Col>
            <Col style={{border : '1px solid pink'}} key="1" col={21}>
                col 21
            </Col>
        </Row>
    </Item>
</Display>

```


## API 

### Row

| 属性        |  类型   |  默认值  | 说明 |
| --------   | ----   | ----  |----  |
| grids     | number |   12    | 非必需，总的grids数|
| gutter    |  number   |   0   | 非必需，grid内容水平间隔|
| verticalGutter  |   number    |  0  | 非必需，,grid内容垂直间隔 |
| width  |    number/string    |   - | 非必需，宽度|
| style  |    object    |  -  | 非必需，样式 |
| className  | string    |  row  | 非必需，替换原有className，不建议|
| extraClassName  |    string    |  -  | 非必需，增加className，定制样式 |

### Col

| 属性        |  类型   |  默认值  | 说明 |
| --------   | ----   | ----  |----  |
| col     | number |  -   | 非必需，所占grids数|
| offsetCol    |  number   |   -   | 非必需，margin-right 推移的grids数|
| width  |   number/string    |  -  | 非必需，宽度，单位是px |
| offsetWidth  |    number/string    |   - | 非必需，margin-right 宽度，单位是px|
| style  | Object |  -  | 非必需，样式 |
| className  | string    |  col  | 非必需，替换原有className，不建议|
| extraClassName  |    string    |  -  | 非必需，增加className，定制样式 |
