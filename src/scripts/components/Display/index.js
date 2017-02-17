/**

 <Display title="" description="">
	<Item title="菜单靠右" code="<Nav right></Nav>">
		<Nav right></Nav>
	</Item>
	<Item title="菜单靠左" code="<Nav left></Nav>">
		<Nav left></Nav>
	</Item>
 </Display>

 */
import React from 'react'
import Radio,{RadioGroup} from '../Radio'
import copy from 'copy-to-clipboard'
import classnames from 'classnames'

// const OverlayTrigger = require('@best/react-bootstrap/lib/OverlayTrigger')
// const Tooltip = require('@best/react-bootstrap/lib/Tooltip')
// const Highlight = require('react-highlight')

const className = 'display'
const classNamePrefix = `${className}-`
class Display extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			unfold : false,
			activeKey : props.defaultActiveKey || props.activeKey
		}
	}

	render() {
		
	}

}