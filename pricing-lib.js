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
	priceData.basePrice = priceData.basePrice + priceData.basePrice * 0.05;

	//markup for pharmaceuticals 7.5%
	if (priceData.materialType === "pharma") {
		markUpPrice = priceData.basePrice + priceData.basePrice * 0.075;
	}
	//markup for food 13%
	else if (priceData.materialType === "food") {
		markUpPrice = priceData.basePrice + priceData.basePrice * 0.13;
	}
	//markup for electronics 2%
	else if (priceData.electronics === "electronics") {
		markUpPrice = bpriceData.basePrice + priceData.basePrice * 0.02;
	}
	else {
		markUpPrice = basePrice;
	}

	//output
	output += "Example " + priceData.exampleNum + ": <br>";
	output += "-------------- <br>";
	output += "Input: " + priceData.basePrice + ", " + priceData.numberOfPeople + " " + personPlural + ', ' + priceData.materialType + "<br>";
	output += "Output: " + markUpPrice;

	return output;
}


