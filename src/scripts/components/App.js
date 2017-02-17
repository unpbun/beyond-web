import React from 'react'
import Container from './Container'
// import {getTodos} from 'scripts/remotes'
export default class App extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			todos : []
		}
	}

	render() {
		return (
			<div className='app'>
				<Container />
			</div>
		)
	}
}