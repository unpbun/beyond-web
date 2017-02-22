import React, { Component } from 'react'
import {prefix} from './consts'
import pageEvent from 'scripts/commons/pageEvent'
class Item extends Component {

	constructor(props){
		super(props)
		let {page,isDefault,path} = props
		if(path && page){
			pageEvent.addPage(path,page,isDefault)	
		}
	}

	componentDidMount(){
	}

	render() {
		let {children,link,style,path} = this.props
		let child = (link || path) ? <a href={link || `#${path}`}>{children}</a> : children
		return (
			<div className={`${prefix}-item`} style={style}>{child}</div>
		)
	}
}



export default Item