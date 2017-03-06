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
	var flatTotal = priceData.basePrice;
	var fixedMarkUp = priceData.basePrice * 0.05;
	flatTotal += fixedMarkUp;

	//for each worker, add 1.2% markup
	var numPeopleAdj = flatTotal * 0.012;
	numPeopleAdj = numPeopleAdj * priceData.numberOfPeople;


	//markup for pharmaceuticals 7.5%
	if (priceData.materialType === "drugs") {
		markUpPrice = flatTotal + flatTotal * 0.075;
	}

	//markup for food 13%
	else if (priceData.materialType === "food") {
		markUpPrice = flatTotal + flatTotal * 0.13;

	}
	//markup for electronics 2%
	else if (priceData.electronics === "electronics") {
		markUpPrice = flatTotal + flatTotal * 0.02;

	}
	else {
		markUpPrice = flatTotal;
	}

	//format double to currency
	function moneyFormat(n, currency) {
		return currency + " " + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
	}

	totalPrice = numPeopleAdj + markUpPrice;
	totalPrice = moneyFormat(totalPrice, "$");
	console.log(totalPrice);

	priceData.basePrice = moneyFormat(priceData.basePrice, "$");
	console.log(priceData.basePrice);

	//output
	output += "Example " + priceData.exampleNum + ": <br>";
	output += "-------------- <br>";
	output += "Input: " + priceData.basePrice + ", " + priceData.numberOfPeople + " " + personPlural + ', ' + priceData.materialType + "<br>";
	output += "Output: " + totalPrice;

	return output;
}
