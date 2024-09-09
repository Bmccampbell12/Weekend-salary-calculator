onReady();

function onReady() {
  console.log('Javascript is working!');
}



let tableBody = document.getElementById("table")



function clearFields(event) {
  let parentRow = event.target.parentElement;   // deleting function: will clear fields 
  parentRow.remove()
}
 let inputs = parentRow.querySelectorAll('input, select');
  
  
  // inputs.forEach(input => {
  //   if (input.type==='checkbox' || input.type === 'radio') {
  //       input.checked = false;
  //     }else{
  //       input.value = ';'
  //     }
      
  // });


let clearFields = `<button onClick="clearFields(event)">Clear Fields</button>`

function submitText(){
  //let clearFields = `<td onClick="clearFields(event)">Clear Fields</td>`
  

  let firstNameInput = document.getElementById("firstNameInput").value;
  let lastNameInput = document.getElementById("lastNameInput").value;
  let idInput = document.getElementById("idInput").value;
  let titleInput = document.getElementById("titleInput").value;
  let annualSalaryInput = document.getElementById("annualSalaryInput").value;
 





} 

tableBody.innerHTML += `<tr><td>${firstNameInput}</td><td>${lastNameInput}</td><td>${idInput}</td><td>${titleInput}</td><td>${annualSalaryInput}</td>${clearFields}</tr>`
  (event).preventDefault();









//  tableBody.innerHtml += `<tr class="table-row">
                                                    
//  <td>${firstNameInput}</td>
//  <td>${lastNameInput}</td>
//  <td>${idInput}</td>                      
//  <td>${titleInput}</td>
//  <td>${annualSalaryInput}</td></tr>`;
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