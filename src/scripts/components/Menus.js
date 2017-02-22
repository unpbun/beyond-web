import React, { Component } from 'react'
import {List,Item} from './Menu'
import pageEvent from 'scripts/commons/pageEvent'
const parse = require('beyond-lib/lib/url')

class Menus extends Component {

	componentDidMount(){
		window.addEventListener('hashchange',this.hashChangeHandler)
	}

	componentWillUnmount(){
		window.removeEventListener('hashchange',this.hashChangeHandler)
	}

	hashChangeHandler(event){
		console.log(event)
		let {hash} = parse(location.href)
		if(hash){
			pageEvent.setCurrentPage(hash)
		}
		console.log(location.href)
	}

	render() {
		return (
			<div>
				<List title="原型组件">
					<Item path="/p/document" page={require('docs/Document.md')}>Document</Item>
					<Item>Placeholder</Item>
					<Item>Modal</Item>
					<Item>Grid</Item>
					<Item>Tabs</Item>
					<Item>Tooltip</Item>
					<Item>Notification</Item>
				</List>
				<List title="组件">
					<Item>DateTime</Item>
				</List>
				<List title="基础库">
					<Item>Storage</Item>
				</List>
				<List title="remotes">
					<Item>usage</Item>
				</List>
			</div>
		)
	}
}

export default Menus