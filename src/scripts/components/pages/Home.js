import React, { Component } from 'react'
import Radio , {RadioGroup} from '../Radio'
class Home extends Component {
	render() {
		return (
			<div style={{padding : 20}}>
				<RadioGroup defaultActiveKey="1" inline>
					<Radio key="1" label="中文"></Radio>
					<Radio key="2" label="英文"></Radio>
					<Radio key="3" label="法文"></Radio>
				</RadioGroup>
			</div>
		)
	}
}

export default Home