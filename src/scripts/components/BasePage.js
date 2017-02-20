import React, { Component } from 'react';
const prefix = 'base-page'
class BasePage extends Component {
	render() {
		let {title,description,children} = this.props
		return (
			<div className="base-page">
				<div className={`${prefix}-header`}>
					<h2>{title}</h2>
					<div>{description}</div>
				</div>
				<div className={`${prefix}-content`}>{children}</div>
			</div>
		)
	}
}

export default BasePage