import Node from './Node';

const Tree=(tree)=>{

	let ul=document.createElement('ul');
	for(const node of tree){
		let li=Node(node);
		ul.appendChild(li);
		
	}
	return ul;
}	

export default Tree;