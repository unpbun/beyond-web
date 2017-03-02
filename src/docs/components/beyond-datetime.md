---

title : beyond-datetime
description : React 的日期组件，提供 日期、时间组件，日期时间范围选择等功能
requires() :
    - 'beyond-datetime/css/index.css'
imports() : 
    Header : 'scripts/components/Header'
    'Display,{Item}' : 'scripts/components/Display'
    '{Calendar, DateRange, defaultRanges}' : 'beyond-datetime'

---

```render
<Header title={props.title} description={props.description} />
```

```source _date
<Calendar  />
```

```source _daterange
<DateRange ranges={defaultRanges} />
```

```source _datetime
<Calendar time  />
```

```source _datetimerange
<DateRange time ranges={defaultRanges} />
```


```render

<Display  name={props.title} description="React 日期组件">
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

## API 

### Calendar 

### DateRange

### Trigger