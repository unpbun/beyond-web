import React, {Component} from 'react'
import Menus from './Menus'
// import Home from './pages/Home'
import {props} from 'docs/index.md'

import parseMarkdownData from 'scripts/commons/parseMarkdownData'
import { Router, Route, Link,hashHistory } from 'react-router'
const prefix = 'container'

const data = parseMarkdownData(props)

const Layout = (props)=>{
	return  (
		<div className={prefix}>
			<div className={`${prefix}-sidebar`}>
				<div className="logo">Beyond</div>
				<Menus data={data} />
			</div>
			<div className={`${prefix}-main markdown-doc`}>{props.children}</div>
		</div>
	)
}
// console.log()
class Container extends Component {


	render() {
		let routes = []
		data.forEach((item)=>{
			item.children.forEach(subItem=>{
				let url = encodeURI(`${item.path}/${subItem.path}`)
				routes.push(<Route key={url} path={url} component={subItem.component} />)
			})
		})
		
		return (
			<Router history={hashHistory}>
				<Route path="/" component={Layout}>
					{routes}
				</Route>
			</Router>
		)
	}
}

export default Container