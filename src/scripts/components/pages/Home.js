import React, { Component } from 'react'
// import Radio , {RadioGroup} from '../Radio'
// import 
import Display , {Item} from '../Display'
import Page from '../Page'
var test = require('../test.md')
import Test from '../test.md' 
// const test = require('../test.md')
console.log(test)
class Home extends Component {
	render() {
		return (
			<Page title="Placeholder" description="用于在 input textarea 上显示提示性占位符">
					<Test />
			</Page>
		)
	}
}

export default Home