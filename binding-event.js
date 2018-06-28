Object.keys(bindings).forEach(function (boundValue) {
	var bind = bindings[boundValue];


	//Listen elements event and update proxy property
	bind.elements.forEach(function (element) {
		element.addEventListener('input', function (event) {
			proxy[bind.boundValue] = events.target.value;
		});
	})
});