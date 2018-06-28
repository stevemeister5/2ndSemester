///Note ctrl is the controller instance
var proxy = new Proxy(ctrl, {
	set: function (target, prop, value) {
		var bind = bindings[prop];
		if(bind) {
			//Update each DOM element bound to the property
			bind.elements.forEach(function (element) {
				element.value = value;
				element.setAttribute('value', value);
			});
		}
		return Reflect.set(target, prop, value);
	}
})