import React, {Component} from 'react'
import {List,Item} from './Menus'
import Home from './pages/Home'
const prefix = 'container'
class Container extends Component {
	render() {
		return (
			<div className={prefix}>
				<div className={`${prefix}-sidebar`}>
					<div className="logo">Beyond</div>
		
					<List title="原型组件">
						<Item>Document</Item>
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
				<div className={`${prefix}-main`}> <Home /> </div>
			</div>
		)
	}
}

export default Container