---

title : htmlHelper
description : 编码 html 代码

imports() : 
    Header : 'scripts/components/Header'
    'Display,{Item}' : 'scripts/components/Display'

---

```render html

<Header title={props.title} description={props.description} />  

```

## 使用场景

- html 编码和解码



## 示例代码

```source _code
var htmlHelper = require('beyond-lib/lib/htmlHelper')
htmlHelper.encodeHTML('<a href="#">hello&\'quote\'</a>')
htmlHelper.decodeHTML('&lt;a href=&quot;#&quot;&gt;hello&amp;&#039;quote&#039;&lt;/a&gt;')

```


```render

<Display defaultUnfold  name={props.title} description={props.title}>
    <Item code={_code}>
    </Item>
</Display>

```

## 编码规则

| 原字符 | 编码后 |  
| -----| -----  | 
| & |  \&amp; |  
| < |  \&lt;   | 
| > |  \&gt; |  
| " |  \&quot; |  
| ' |  \&#039; |  
