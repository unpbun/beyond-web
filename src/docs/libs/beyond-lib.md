---

title : beyond-lib
description : beyond-lib 基础库，包含最常用的功能

imports() : 
    Header : 'Header'
    'Display,{Item}' : 'Display'

---

```render html
<Header title={props.title} description={props.description} /> 
```


## assign



```source _code
const assign = require('beyond-lib/lib/assign')

const obj = assign({},{bar : 1},{foo : 2})  
//  {bar : 1 , foo :2}
```

```source _assign
const assign = require('beyond-lib/lib/assign')

const obj = assign({},{bar : 1},{foo : 2})  
//  {bar : 1 , foo :2}
```


```render

<Display defaultUnfold  name="assign" description="对象合并和潜复制">
    <Item code={_assign} >
    </Item>
</Display>

```


## browser


```source _browser
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

<Display defaultUnfold  name="browser" description="识别浏览器种类和版本">
    <Item code={_browser} >
    </Item>
</Display>

```



## dateDiff


```source _dateDiff
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

<Display defaultUnfold  name="dateDiff" description="识别浏览器种类和版本">
    <Item code={_dateDiff}>
    </Item>
</Display>

```


## dateFormat



```source _dateFormat
//假如当前日期是 2014.02.01
const dateFormat = require('beyond-lib/lib/dateFormat')
dateFormat()  // 2014.02.01
dateFormat('yyyy')  // 返回当前时间戳的 2014格式
dateFormat(new Date(2000,00,01,12,12))  // 返回该时间戳的默认日期 2000.01.01
dateFormat('yyyy',+new Date(2000,01,01))   // 2000

```


```render

<Display defaultUnfold  name="dateFormat" description="格式化日期">
    <Item code={_dateFormat}>
    </Item>
</Display>

```

**格式规范**

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


## htmlHelper


```source _htmlHelper
var htmlHelper = require('beyond-lib/lib/htmlHelper')
htmlHelper.encodeHTML('<a href="#">hello&\'quote\'</a>')
htmlHelper.decodeHTML('&lt;a href=&quot;#&quot;&gt;hello&amp;&#039;quote&#039;&lt;/a&gt;')

```


```render

<Display defaultUnfold  name="htmlHelper" description="html 编码和解码">
    <Item code={_htmlHelper}>
    </Item>
</Display>

```

**编码规则**

| 原字符 | 编码后 |  
| -----| -----  | 
| & |  \&amp; |  
| < |  \&lt;   | 
| > |  \&gt; |  
| " |  \&quot; |  
| ' |  \&#039; |  


## storage


```source _storage
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

<Display defaultUnfold  name="storage" description="浏览器本地存储">
    <Item code={_storage}>
    </Item>
</Display>

```




## url

```source _url
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

<Display defaultUnfold  name="url" description="url 解析">
    <Item code={_url}>
    </Item>
</Display>

```