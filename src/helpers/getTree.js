const getTree=(elem)=>{
	
	const tree=[];
	for(const e of elem){
		tree.push({
			tagName:e.tagName,
			ref:e,
			children:getTree(e.children)
		})
	}
	return tree;
}

export default getTree;