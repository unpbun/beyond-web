/**

 <Display name="" description="">
	<Item state="菜单靠右" code="<Nav right></Nav>">
		<Nav right></Nav>
	</Item>
	<Item state="菜单靠左" code="<Nav left></Nav>">
		<Nav left></Nav>
	</Item>
 </Display>

 */
import React from 'react'
import Radio,{RadioGroup} from '../Radio'
import copy from 'copy-to-clipboard'
// import classnames from 'classnames'

// const OverlayTrigger = require('@best/react-bootstrap/lib/OverlayTrigger')
// const Tooltip = require('@best/react-bootstrap/lib/Tooltip')
// const Highlight = require('react-highlight')
import SyntaxHighlighter from 'react-syntax-highlighter'
import syntaxStyle from 'react-syntax-highlighter/dist/styles/arduino-light'
const prefix = 'display'

export const Item = (props)=> <div style={{display : props.active ? 'block' : 'none' }}>{props.children}</div>

export default class Display extends React.Component {

	constructor(props){
		super(props)

		this.state = {
			unfold :  !!props.defaultUnfold,
			activeKey : 0
		}
	}

	handlerChange(activeKey){
		activeKey = +activeKey
		this.setState({activeKey})
	}

	handlerCopy(code){
		copy(code)
	}

	handlerUnfold(){
		let {unfold} = this.state
		unfold = !unfold
		this.setState({unfold})
	}

	render() {
		let {name,children,description} = this.props
		let {unfold,activeKey} = this.state
		let items
		if(children){
			items = Array.isArray(children) ? children : [children]
		}else{
			items = []
		}
		items = items.map((item,i)=> {
			return i !== activeKey ? item : React.cloneElement(item,{active : true})
		})
		let activeItem= items[activeKey]
		let code = activeItem && activeItem.props ? activeItem.props.code : null
		// let activeContent = activeItem ? activeItem.props.children : null
		return (
			<div className={prefix}>
				<div className={`${prefix}-header`}>
					<div className={`${prefix}-name`}>{name}</div>
					<div className={`${prefix}-description`}>{description}</div>
				</div>
				<div className={`${prefix}-body`}>{items}</div>
				<div className={`${prefix}-operates`}>
					{this.renderRadios(items)}
					<span title="复制" 
						onClick={this.handlerCopy.bind(this,code)} 
						className={`iconfont ${prefix}-icon ${prefix}-icon-copy`} 
						dangerouslySetInnerHTML={{__html : '&#xe669;'}} />
					<span onClick={this.handlerUnfold.bind(this)} 
						className={`iconfont ${prefix}-icon ${prefix}-icon-unfold`} 
						dangerouslySetInnerHTML={{__html : unfold ? '&#xeb3d;' : '&#xeb3e;'}} />
				</div>
				{this.renderCode(code)}
			</div>
		)
	}

	renderCode(code){
		let {unfold} = this.state
		if(unfold){
			return (
				<div className={`${prefix}-code`}>
					<SyntaxHighlighter customStyle={{padding : 0,margin : 0}} style={syntaxStyle}>{code}</SyntaxHighlighter>
				</div>
			)
		}
	}

	renderRadios(items){
		if(items && items.length > 0){
			let {activeKey} = this.state
			return <RadioGroup inline activeKey={activeKey+''} onChange={this.handlerChange.bind(this)}>{items.map((item,i)=> <Radio label={item.props.state} key={i+''} /> )}</RadioGroup>
		}
	}

}