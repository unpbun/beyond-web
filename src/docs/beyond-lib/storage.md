---

title : storage
description : 浏览器本地存储和cookie 快捷操作

imports() : 
    Header : 'scripts/components/Header'
    'Display,{Item}' : 'scripts/components/Display'

---

```render html

<Header title={props.title} description={props.description} />  

```

## 使用场景

- 浏览器本地存储
- 操作 cookie 



## 示例代码

```source _code
var storage = require('beyond-lib/lib/storage')

//localstorage,value 可以为 原始格式或者普通对象
storage.set('key',{value : 'value'})
storage.get('key')

//cookie,expire 单位为天，默认为 30 天
storage.setCookie('key','value')
storage.setCookie(key,value,expire,path,domain,secure)
storage.setCookie('key','value',30,'/')
storage.setRawCookie('key','value')
storage.setRawCookie('key','value',expire,path,domain,secure)
storage.getCookie('key')
storage.getRawCookie('key')
storage.removeCookie('key')

```


```render

<Display defaultUnfold  name={props.title} description={props.description}>
    <Item code={_code}>
    </Item>
</Display>

```