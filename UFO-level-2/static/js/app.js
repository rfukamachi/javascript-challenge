/*********************************************************/
/*********************************************************/
// UFO LEVEL 2
/*********************************************************/
/*********************************************************/

// from data.js
/*********************************************************/
var tableData = data;

/*********************************************************/
// retrieve references to elements of the html page:
/*********************************************************/
var filterButton = d3.select(".btn");
var tbody = d3.select("tbody");


/*********************************************************/
// retrieve all of the input fields:
/*********************************************************/
// DTM: date time input field:
var inputDate = d3.select("#datetime");
var inputCity = d3.select('#city');
var inputState = d3.select('#state');
var inputCountry = d3.select('#country');
var inputShape = d3.select('#shape');


/*********************************************************/
// FUNCTION: Display the full table without filters
/*********************************************************/
function displayFullTable() {
    // clear the table before refilling it with data
    tbody.html("");
    // use d3 to append 1 cell per report value:
    tableData.forEach((report) => {
        // console.log(report);
        var trow = tbody.append('tr');
        Object.entries(report).forEach(([key, value]) => {
            // console.log(key, value);
            var tcell = trow.append('td');
            tcell.text(value);
        });
    });
};



/*********************************************************/
//display full table when first opening the page:
/*********************************************************/
displayFullTable();



/*********************************************************/
//handler to filter the list accordingly once the filter button is clicked:
/*********************************************************/
function handleFilterClick() {
    
    // retrieve the value(s) from the input fields:
    var newDate = inputDate.property('value');
    var newCity = inputCity.property('value').toLowerCase();
    var newState = inputState.property('value').toLowerCase();
    var newCountry = inputCountry.property('value').toLowerCase();
    var newShape = inputShape.property('value').toLowerCase();


    // if no entry in any of the fields:    
    if (!newDate && !newCity && !newState && !newCountry && !newShape ) {
        displayFullTable();
    } 

    //otw display the filtered table:
    else {
        if (newDate) {
            var filteredDate = tableData.filter(siting => siting.datetime === newDate);
        } else {
            var filteredDate = tableData
        }

        if (newCity) {
            var filteredCity = filteredDate.filter(siting => siting.city.toLowerCase() === newCity);
        } else {
            var filteredCity = filteredDate
        }

        if (newState) {
            var filteredState = filteredCity.filter(siting => siting.state.toLowerCase() === newState);
        } else {
            var filteredState = filteredCity
        }

        if (newCountry) {
            var filteredCountry = filteredState.filter(siting => siting.country.toLowerCase() === newCountry);
        } else {
            var filteredCountry = filteredState
        }

        if (newShape) {
            var filteredShape = filteredCountry.filter(siting => siting.shape.toLowerCase() === newShape);
        } else {
            var filteredShape = filteredCountry
        }

        // clear the table before refilling it with filtered data
        tbody.html("");
        // populate the table:
        filteredShape.forEach((report) => {
            trow = tbody.append('tr');
            Object.entries(report).forEach(([key, value]) => {
                tcell = trow.append('td');
                tcell.text(value);
            });
        });

        //debug stmt:
        console.log(filteredShape);
    }
};


/*********************************************************/
// Call the filter function when filter button is clicked
/*********************************************************/
filterButton.on('click', handleFilterClick);


/*********************************************************/
// Use D3 to prevent the page from reloading: 
/*********************************************************/
var form = d3.select('form');
form.on('submit', () => d3.event.preventDefault())
