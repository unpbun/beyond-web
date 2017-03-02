---

title : assign
description : 对象潜复制

imports() : 
    Header : 'Header'
    'Display,{Item}' : 'Display'

---

```render html

<Header title={props.title} description={props.description} />  

```

## 使用场景

- 合并对象
- 生成新对象，而不更改原有对象



## 示例代码

```source _code
const assign = require('beyond-lib/lib/assign')

const obj = assign({},{bar : 1},{foo : 2})  
//  {bar : 1 , foo :2}
```


```render

<Display defaultUnfold  name={props.title} description={props.description}>
    <Item code={_code} >
    </Item>
</Display>

```
