import React, { Component } from 'react'
import {List,Item} from './Menu'
import pageEvent from 'scripts/commons/pageEvent'
import { Router, Route, Link } from 'react-router'
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
		let data = this.props.data || []
		// let list = []
		let list = data.map((item)=> {
			return (
				<List title={item.menu} key={item.menu}>
					{item.children.map((subItem)=> <Item key={subItem.menu}><Link to={`/${item.menu}/${subItem.menu}`}>{subItem.menu}</Link></Item> )}
				</List>
			)
		})

		return (
			<div>{list}</div>
		)
	}
}

export default Menus