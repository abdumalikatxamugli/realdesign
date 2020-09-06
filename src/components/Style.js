const Style = (ref) => {
	const submitStyle=()=>{
		const event= new Event('style_changed');
		event.ref=ref;
		event.style=textEditor.value;
		document.dispatchEvent(event);
	}
	let styler=document.createElement('div');
	let textEditor=document.createElement('textarea');
	textEditor.id='style_editor';
	textEditor.rows=5;
	textEditor.cols=10;
	textEditor.placeholder="css here";
	
	let button=document.createElement('button');
	button.innerHTML="save";
	button.classList.add('styleButton');
	button.onclick=submitStyle;
	styler.appendChild(textEditor);
	styler.appendChild(button);

	return styler;
}

export default Style;