const route = (elem, eventName, controller) =>{
	if(HTMLCollection.prototype.isPrototypeOf(elem)){
		for(const e of elem){
			e.addEventListener(eventName, function(event){
				controller(event);
			})
		}
	}else{
		elem.addEventListener(eventName, function(event){
			controller(event);
		})
	}
}

export default route;