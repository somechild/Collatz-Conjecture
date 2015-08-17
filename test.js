	function t () {

	var x = document.getElementById('n').value;
	var y = x % 2;

	if (y==0) {
		var x = x / 2;
	}
	else {
		var x = x*3 + 1;
		};

	while (x!==1) {
		
		do {
		var x = x / 2;
		var y = x%2;
		}
		while (y==0);
		
		if ((y==1) && (x!==1)){
		var x = x*3 +1;
		var y = x%2
		};
	};

	document.write(x);
	
	}