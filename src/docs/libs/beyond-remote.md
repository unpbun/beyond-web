---

title : beyond-remote
description : 用于封装ajax和fetch请求的功能库 

imports() : 
    Header : 'Header'
    'Display,{Item}' : 'Display'

---

```render html
<Header title={props.title} description={props.description} /> 
```
## 使用场景

用于封装ajax和fetch请求

## 使用前事项

此库使用 promise，推荐使用 es6-promise 。如果是使用 webpack 打包，需在入口文件顶部使用es6-promise。


```render
<Display defaultUnfold  name="引入 es6-promise">
    <Item code="require('es6-promise').polyfill()">
    </Item>
</Display>
```
如果是 IE8 环境下，还需要引入 es5-shim。


## 安装

```render
<Display name="安装" defaultUnfold>
	<Item lang="bash" code="npm install beyond-remote  --save"></Item>
</Display>
```






## 基本使用 

```source _basic
var remote = require('beyond-remote').remote

//default base options
remote.base({
    basePath : '',
    requestJSON : true,
    responseJSON : true,
    timeout : 10,
    autoTransform : false,
    dataType : 'json'  // json/text/formData/blob/arrayBuffer
})

var getUsers = remote.create({
    url : '/user/list'
})

var getUser = function(id){
    var call = remote.create({
        url : '/user/detail',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : {id : 1}
    })
    return call()
}

// file upload
var uploadAvatar = function(formData){
    var call = remote.create({
        url : '/user/uploadAvatar',
        requestJSON : false,
        responseJSON : false,
        body : formData
    })
    return call()
}

getUsers().then(function(json){
    console.log(json)
}).catch(function(error){
    console.log(error)
})

getUser(1).then(function(json){
    console.log(json)
}).catch(function(error){
      console.log(error)
})
```

```render
<Display defaultUnfold  name="基本使用">
    <Item code={_basic}>
    </Item>
</Display>
```


## API

**remote.base(options : Options)/remote.create(options : Options)**

| 方法        |  类型   |  默认值 | 说明 |
| --------   | ----   | ----  |----  |
| url  | string  |  -  | 请求的url，会与 basePath 做拼接 |
| basePath  |   string   | -  | 每一个 Remote 实例的 basepath ,会与 url 拼接 |
| requestJSON  |   boolean  |  true  | requestJSON 为 true 且没有手动设置content-type的情况下， 会设置请求头 content-type 为 application/json ，并会将 object 类型的 body 通过 JSON.stringify 转化 json 格式字符串 |
| responseJSON  |   boolean   | true | responseJSON 为 true 且没有手动设置content-type的情况下， 会设置请求头 Accept 为 application/json |
| timeout  |   number  |  number  | 超时设置，单位为秒，默认为 10，设置0为不限制超时 |
| dataType  |   string  |    | 设置返回数据的转换，默认为 json，支持 json/text/formData/blob/arrayBuffer |
| autoTransform  |   boolean   |  false  | 在不设置dataType的情况下，根据请求返回的 content-type 自动转换数据，目前仅支持 json 和 text |



更多 options 请参考 fetch 的第二个参数对象，关于 fetch 接口的时候，请参考 [这个API很“迷人”——(新的Fetch API)](https://www.w3ctech.com/topic/854)


## 高级使用

```source _newInstance
var remote = require('beyond-remote').remote
remote.base({basePath : '/api'})
remote.on('send',sendHandle)


var remote2 = new require('beyond-remote').Remote
remote2.base({basePath : '/api2'})
remote2.on('start',startHandle)
```

```render
<Display defaultUnfold  name="新实例"  description="创建新的 remote 实例,强烈建议根据不同的api basePath 定义remote实例">
    <Item code={_newInstance}>
    </Item>
</Display>
```




```source _event
var remote = require('beyond-remote').remote
remote.on('start',startHandle)
remote.on('send',sendHandle)
remote.on('success',successHandle)
remote.on('error',errorHandle)
remote.on('complete',completeHandle)

var getUser = remote.create({
    url : '/getUser'
})

getUser()

/*
事件发生顺序依次为 start -> send -> success/error -> complete
事件仅仅是针对单一的 remote，多个 remote 实例之间不共享事件
*/
```

```render
<Display defaultUnfold  name="定义事件"  description="注册请求 remote 实例事件">
    <Item code={_event}>
    </Item>
</Display>
```


