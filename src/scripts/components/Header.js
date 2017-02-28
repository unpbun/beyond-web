import React, { Component } from 'react'
const prefix = 'header'
class Header extends Component {
	render() {
		const {title,description} = this.props
		return (
			<div className={prefix}>
				<h1>{title}</h1>
				<p>{description}</p>
			</div>
		)
	}
}

export default Header