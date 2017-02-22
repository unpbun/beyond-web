import React, { Component } from 'react';
const prefix = 'page'
class Page extends Component {
	render() {
		let {title,description,children} = this.props
		return (
			<div className={prefix}>
				<div className={`${prefix}-header`}>
					<h2>{title}</h2>
					<div>{description}</div>
				</div>
				<div className={`${prefix}-content markdown-doc`}>{children}</div>
			</div>
		)
	}
}

export default Page