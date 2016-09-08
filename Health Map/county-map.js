
/*
* Draws the choropleth of the United States using topojson
*/
function drawMap(){
var width = 960,
    height = 500;
var path = d3.geo.path();
var svg = d3.select("body").select("#countymap").append("svg")
    .attr("width", width)
    .attr("height", height);
d3.json("/us.json", function(error, topology) {
  if (error) throw error;
  svg.selectAll("path")
      .data(topojson.feature(topology, topology.objects.counties).features)
    .enter().append("path")
      .attr("d", path);
});

}


/**
*Retrieves each county's percentage of obesity data 
*/
function getData(){
    //load data
    d3.csv("health-page.csv", function(error, data){
        for(i=0; i<data.length; i++){
            data[i].fips = data[i]["FIPS"];
            data[i].state = data[i]["State"];
            data[i].county = data[i]["County"];
            data[i].obesity = data[i]["PCT_OBESE_ADULTS10"];
        }
    });
}