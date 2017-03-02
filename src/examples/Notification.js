require('beyond-components/lib/Notification/index.css')

import React from 'react'
import Notification from 'beyond-components/lib/Notification'

const notice = Notification.getInstance(<Notification />)

export default class NotificationExample extends React.Component{

	handlerClick(){
		notice.show('hello world' )
	}

	render(){
		return <button onClick={this.handlerClick}>click me</button>
	}
}