onReady();

function onReady() {
  //console.log('Javascript is working!');
};

document.addEventListener("DOMContentLoaded", ()=> {
  let form = document.getElementById("employee-form");  //event listener 
  form.addEventListener("submit", submitText);
});

let totalMonthlyCost = 0; 

let tableBody = document.getElementById("table")

let inputs = parentRow.querySelectorAll('input, select');

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
  if (!annualSalaryInput || isNaN(annualSalaryInput)) {   //is annualSalary falsy?
    alert("Must be a valid number.");          //verifies entry is not a number
    return;
  }

  let monthlySalary = annualSalaryInput / 12;   // divides salary by 12 months
  totalMonthlyCost += monthlySalary;  //adding to total
  updateFooter(); //should return the total to the footer

  let tableBody = document.getElementById("employee-table"); 
     //adds employee to table
  let newRow = document.createElement("tr");

  newRow.innerHTML = `
  <td>${firstNameInput}</td>
  <td>${lastNameInput}</td>
  <td>${idInput}</td>                      
  <td>${titleInput}</td>
  <td>$${annualSalaryInput.toFixed(2)}</td>
  <td><button class="delete-btn" onClick="deleteRow(this, ${monthlySalary})">Delete</button></td>`;
  

  tableBody.appendChild(newRow);

  document.getElementById("firstNameInput").value = "";
  document.getElementById("lastNameInput").value = "";
  document.getElementById("idInput").value = "";     //Clear input fields
  document.getElementById("titleInput").value = "";
  document.getElementById("annualSalaryInput").value = "";
  }  

function updateFooter() {
  let footer = document.querySelector("footer p");
  footer.textContent = `Total Monthly: $${totalMonthlyCost.toFixed(2)}`;  //updates footer with monthly total
 if (totalMonthlyCost > 20000) {
  footer.classList.add("over-budget");      //Total monthly cost cannot exceed 20K, will add over budget to footer if >20K.
 } else {
  footer.classList.remove("over-budget");
 }
}

function deleteRow(button, monthlySalary) {
  let row = button.parentElement.parentElement;
  row.remove();  // removes employees row
  totalMonthlyCost -= monthlySalary; //Will subtract from total cost
  updateFooter();
}

  

