// Smithsonian API example code
// check API documentation for search here: http://edan.si.edu/openaccess/apidocs/#api-search-search

// put your API key here;
const apiKey = "l6fR6U2cj3UzL44xNCaJ31JHe8mF3pd28l0bN1ZH";  

// search base URL
const searchBaseURL = "https://api.si.edu/openaccess/api/v1.0/search";

// Constructing the search query
// const search =  `Flowers AND unit_code:"CHNDM" AND object_type:"Embroidery (visual works)" AND online_media_type:"Images"`;
// const search =  `apollo AND unit_code:"NASM"` + "&start=" + 0 + "&rows=" + 26;
const search =  `unit_code:"NASM"` + "&start=" + 0 + "&rows=" + 745;


// array that we will write into
let myArray = [];


// search: fetches an array of terms based on term category
function fetchSearchData(searchTerm) {
    let url = searchBaseURL + "?api_key=" + apiKey + "&q=" + searchTerm;
    console.log(url);
    window
    .fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    })
}

// create your own array just the data you need
function addObject(objectData) {
  var currentID = objectData.id;
  var currentTitle = objectData.title;
  var objectLink = objectData.content.descriptiveNonRepeating.record_link;
  var index = myArray.length;
  
  myArray[index] = {};
  myArray[index]["title"] = currentTitle;
  myArray[index]["id"] = currentID;
  myArray[index]["link"] = objectLink;
  console.log("object at index", index, myArray[index]);
}

fetchSearchData(search);