/*
* Search bar functionality
*
*/

function searchCounties(){
	var allCounties = [];
	var allFips = [];
	d3.csv("DataNeeded.csv", function(error, data){

		//Grabs all the counties and states
		for(var i=0; i<data.length; i++){
			allCounties[i] = data[i]["County"];
			allFips[i] = data[i]["FIPS"];
			allFips[i].county = data[i]["County"];
			allFips[i].state = data[i]["State"];

		}			

		if(error) throw error;

		var field = document.getElementById("search-field");
		var county = field.value;
		//dropdown is already a variable holding the selected state

		var index = allCounties.indexOf(county);
		console.log(index);
		//if typed thing is not in the array of all counties
		if(index<=-1 || county == ""){
			alert("Sorry, that is not a valid county name.");
		}else{ //but if it is in the set...
			if(dropdown.length < 2){
				alert("Please choose a state.");
			}else{

				var fips;
				//get the fips of the correct combo of county name and state
				//get set of fips from state selection
				var countyFromState = countiesMap.get(dropdown);

				//if(countyFromState.indexOf(county) <=-1){
					if(false){
					alert("Sorry, that county is not in this state");
				}else{
			
				//get set of fips from county selection
				var fipsFromCounty = cntyFipsMap.get(county);

				//find the fips that is in both
				for(var i=0; i<fipsFromCounty.length; i++){
					if(countyFromState.indexOf(fipsFromCounty[i]) > -1){
						fips = fipsFromCounty[i];
					}
				}
					clicked(fips);
				}

			}
		}


	});//end of data function
}