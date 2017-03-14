---

title : beyond-datetime
description : React 的日期组件，提供 日期、时间组件，日期时间范围选择等功能
imports() : 
    Header : 'scripts/components/Header'
    'Display,{Item}' : 'scripts/components/Display'
    '{Calendar, DateRange, defaultRanges}' : 'beyond-datetime'
    '{TriggerExample,TriggerExample2}' : 'examples/BeyondDatetime'

---

```render
<Header title={props.title} description={props.description} />
```




## 安装

```source _install
npm install beyond-datetime  --save
```



```render
<Display defaultUnfold name="安装" >
    <Item key="0" code={_install} lang="bash" ></Item>
</Display>
```

## 示例代码



```source _date
require('beyond-datetime/css/index.css')
import React, { Component } from 'react'
import { Calendar  } from 'beyond-datetime'

class MyComponent extends Component {
    
    handlerSelect(date){
        console.log(date); // Momentjs object
    }
    
    render(){
        return (
            <Calendar 
                onInit={this.handlerSelect} 
                onChange={this.handlerSelect}  />
        )
    }
}

```

```source _daterange
require('beyond-datetime/css/index.css')
import { Calendar ,DateRange,defaultRanges } from 'beyond-datetime'

class MyComponent extends Component {

    handlerSelect(range){
        console.log(range.startDate,range.endDate);
        // An object with two keys,
        // 'startDate' and 'endDate' which are Momentjs objects.
    }

    render(){
        return (
            <DateRange ranges={defaultRanges} 
                onInit={this.handlerSelect} 
                onChange={this.handlerSelect} />
        )
    }
}

```

```source _datetime
require('beyond-datetime/css/index.css')
import { Calendar  } from 'beyond-datetime'

class MyComponent extends Component {

    handlerSelect(date){
        console.log(date); // Momentjs object
    }

    render(){
        return (
            <Calendar time  
                onInit={this.handlerSelect} 
                onChange={this.handlerSelect} />
        )
    }
}



```

```source _datetimerange
require('beyond-datetime/css/index.css')
import { DateRange,defaultRanges } from 'beyond-datetime'


class MyComponent extends Component {

    handlerSelect(range){
        console.log(range.startDate,range.endDate);
        // An object with two keys,
        // 'startDate' and 'endDate' which are Momentjs objects.
    }

    render(){
        return (
            <DateRange time ranges={defaultRanges} 
                    onInit={this.handlerSelect}
                    onChange={this.handlerSelect} />            
        )
    }
}


```


```render

<Display  name="基本使用" >
    <Item key="0" code={_date} state="日期选择">
        <div style={{paddingLeft : 150,height : 320}}><Calendar  /></div>
    </Item>
    <Item key="1" code={_daterange} state="日期范围选择">
        <div style={{paddingLeft : 150,height : 320}}><DateRange ranges={defaultRanges} /></div>
    </Item>
    <Item key="2" code={_datetime} state="日期时间选择">
        <div style={{paddingLeft : 150,height : 320}}><Calendar time /></div>
    </Item>
    <Item key="3" code={_datetimerange} state="日期时间范围选择">
        <div style={{paddingLeft : 150,height : 320}}><DateRange time ranges={defaultRanges} /></div>
    </Item>
</Display>
```

```source _trigger
import React, { Component } from 'react';
import { Calendar,Trigger } from 'beyond-datetime';

class App extends Component {

	constructor(props){
		super(props)
		this.state = {
			date : null
		}
	}

	handlerChange(date){
		this.setState((state, props) => ({date}))
	}

	render(){
		return (
			<div>
				<Trigger target={<Calendar time onConfirm={this.handlerChange.bind(this)} />}>
					<input type="text" value={this.state.date ? this.state.date.format('YYYY.MM.DD HH:mm:ss') : '' } />
				</Trigger>
			</div>
		)
	}
}

```

```source _trigger2
import React, { Component } from 'react';
import { Calendar,Trigger } from 'beyond-datetime';

class App extends Component {

	constructor(props){
		super(props)
		this.state = {
			date : null
		}
	}

	handlerChange(date){
		this.setState((state, props) => ({date}))
	}

	render(){
		return (
			<div>
				<Trigger target={<Calendar  onConfirm={this.handlerChange.bind(this)} />}>
					<input type="text" value={this.state.date ? this.state.date.format('YYYY.MM.DD') : '' } />
				</Trigger>
			</div>
		)
	}
}

```

```render

<Display  name="输入框选择" >
    <Item key="1" code={_trigger2} state="日期">
        <div><TriggerExample2  /></div>
    </Item>
    <Item key="0" code={_trigger} state="日期时间">
        <div><TriggerExample  /></div>
    </Item>
</Display>
```


## API 

### Calendar 

| 属性     | 类型   |  说明  | 默认值 |
| -------- | -----  | ----   | ---- |
| date    | string/Moment/date/function   | 设定日期值  | - |
| format    | string   |  如果 date 为字符串，比如 2016.01.01 这种格式，就需要提供date值的格式，以便moment可以正确解析，针对 2016.01.01,format 就是 YYYY.MM.DD，相关文档请查阅 moment文档 | - |
| firstDayOfWeek   |  number   |   -     |  moment.localeData().firstDayOfWeek() |
| onInit   |  function  | 初始化事件    | - |
| onChange |  function  | 改变日期/时间事件 | - |
| onConfirm |  function  | 使用Trigger时，使用该事件代替onChange事件 | - |
| isInvalid | function  | 禁止选择的日期  | - |
| time        | boolean   | 是否显示时间选择     | false |
| minute      | boolean   | 是否显示分选择      | true |
| second      | boolean   |   是否显示秒选择    |  true |


### DateRange

| 属性     | 类型   |  说明  | 默认值 |
| -------- | -----  | ----   | ---- |
| startDate    | string/Moment/date/function   | 设定日期值  | - |
| endDate    | string/Moment/date/function   | 设定日期值  | - |
| format    | string   |  如果 date 为字符串，比如 2016.01.01 这种格式，就需要提供date值的格式，以便moment可以正确解析，针对 2016.01.01,format 就是 YYYY.MM.DD，相关文档请查阅 moment文档 | - |
| firstDayOfWeek   |  number   |   -     |  moment.localeData().firstDayOfWeek() |
| onInit   |  function  | 初始化事件    | - |
| onChange |  function  | 改变日期/时间事件 | - |
| onConfirm |  function  | 使用Trigger时，使用该事件代替onChange事件 | - |
| ranges |  object  | 快捷范围选择 | - |
| isInvalid | function  | 禁止选择的日期  | - |
| time        | boolean   | 是否显示时间选择     | false |
| minute      | boolean   | 是否显示分选择      | true |
| second      | boolean   |   是否显示秒选择    |  true |

### Trigger


| 属性     | 类型   |  说明  | 默认值 |
| -------- | -----  | ----   | ---- |
| target    | Calendar/DateRange  | -  | - |
| wrapStyle    | object  | Trigger 会默认生成一个 span (style="display:inline-block")标签，使用wrapStyle 进行覆盖  | - |