/**
 * <List title="GUIDE">
 * 		<Item link="">组件一</Item>
 * 		<Item link="">组件二</Item>
 * </List>
 * 
 */

import React, { Component } from 'react';
import {prefix} from './consts'

class List extends Component {

	constructor(props){
		super(props)
		this.state = {
			unfold : props.unfold == null ? true : props.unfold
		}
	}

	handlerTriggerUnfold(){
		const unfold = !this.state.unfold
		this.setState({unfold})
	}

	render() {
		const {title,children} = this.props
		const {unfold} = this.state
		return (
			<div className={`${prefix}-list`}>
				<div onClick={this.handlerTriggerUnfold.bind(this)} className={`${prefix}-list-title`}>{title}</div>
				{unfold && <div className={`${prefix}-items`}>{children}</div>}
			</div>
		)
	}
}

export default List