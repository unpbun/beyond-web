/**
 *  <RadioGroup  defaultActiveKey="1" activeKey>
	 <Radio key="1" label="xx" />
	 <Radio key="2" label="xx" />
	 <Radio key="3" label="xx" />
 	</RadioGroup>
 */

import React from 'react'
import Radio from './Radio'
export default class RadioGroup extends React.Component {

	constructor(props){
		super(props)
		let activeKey = props.activeKey || props.defaultActiveKey
		this.state = { activeKey }
	}

	handlerChange(activeKey){
		let result 
		if(typeof this.props.onChange === 'function'){
			result = this.props.onChange(activeKey)
		}
		if(result !== false){
			this.setState({activeKey})
		}
	}

	render() {

		let {activeKey} = this.state
		let {children,inline} = this.props 
		let radios = null
		if(children){
			radios = (Array.isArray(children) ? children : [children]).map((item)=>{
				let checked = activeKey === item.key				
				return React.cloneElement(item,{inline, checked, onChange : this.handlerChange.bind(this,item.key)})
			})
		}
		return (
			<div className="radio-group">{radios}</div>
		)
	}
}