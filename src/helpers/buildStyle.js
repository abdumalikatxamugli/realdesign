
const buildStyle=(rawStyle)=>{
	let rules=rawStyle.split(';');
	let style={};
	for(const rule of rules){
		if(rule==='')continue;
		style[rule.split(':')[0]]=rule.split(':')[1];
	}
	return style;
}
export default buildStyle;