import React from 'react'
// const mergeFuncs = require('beyond-lib/lib/utilities/mergeFuncs')
const classnames = require('classnames')
const prefix = 'radio'

// const Checkbox = (props)=>{
// 	let {checked,inline} = props
// 	let className = classnames(prefix, checked && `${prefix}-checked`, inline && `${prefix}-inline`)
// 	return (
// 		<div className={className} onClick={}>
		
// 		</div>
// 	)
// }

// export default Checkbox

export default class Checkbox extends React.Component {

	handlerChange(event){
		if(typeof this.props.onChange === 'function'){
			this.props.onChange()
		}
	}

	render() {
		let {checked,inline,label} = this.props
		let className = classnames(prefix, checked && `${prefix}-checked`, inline && `${prefix}-inline`)
		return (
			<div onClick={this.handlerChange.bind(this)} className={className}>
				<div className="radio-border">
					<span className="radio-dot"></span>
				</div>
				{label && <span className="radio-label">{this.props.label}</span>}
			</div>
		)
	}

}