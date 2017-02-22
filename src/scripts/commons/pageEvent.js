import Event from './Event'


const _pages = {

}

let _current = null

// let 
// const pageEvent = new Event

class PageEvent extends Event{
	addPage(path,page,isDefault=false){
		let {attributes : props} = page
		let component = page['default']
		if(isDefault){
			for(let k in _pages){
				_pages[k].isDefault = false
			}
		}
		_pages[path] = {component,isDefault,props}
		// if(!_current && isDefault){
		// 	_current = _pages[path]
		// }
	}

	setDefaultPage(path){
		for(let k in _pages){
			_pages[k].isDefault = (k === path)
		}
	}

	getPage(path){
		return _pages[path] || null
	}

	getDefaultPage(){
		for(let k in _pages){
			if(_pages[k].isDefault){
				return _pages[k]
			}
		}
		return null
	}

	getCurrentPage(){
		return _current || null
	}

	setCurrentPage(path){
		_current = _pages[path]
	}

}

const pageEvent = new PageEvent

export default pageEvent