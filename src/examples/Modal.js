import React, { Component } from 'react'
import Modal from 'beyond-components/lib/Modal'
require('beyond-components/lib/Modal/index.css')


class ModalExample extends Component {
	constructor(props){
		super(props)
		this.state = {
			visible : false
		}
	}

	hide(){
		this.setState({visible : false})
	}

	show(){
		this.setState({visible : true})
	}

	render(){
		return (
			<div>
				<button onClick={this.show.bind(this)}>点击弹窗</button>
				<Modal width="500px" visible={this.state.visible} onClose={this.hide.bind(this)} title="我是标题">我是内容</Modal>
			</div>
		)
	}
}

export default ModalExample