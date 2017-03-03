/**
 * 
 * <List>
 * 		<Item link="">组件一</Item>
 * </List> 
 * <List title="GUIDE">
 * 		<Item link="">组件一</Item>
 * 		<Item link="">组件二</Item>
 * </List>
 * 
 */

import React, { Component } from 'react'
import {prefix} from './consts'
const classnames = require('classnames')
class List extends Component {

	constructor(props){
		super(props)
		this.state = {
			unfold : props.defaultUnfold == null ? true : props.defaultUnfold
		}
	}

	handlerTriggerUnfold(){
		const unfold = !this.state.unfold
		this.setState({unfold})
	}

	render() {
		const {title,children} = this.props
		let {unfold} = this.state
		return (
			<div className={classnames(`${prefix}-list`,unfold && `${prefix}-unfold` )}>
				{title && <div onClick={this.handlerTriggerUnfold.bind(this)} className={`${prefix}-list-title`}>{title}</div>}
				{(unfold || !title) && <div className={`${prefix}-items`}>{children}</div>}
			</div>
		)
	}
}

export default List