import React, {Component} from 'react'
import Menus from './Menus'
import Home from './pages/Home'
const prefix = 'container'
class Container extends Component {

	constructor(props){
		super(props)
		this.state = {
			component : null
		}
	}

	componentDidMount(){
		/**
		 * let children = <Page title="title" description="this is description">{subComponent}</Page>
		 * this.setState({children})
		 */
	}

	render() {
		return (
			<div className={prefix}>
				<div className={`${prefix}-sidebar`}>
					<div className="logo">Beyond</div>
					<Menus />
				</div>
				<div className={`${prefix}-main`}> <Home /> </div>
			</div>
		)
	}
}

export default Container