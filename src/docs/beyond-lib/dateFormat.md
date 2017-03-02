---

title : dateFormat
description : 简洁的日期格式化

imports() : 
    Header : 'scripts/components/Header'
    'Display,{Item}' : 'scripts/components/Display'

---

```render html

<Header title={props.title} description={props.description} />  

```

## 使用场景

- 格式化日期



## 示例代码

```source _code
//假如当前日期是 2014.02.01
const dateFormat = require('beyond-lib/lib/dateFormat')
dateFormat()  // 2014.02.01
dateFormat('yyyy')  // 返回当前时间戳的 2014格式
dateFormat(new Date(2000,00,01,12,12))  // 返回该时间戳的默认日期 2000.01.01
dateFormat('yyyy',+new Date(2000,01,01))   // 2000

```


```render

<Display defaultUnfold  name={props.title} description={props.title}>
    <Item code={_code}>
    </Item>
</Display>

```

## 格式规范

| 类型 | 说明   |  类型 | 说明   |  
| -----| -----  | -----| -----  | 
| yy   | 2位数年份   | yyyy | 4位数年份 |  
| M    | 月份 |   MM   | 2位数月份，如果是个位则前置0 |  
| d    | 日期 |   dd   | 2位数日期，不足前置0 |  
| H    | 24制小时 | HH   | 2位数24制小时，不足2位前置0 |
| h    | 12制小时 |   hh   | 2位数12制小时，不足2位前置0 |
| m    | 分钟 |   mm   | 2位数分钟，不足前置0 |
| s    | 秒 |   ss   | 2位数秒，不足前置0 |
| S    | 毫秒 |   u    | 星期几，0-6,0表示周日 |  