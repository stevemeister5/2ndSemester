var controllers = {};
var addController = function (name, constructor) {
	//Store controller constructor
	controllers[name] = {
		factory: constructor,
		instances: []
	};


	//Look for elements using the controller
	var element = document.querySelector('[ng-controllers=' + name + ']');
	if (!element){
		return;//No element uses this controller
	}


	//Create a new instance and save it
	var ctrl = new controllers[name].factory;
	controllers[name].instances.push(ctrl);


	//Look for bindings
};

addController('InputController', InputController);