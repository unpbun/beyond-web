---
title : button
descripttion : this is an button component
uses : 
    - 按钮1
    - 按钮2
imports : 
    'Display,{Item}' : './Display'
---



```attributes codes
<button>this is a</button>
<button>this is b</button>
```

```attributes codes
<button>this is b</button>
<button>this is a</button>
```

```render
<div className="header">
    <h1>placeholder</h1>
</div>
```

## 使用场景



1. 系统层级较多，用户容易迷失
2. 用户需要返回上级访问页面


## xx


士大夫士大夫十分生动sdjfosjdiof 

## 示例代码
```render html
<Display defaultUnfold name={attributes.title} description="placeholder for IE8 & IE9">
    <Item code={attributes.codes[0]} state={attributes.uses[0]}>
        <button>this is a</button>
    </Item>
     <Item code={attributes.codes[1]} state={attributes.uses[1]}>
        <button>this is b</button>
    </Item>
</Display>
```



```render html
<Display defaultUnfold name={attributes.title} description="placeholder for IE8 & IE9">
    <Item code={attributes.codes[0]} state="normal">
        <button>this is a</button>
    </Item>
     <Item code={attributes.codes[1]} state="loading">
        <button>this is b</button>
    </Item>
</Display>
```

## API

| 属性        |  类型   |  默认值  | 说明 |
| --------   | ----   | ----  |----  |
| reverse  |   boolean   |  false  |设置反转颜色 |
| className  | string  |  tooltip  | 非必需，替换原有className，不建议|
| extraClassName  |    string    |  -  | 非必需，增加className，定制样式 |
| style    |  object   |   -   | 设置外层样式 |