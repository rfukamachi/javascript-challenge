/*********************************************************/
/*********************************************************/
// UFO LEVEL 1
/*********************************************************/
/*********************************************************/

// from data.js
/*********************************************************/
var tableData = data;


/*********************************************************/
// select the button:
var filterButton = d3.select(".btn");
// DTM: date time input field:
var inputDate = d3.select("#datetime");
// get a reference to the table body:
var tbody = d3.select("tbody");


/*********************************************************/
// Functon to display full table
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
//handler to filter the list accordingly once the button is clicked:
/*********************************************************/
function handleFilterClick() {
    
    // retrieve the value in the input field:
    var newDate = inputDate.property('value');

    // if no entry in date field:    
    if (!newDate) {
        displayFullTable();
    } 

    //otw display the filtered table:
    else {
        // filter the table data based on newDTM
        var filteredTable = tableData.filter(siting => siting.datetime === newDate);

        // clear the table before refilling it with filtered data
        tbody.html("");
        // populate the table:
        filteredTable.forEach((report) => {
            trow = tbody.append('tr');
            Object.entries(report).forEach(([key, value]) => {
                tcell = trow.append('td');
                tcell.text(value);
            });
        });
    }
};


/*********************************************************/
// Call the filter function when filter button is clicked
/*********************************************************/
filterButton.on('click', handleFilterClick);


