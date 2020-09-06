import Tree from './Tree';

const Node = (node) =>{

	const deleteNode=()=>{
		node.ref.parentNode.removeChild(node.ref);
		const event=new Event('tree_change');
		document.dispatchEvent(event);
	}


	const triggerStyleEditor=()=>{
		const event=new Event('style_editor');
		event.ref=node.ref;
		document.dispatchEvent(event);
	}
	const triggerTextEditor=()=>{
		const event=new Event('text_editor');
		event.ref=node.ref;
		document.dispatchEvent(event);
	}
	const classListTrigger=()=>{
		const event=new Event('class_editor');
		event.ref=node.ref;
		document.dispatchEvent(event);
	}

	const li=document.createElement('li');
	li.innerHTML=node.tagName;

	// delete button
	const deleteButton=document.createElement('button');
	deleteButton.innerHTML='D';
	deleteButton.onclick=deleteNode;
	deleteButton.classList.add('delete');
	li.appendChild(deleteButton);

	// style button
	const style=document.createElement('button');
	style.innerHTML='S';
	style.onclick=triggerStyleEditor;
	style.classList.add('stylist');
	
	// innerHTML

	const textEditor=document.createElement('button');
	textEditor.innerHTML='T';
	textEditor.onclick=triggerTextEditor;
	textEditor.classList.add('text');
	

	// attributes

	const attrs=document.createElement('button');
	attrs.innerHTML='C';
	attrs.onclick=classListTrigger;
	attrs.classList.add('attrs');
	

	// container
	const container=document.createElement('div');
	container.classList.add('actions');
	container.appendChild(deleteButton);
	container.appendChild(textEditor);
	container.appendChild(style);
	container.appendChild(attrs);

	li.appendChild(container);

	if(node.children!==undefined && node.children.length!==0){
		li.appendChild(Tree(node.children));
	}
	return li;
}

export default Node;