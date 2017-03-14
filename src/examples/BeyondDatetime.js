import React, { Component } from 'react';
import { Calendar,Trigger } from 'beyond-datetime';

class TriggerExample extends Component {

	constructor(props){
		super(props)
		this.state = {
			date : null
		}
	}

	handlerChange(date){
		this.setState((state, props) => ({date}))
	}

	render(){
		return (
			<div>
				<Trigger target={<Calendar date={this.state.date} time onConfirm={this.handlerChange.bind(this)} />}>
					<input type="text" value={this.state.date ? this.state.date.format('YYYY.MM.DD HH:mm:ss') : '' } />
				</Trigger>
			</div>
		)
	}
}

class TriggerExample2 extends Component {

	constructor(props){
		super(props)
		this.state = {
			date : null
		}
	}

	handlerChange(date){
		this.setState((state, props) => ({date}))
	}

	render(){
		return (
			<div>
				<Trigger target={<Calendar date={this.state.date} onConfirm={this.handlerChange.bind(this)} />}>
					<input type="text" value={this.state.date ? this.state.date.format('YYYY.MM.DD') : '' } />
				</Trigger>
			</div>
		)
	}
}

export {TriggerExample,TriggerExample2}