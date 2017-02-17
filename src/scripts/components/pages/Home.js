import React, { Component } from 'react'
import Radio , {RadioGroup} from '../Radio'
// import 
import Display , {Item} from '../Display'
class Home extends Component {
	render() {
		return (
			<div style={{padding : 20}}>
				<RadioGroup defaultActiveKey="1" inline>
					<Radio key="1" label="中文"></Radio>
					<Radio key="2" label="英文"></Radio>
					<Radio key="3" label="法文"></Radio>
				</RadioGroup>

				<Display name="button" description="this is button , for click">
					<Item code="console.log('normal')" state="normal"> <button>normal</button>	</Item>
					<Item code="console.log('loading')" state="loading"> <button>loading</button>	</Item>
					<Item code="console.log('disable')" state="disable"> <button>disable</button>	</Item>
				</Display>
			</div>
		)
	}
}

export default Home