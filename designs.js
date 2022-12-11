// Target the submit button 


function clearBox(elementID) {
    document.querySelector('#pixelCanvas').innerHTML = "";
}

function getColor() {
const color = document.querySelector("#colorPicker").value;
return color;
}



const formSubmit = document.querySelector('#submit');
// Add an event listener to the submit button and prevent default
// Get the values of height and width
formSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    const gridHeight = document.querySelector("#inputHeight").value;
    const gridWidth = document.querySelector("#inputWidth").value;
clearBox();
makeGrid(gridHeight, gridWidth);

})

function makeGrid(gridHeight, gridWidth) {
let thisTable = document.querySelector('#pixelCanvas');
for (let i = 1; i <= gridHeight; i++) {
    const newRow = document.createElement('tr');
    for (let j = 1; j <= gridWidth; j++) {
        const newCol = document.createElement('td');
        newRow.appendChild(newCol);
         newCol.addEventListener('click', respondToTheClick);
}
thisTable.appendChild(newRow);
}



// const newEl = document.createElement('tr');
// const newRow = document.createElement('td');
// newEl.appendChild(newRow);
// thisTable.appendChild(newEl);
// Your code goes here!

}



// function respondToTheClick(evt) {
//     console.log('A paragraph was clicked: ' + evt.target.textContent);
// }

// for (let i = 1; i <= gridHeight; i++) {
//     const newRow = document.createElement('tr');
//     for (let j = 1; j <= gridWidth; j++) {
//         const newCol = document.createElement('td');
//         newRow.appendChild(newCol);
// }
// thisTable.appendChild(newRow);
// }

// document.body.appendChild(myCustomDiv);

// myCustomDiv.addEventListener('click', respondToTheClick);