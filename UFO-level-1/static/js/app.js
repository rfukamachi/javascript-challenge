// from data.js
var tableData = data;

// YOUR CODE HERE!

//read in the table from data.js... into tableData...

//format it to display all on html...

//function to filter by date:
//mm/dd/yyyy
function selectDate(date_input) {
    return tableData.datetime === date_input;
}

var new_date_table = tableData.filter(selectDate);



//debug stmts:
console.log(tableData[city]);