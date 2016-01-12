function t () {

	var x = document.getElementById('n').value;
	var y = x % 2;

	while (x!==1) { // until x is 1, loop --> that way if application crashes, collatz conjecture is false (obvs not a proof)
		if (y==0) { // if even, divide by two
			x = x / 2;
		}
		else if ((y==1) && (x!==1)){ // if odd and not 1, multiple by 3 and add 1
			x = x*3 +1;
		};

		y = x%2;
	};

	document.write(x);
	
}
