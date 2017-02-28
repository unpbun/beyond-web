---

title : Modal
description : 基本弹窗组件
imports() : 
    Header : 'scripts/components/Header'
    'Display,{Item}' : 'scripts/components/Display'
    Modal : 'beyond-components/lib/Modal'
    ModalExample : 'examples/Modal'

---

```render html

<Header title={props.title} description={props.description} />  

```

## 使用场景

- 展示详情、表单和一些提示



## 示例代码

```source _code
import Modal from 'beyond-components/lib/Modal'
require('beyond-components/lib/Modal/index.css')

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            visible : false
        }
    }

    hide(){
        this.setState({visible : false})
    }

    show(){
        this.setState({visible : true})
    }

    render(){
        return (
            <div>
                <button onClick={this.show.bind(this)}>点击弹窗</button>
                <Modal width="500px" 
                    visible={this.state.visible} 
                    onClose={this.hide.bind(this)} 
                    title="我是标题">我是内容</Modal>
            </div>
        )
    }
}


```

```render

<Display  name={props.title} description={props.description}>
    <Item code={_code}>
        <ModalExample />
    </Item>
</Display>

```


## API 

| 属性     | 类型   |  说明  | 默认值 |
| -------- | -----  | ----   | ---- |
| title    | string   | 弹窗的标题  | - |
| close    | boolean   |  是否在顶部显示关闭按钮 | true |
| closeIcon    | String/Element   |  改变关闭按钮样式 | X |
| footer   | mixin    |   尾部内容     | - |
| visible   | boolean   |    是否显示弹窗    | false |
| maxBodyHeight | number   |  最大内容高度（不包括头部和底部），超出会出现滚动条 | 浏览器高度的*0.7 |
| bodyHeight | number   | 内容高度（不包括头部和底部） | - |
| width        | string   | 弹窗宽度       | - |
| maxWidth        | string   | 弹窗最大宽度       | - |
| mask        | boolean   | 是否显示遮罩层       | true |
| maskClickClose       | boolean   |   点击遮罩关闭     |  true |
| onOpen | function   |   显示的时候触发，返回false则阻止该事件发生     |  - |
| onClose | function   |   关闭的时候触发，返回false则阻止该事件发生     |  - |
| className    | string   |     替换原有class，不建议如此操作   | - |
| extraClassName    | string   | 外层元素增加class | - |
| style        | object   |    外部样式    | - |
