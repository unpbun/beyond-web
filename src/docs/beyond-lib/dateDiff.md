---

title : dateDiff 
description : 计算两个日期的间隔

imports() : 
    Header : 'scripts/components/Header'
    'Display,{Item}' : 'scripts/components/Display'

---

```render html

<Header title={props.title} description={props.description} />  

```

## 使用场景

- 识别浏览器种类和版本



## 示例代码

```source _code
//返回两个日期的的时间间隔,如果第一个参数代表的时间晚于第二个参数，返回正数，相等返回0，否则返回负数

const dateDiff = require('beyond-lib/lib/dateDiff')
dateDiff.years(new Date(2008,01,01),new Date(2006,02,01))  // return 2
dateDiff.years(1170259200000,1141142400000)  // return 1
dateDiff.years(new Date(2006,01,01),new Date(2008,02,01))  // return -2
dateDiff.years(+new Date(2007,01,01),new Date(2007,02,01))  // return 0
dateDiff.years(+new Date(2007,01,01),new Date(2007,02,01))  // return 0

dateDiff.months(date1,date2)
dateDiff.months(timestamp1,timestamp2)
dateDiff.months(date1,timestamp2)

dateDiff.days(date1,date2)
dateDiff.hours(date1,date2)
dateDiff.minutes(date1,date2)
dateDiff.seconds(date1,date2)

```


```render

<Display defaultUnfold  name={props.title} description={props.title}>
    <Item code={_code}>
    </Item>
</Display>

```
