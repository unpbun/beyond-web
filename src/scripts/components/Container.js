import React, {Component} from 'react'
import Menus from './Menus'
// import Home from './pages/Home'
import {props} from 'docs/index.md'

import parseMarkdownData from 'scripts/commons/parseMarkdownData'
import { Router, Route, IndexRedirect, browserHistory  } from 'react-router'
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
		let indexUrl
		data.forEach((item,i)=>{
			item.children.forEach((subItem,j)=>{
				let url = encodeURI(`${item.path}/${subItem.path}`)
				routes.push(<Route key={url} path={url} component={subItem.component} />)
				if(i === 0 && j === 0){
					indexUrl = `/${url}`					
				}
			})
		})
		routes = [<IndexRedirect key="-1" to={indexUrl} />].concat(routes)
		return (
			<Router history={browserHistory}>
				<Route path="/" component={Layout}>
					{routes}
				</Route>
			</Router>
		)
	}
}

export default Container