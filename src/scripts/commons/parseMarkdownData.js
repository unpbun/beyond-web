class Menu {

	constructor(){
		this.name = ''
		this.path = ''
		this.component = null
		this.children = []
	}

	addChild(menu){
		this.children.push(menu)
	}
}




export default function parseMarkdownData(data={}){
	const exports = data.exports || []
	let list = []
	for(let i = 0; i< exports.length; i++){
		let item = exports[i]
		let {menuName, menuPath, subMenusName, subMenusPath, exports : subs} = item.defaultProps
		subMenusName = subMenusName || []
		subMenusPath = subMenusPath || [] 
		const menu = new Menu
		menu.name = menuName
		menu.path = menuPath
		for(let j = 0; j < subMenusName.length; j++){
			let subMenu = new Menu
			subMenu.path = subMenusPath[j]
			subMenu.name = subMenusName[j]
			subMenu.component = subs[j] || null
			menu.addChild(subMenu)
		}
		list.push(menu)
	}
	return list
	
}