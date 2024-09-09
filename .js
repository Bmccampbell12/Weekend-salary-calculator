onReady();

function onReady() {
  //console.log('Javascript is working!');
}
let totalMonthlyCost = 0; 

let tableBody = document.getElementById("table")

let inputs = parentRow.querySelectorAll('input, select');

document.addEventListener(" ", ()=> {
  let form = document.getElementById("employee-form");  //event listener 
  form.addEventListener("submit", submitText);
});

// function clearFields(event) {
//   let parentRow = event.target.parentElement;   // deleting function: will clear fields 
//   parentRow.remove()
// };

function submitText(event) {
  event.preventDefault();  //will hopefully prevent default now!

  let firstNameInput = document.getElementById("firstNameInput").value;
  let lastNameInput = document.getElementById("lastNameInput").value;
  let idInput = document.getElementById("idInput").value;
  let titleInput = document.getElementById("titleInput").value;
  let annualSalaryInput = parseFloat(document.getElementById("annualSalaryInput").value);
                            //will read through the string and parses as much of the input as possibl-->to floating number.
  if (!annualSalary || isNaN(annualSalary)) {   //is annualSalary falsy?
    alert("Must be a valid number.");          //verifies entry is not a number
    return;
  }

  let monthlySalary = annualSalary / 12;   // divides salary by 12 months
  totalMonthlyCost += monthlySalary;  //adding to total
  updateFooter(); //should return the total to the footer

  let tableBody = document.getElementsById("employee-table");    //adds employee to table
  let newRow = document.createElement("tr");

  newRow.innerHTML = `<td>${firstNameInput}</td>
  <td>${lastNameInput}</td>
  <td>${idInput}</td>                      
  <td>${titleInput}</td>
  <td>${annualSalaryInput}</td></tr>`
  
  tableBody.innerHTML += `<tr><td>${firstNameInput}</td><td>${lastNameInput}</td><td>${idInput}</td><td>${titleInput}</td><td>${annualSalaryInput}</td></tr>`;
  //(event).preventDefault();   //Might not be needed.


document.getElementById("firstNameInput").value = "";
document.getElementById("lastNameInput").value = "";
document.getElementById("idInput").value = "";     //Clear input fields
document.getElementById("titleInput").value = "";
document.getElementById("annualSalaryInput").value = "";
}










//  tableBody.innerHtml += `<tr class="table-row">
                                                    
  
//                                                       // Modified row creation to include a class and data attribute
// document.getElementById("clearFields").addEventListener("click", function(event) {     //event listener button even handler for "clear fields"
//   event.preventDefault();


// let tableRows = document.querySelectorAll("table-row");   // selects ALL rows from the table 

//  tableRows.forEach(row => {                                //should iterate over each row and clear its contents
//    row.querySelectorAll("td").forEach(cell => {
//     cell.innerHtml = "";                                  // clears the content of each cell 
//  });
//  });

// function submitText(){
//   let clearFields = `<td onClick="clearFields(event)">Clear Fields</td>`
//   //let clearFields = `<button onClick="clearFields(event)">Clear Fields</button>`
//   let firstNameInput = document.getElementById("firstNameInput").value;
//   let lastNameInput = document.getElementById("lastNameInput").value;
//   let idInput = document.getElementById("firstNameInput").value;
//   let titleInput = document.getElementById("firstNameInput").value;
//   let annualSalaryInput = document.getElementById("firstNameInput").value;
 



  // tableBody.innerHTML += `<tr><td>${firstNameInput}</td><td>${lastNameInput}</td><td>${idInput}</td><td>${titleInput}</td><td>${annualSalaryInput}</td>${clearFields}</tr>`
  // (event).preventDefault();
// } 






// function submitText() {
//   let clearFields = `<button onClick="clearFields(event)">Clear Fields</button>` //creates the event that will clear the input fields

//   let firstNameInput = document.getElementById("firstNameInput").value;
//   let lastNameInput = document.getElementById("lastNameInput").value;
//   let idInput = document.getElementById("firstNameInput").value;
//   let titleInput = document.getElementById("firstNameInput").value;
//   let annualSalaryInput = document.getElementById("firstNameInput").value;




//   tableBody.innerHTML += `<tr><td>${firstNameInput}</td><td>${lastNameInput}</td><td>${idInput}</td><td>${titleInput}</td><td>${annualSalaryInput}</td></tr>`
//     event.preventDefault();
// } 