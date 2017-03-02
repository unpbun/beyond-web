---

title : browser 
description : 浏览器嗅探

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
const parse = require('beyond-lib/lib/browser')

const info = parse(navigator.userAgent)

info.name // Chrome/Firefox/IE/Opera/Safari/Edge
info.version //browser version

info.isIE   
info.isIE8  
info.isIE9  
info.isIE10  
info.isIE11  
info.isIE678  
info.isEdge  
info.isChrome  
info.isFirefox  
info.isSafari  
info.isMicroMessenger  // 是否微信浏览器

info.isWindows  
info.isMac  
info.isiPhone  
info.isiPad  
info.isiPod  
info.isAndriod  
info.isLinux  
```


```render

<Display defaultUnfold  name={props.title} description={props.description}>
    <Item code={_code} >
    </Item>
</Display>

```
