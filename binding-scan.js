var bindings = {};

//Noter element using the controller
Array.prototype.slice.call(element.querySelectorAll('[ng-bind]'))
	.map(function (element) {
		var boundValue = element.getAttribute('ng-bind');

		if(!bindings[boundValue]) {
			bindings[boundValue] = {
				boundValue: boundValue,
				elements: []
			}
		}


		bindings[boundValue].elements.push(element);
	});
