// Function to clear the table when everything is restored;
function clearBox() {
    document.querySelector('#pixelCanvas').innerHTML = "";
}

// function to get the selected color
function getColor() {
    const color = document.querySelector("#colorPicker").value;
    return color;
}

// On clicking submit, The makeGrid function is called with height and width as parameters
const formSubmit = document.querySelector('#submit');
formSubmit.addEventListener('click', function (e) {
    // Add an event listener to the submit button and prevent default
    e.preventDefault();
    // Get the values of height and width
    const gridHeight = document.querySelector("#inputHeight").value;
    const gridWidth = document.querySelector("#inputWidth").value;
    // Clear the grid before creating a new one
    clearBox();
    makeGrid(gridHeight, gridWidth);
})

// Create grid with height and width
function makeGrid(gridHeight, gridWidth) {
    // Selector for the table element
    let thisTable = document.querySelector('#pixelCanvas');
    // Creating table rows depending on the chosen height
    for (let i = 1; i <= gridHeight; i++) {
    const newRow = document.createElement('tr');
    // Creating extra columns based on table width
    for (let j = 1; j <= gridWidth; j++) {
        // Assigning id to each cell -- Extra functionality for future purposes
        let thisId = i+""+j; // Combination of row index and column index into a string
        const newCol = document.createElement('td');
        newCol.setAttribute('id', thisId);
        // Appending colums to rows
        newRow.appendChild(newCol);
         newCol.addEventListener('click', function(evt) {
            // If background color is not set onclick, set to the color
            if(!newCol.style.backgroundColor) {
                newCol.style.backgroundColor = getColor();
            }
            /* If you set the background color and unset it by clicking again,
            clicking again sets it to current color */
            else if(newCol.style.backgroundColor == '#ffffff' || newCol.style.backgroundColor == 'rgb(255, 255, 255)') {
                newCol.style.backgroundColor = getColor();
            }
            // If color is already set, unset by clicking
            else {
                newCol.style.backgroundColor = '#ffffff';
            }
         });
         
}
// Append rows to the table
thisTable.appendChild(newRow);
}
}
