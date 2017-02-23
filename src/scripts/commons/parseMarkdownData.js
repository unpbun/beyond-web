class Item {

	constructor(){
		this.menu = ''
		this.component = null
		this.children = []
	}

	addChild(item){
		this.children.push(item)
	}
}




export default function parseMarkdownData(data={}){
	const exports = data.exports || []
	const menus = data.menus || []
	let list = []
	let len = Math.min(exports.length, menus.length)
	for(let i = 0; i < len; i++){
		let item = new Item
		item.menu = menus[i]
		list.push(item)
		if(typeof exports[i] === 'function'){
			item.component = exports[i]
		}else{
			item.children = parseMarkdownData(exports[i])
		}
	}
	return list
	
}