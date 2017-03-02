---

title : url 
description : url 解析工具

imports() : 
    Header : 'scripts/components/Header'
    'Display,{Item}' : 'scripts/components/Display'

---

```render html

<Header title={props.title} description={props.description} />  

```


## 示例代码

```source _code
var parse = require('beyond-lib/lib/url')

var info = parse('http://rob:abcd1234@1.2.3.4:9090/path/index.html?query1=test&silly=willy#test=hash&chucky=cheese')
info.protocol   // http
info.auth       // rob:abcd1234
info.user       // rob
info.pass       // abcd1234
info.host       // 1.2.3.4:9090
info.port       // 9090
info.hostname   // 1.2.3.4
info.hash       // test=hash&chucky=cheese
info.search     // ?query1=test&silly=willy
info.query      // {query1 : 'test' , silly : 'willy'}
info.pathname   // /path/index.html
info.url        // http://rob:abcd1234@1.2.3.4:9090/path/index.html?query1=test&silly=willy#test=hash&chucky=cheese

```


```render

<Display defaultUnfold  name={props.title} description={props.description}>
    <Item code={_code}>
    </Item>
</Display>

```