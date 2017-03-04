// PRICING PROBLEMO
// LIBRARY

// accept the base price, with markups, and calculate final cost 
function calcMarkUp(priceData){

	var markUpPrice = 0.0;
	var output = "";
	var personPlural = "person";

	if (priceData.numberOfPeople > 1) {
		personPlural = "people";
	}

	//fixed markup of 5%
	var fixedMarkUp = priceData.basePrice + priceData.basePrice * 0.05;
	//total price count
	var totalPrice = fixedMarkUp;

	//markup for pharmaceuticals 7.5%
	if (priceData.materialType === "pharma") {
		markUpPrice = priceData.basePrice + priceData.basePrice * 0.075;
		totalPrice = markUpPrice;
	}
	//markup for food 13%
	else if (priceData.materialType === "food") {
		markUpPrice = priceData.basePrice + priceData.basePrice * 0.13;
		totalPrice = markUpPrice;
	}
	//markup for electronics 2%
	else if (priceData.electronics === "electronics") {
		markUpPrice = priceData.basePrice + priceData.basePrice * 0.02;
		totalPrice = markUpPrice;
	}
	else {
		markUpPrice = basePrice;
	}

	totalPrice = markUpPrice.toFixed(2);
	priceData.basePrice = priceData.basePrice.toFixed(2);

	//output
	output += "Example " + priceData.exampleNum + ": <br>";
	output += "-------------- <br>";
	output += "Input: " + priceData.basePrice + ", " + priceData.numberOfPeople + " " + personPlural + ', ' + priceData.materialType + "<br>";
	output += "Output: " + totalPrice;

	return output;
}


