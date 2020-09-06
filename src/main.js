import route from './kernel/route';
import getTree from './helpers/getTree';
import buildStyle from './helpers/buildStyle';
import Tree from './components/Tree';
import Style from './components/Style';
import TextEditor from './components/TextEditor';

// controllers


const drag_controller = (ev) =>{
	ev.dataTransfer.setData("text", ev.target.id);
 
}



const dragover_controller = (ev) =>{
	ev.preventDefault();
}

const drop = (ev) =>{
	ev.preventDefault();
	let tagName=document.getElementById(ev.dataTransfer.getData('text')).dataset.tag;
	let element=document.createElement(tagName);
	
	ev.target.appendChild(element);
	const event=new Event('tree_change');
	document.dispatchEvent(event);
}


const reflect_changes = (ev) =>{
	const root=document.getElementById('website');
	const vTree=getTree(root.children);
	const tree=Tree(vTree);
	document.getElementById('tree').innerHTML="";
	document.getElementById('tree').appendChild(tree);
}

const style_editor = (ev) =>{
	const box=document.getElementById('styling');
	box.innerHTML="";
	box.appendChild(Style(ev.ref));
}

const style_changed = (ev) =>{
	let elem=ev.ref;
	let style=buildStyle(ev.style);
	for(let k in style ){
		elem.style[k.trim()]=style[k].trim();
	}

}

const text_editor = (ev) =>{
	const box=document.getElementById('styling');
	box.innerHTML="";
	console.log("text");
	box.appendChild(TextEditor(ev.ref, 'text_changed'));
}

const text_changed =(ev)=>{
	
	ev.ref.innerHTML=ev.text;
}

const class_editor = (ev)=>{
	const box=document.getElementById('styling');
	box.innerHTML="";
	box.appendChild(TextEditor(ev.ref, 'class_changed'));
}

const class_changed = (ev)=>{
	let classes=ev.text.split(' ');
	for(const c of classes){
			ev.ref.classList.add(c);
	}
	
}

const download=()=>{
	let html=document.getElementById('website').innerHTML;
	let css=document.getElementById('style').innerHTML;
	let file=css+html;
	console.log(file);
	var textFileAsBlob = new Blob([file], {type:'text/plain'}); 
    	var downloadLink = document.createElement("a");
    	downloadLink.download = 'realdesign.html';
    	downloadLink.innerHTML = "Download File";
    	if (window.webkitURL != null)
    	{
    		// Chrome allows the link to be clicked
    		// without actually adding it to the DOM.
    		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    	}
    	else
    	{
    		// Firefox requires the link to be added to the DOM
    		// before it can be clicked.
    		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    		downloadLink.onclick = destroyClickedElement;
    		downloadLink.style.display = "none";
    		document.body.appendChild(downloadLink);
    	}
    
    	downloadLink.click();
}

const save_custom_css=(ev)=>{
	const css=document.getElementById('custom_css').value;
	console.log(css);
	document.getElementById('style').innerHTML=css;
}
route(document.getElementsByClassName('element'), 'dragstart', drag_controller )

route(document.getElementById('website'), 'dragover', dragover_controller )

route(document.getElementById('website'), 'drop', drop )

route(document, 'tree_change', reflect_changes )

route(document, 'style_editor', style_editor )

route(document, 'style_changed', style_changed )

route(document, 'text_editor', text_editor )

route(document, 'text_changed', text_changed )

route(document, 'class_editor', class_editor )

route(document, 'class_changed', class_changed )

route(document.getElementById('save_custom_css'), 'click', save_custom_css )

route(document.getElementById('download'), 'click', download )
