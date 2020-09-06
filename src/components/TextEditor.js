const TextEditor=(ref, eventName)=>{
	const submitStyle=()=>{
	const event= new Event(eventName);
		event.ref=ref;
		event.text=textEditor.value;
		document.dispatchEvent(event);
	}
	let box=document.createElement('div');
	let textEditor=document.createElement('textarea');
	textEditor.id='style_editor';
	textEditor.rows=5;
	textEditor.cols=10;
	textEditor.placeholder=eventName+' editor';
	
	let button=document.createElement('button');
	button.innerHTML="save";
	button.classList.add('styleButton');
	button.onclick=submitStyle;
	box.appendChild(textEditor);
	box.appendChild(button);

	return box;
}
export default TextEditor;