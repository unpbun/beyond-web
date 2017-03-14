---

title : beyond-slider
description : React 的轮播插件
imports() : 
    Header : 'scripts/components/Header'
    'Display,{Item}' : 'scripts/components/Display'
    'Slider, {Item as SliderItem}' : 'beyond-slider'

---

```render
<Header title={props.title} description={props.description} />
```

## 安装

```source _install
npm install beyond-slider  --save
```



```render
<Display defaultUnfold name="安装" >
    <Item key="0" code={_install} lang="bash" ></Item>
</Display>
```

## 示例代码

```source _base
require('beyond-slider/lib/index.css')
import Slider , {Item} from 'beyond-slider'

<Slider  height={500}>
	<Item key="0">
		<a href="http://www.baidu.com"> <img style={{width : '100%',height : '100%'}} src={require('images/c1.jpg')} /></a>
	</Item>
	<Item key="1">
		<a href="http://www.baidu.com"> <img style={{width : '100%',height : '100%'}} src={require('images/c2.jpg')} /></a>
	</Item>
	<Item key="2">
		<a href="http://www.baidu.com"> <img style={{width : '100%',height : '100%'}} src={require('images/c3.jpg')} /></a>
	</Item>
	<Item key="3">
		<a href="http://www.baidu.com"> <img style={{width : '100%',height : '100%'}} src={require('images/c4.jpg')} /></a>
	</Item>
</Slider>

```

```render
<Display name="基本使用">
    <Item key="0" code={_base}>
        <Slider  height={500}>
            <SliderItem key="0">
                <a href="http://www.baidu.com"> <img style={{width : '100%',height : '100%'}} src={require('images/c1.jpg')} /></a>
            </SliderItem>
            <SliderItem key="1">
                <a href="http://www.baidu.com"> <img style={{width : '100%',height : '100%'}} src={require('images/c2.jpg')} /></a>
            </SliderItem>
            <SliderItem key="2">
                <a href="http://www.baidu.com"> <img style={{width : '100%',height : '100%'}} src={require('images/c3.jpg')} /></a>
            </SliderItem>
            <SliderItem key="3">
                <a href="http://www.baidu.com"> <img style={{width : '100%',height : '100%'}} src={require('images/c4.jpg')} /></a>
            </SliderItem>
        </Slider>
    </Item>
</Display>

```


## API 

### Slider

| 名称        | 类型   |  默认值  |  说明  |
| ----------- | ------ | ------ | ------ |
|  width  | number/string |  -   |  设置 Slider 宽度  |
|  height  | number/string | 400 |  设置 Slider 高度  |
|  interval  | number/string |  2  |  设置轮播的时间间隔,单位为秒  |
|  autoPlay  | boolean |  true  |  是否开启自动轮播  |
|  pauseOnAction  | boolean |  true  |  设置鼠标悬停时是否停止轮播  |
|  controlNav  | boolean |  true   |  显示 Slider 上的指示器  |
|  directionNav  | boolean |  true   |  显示 Slider 上的方向指示器  |
|  prev  | Element/string |  -   |  自定义前指示器内容  |
|  next  | Element/string |  -   |  自定义后指示器内容  |
|  extraClassName  | string |  -  |  增加一个 className, 用以覆盖原有样式  |
