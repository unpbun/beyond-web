import React, { Component } from 'react'
import {prefix} from './consts'
class Item extends Component {
	render() {
		let {children,link} = this.props
		let child = link ? <a href={link}>{children}</a> : children
		return (
			<div className={`${prefix}-item`}  {...this.props}>{child}</div>
		)
	}
}



export default Item