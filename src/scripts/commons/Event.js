
export default class Event{

	constructor(){
		this._handles = {}
	}

	on (type, callback) {
		if (type && callback) {
			this._handles[type] = this._handles[type] || []
			this._handles[type].push(callback)
		}
		return this
	}

	off (type, callback) {
		if (!type || !this._handles[type]) return
		if (callback == null) {
			if (this._handles[type]) this._handles[type] = []
		} else if (typeof callback === 'function') {
			for (var i = 0, len = this._handles[type].length; i < len; i++) {
				if (this._handles[type][i] === callback) {
					this._handles[type][i] = null
					return
				}
			}
		}
		return this
	}

	trigger (type, data) {
		if (this._handles[type]) {
			const event = {type,data,target : this}
			for (var i = 0, len = this._handles[type].length; i < len; i++) {
				var handleType = typeof this._handles[type][i]
				if ( handleType === 'function') {
					this._handles[type][i].call(this, event)
				}else if( handleType === 'string' && typeof this[this._handles[type][i]] === 'string'){
					this[this._handles[type][i]].call(this,event)
				}
			}
		}
		return this
	}
}