// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};
console.log(myStorage.car["inside"]["glove box"])
var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line
