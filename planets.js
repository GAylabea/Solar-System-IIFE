var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
// planets.forEach(outputPlanet);
// console.log(planets);

//  Use the forEach method to add the name of each planet
//  to a div element in your HTML with an id of "planets".
// */what the hell is this? 
// var el = function outputPlanet(element, index, array) {
//   document.getElementById('planets[' + index + '] = ' + getElementById); 

var el = document.getElementById("planets");
planets.forEach(function(planet) {   
  el.innerHTML += planet + "<br>"; 
}); 
 
// Use the map method to create a new array where the first letter of each planet is capitalized

var capitalLetter = planets.map(function(planet) {
  return planet.charAt(0).toUpperCase() + planet.slice(1);
});
console.log(capitalLetter, "Here's all caps!"); 

// // var planetCap = planets.map(function(planet) { 

// // Use the filter method to create a new array that contains planets with the letter 'e'
var planetE = planets.filter(
  function(planet) {
  return planet.indexOf("e") !== - 1;
});
console.log(planetE);

// OR use return planet.includes("e"); in line 28 

// Use the reduce method to create a sentence from the words in the following array - DID I DO THIS ONE RIGHT??!?!?!?!

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
var sum = words.reduce(function(prev, curr) {
  return prev + " " + curr + " ";
  return previousValue + currentValue;
});
console.log(sum);
