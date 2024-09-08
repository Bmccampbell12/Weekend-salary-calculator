onReady();

function onReady() {
  console.log('Javascript is working!');
}

let tableBody = document.getElementById("table")











function clearFields(event){
  let parentRow = event.target.parentElement
  parentRow.remove()
}



function submitText(){
  let clearFields = `<button onClick="clearFields(event)">Clear Fields</button>`

  let firstNameInput = document.getElementById("firstNameInput").value;
  let lastNameInput = document.getElementById("lastNameInput").value;
  let idInput = document.getElementById("firstNameInput").value;
  let titleInput = document.getElementById("firstNameInput").value;
  let annualSalaryInput = document.getElementById("firstNameInput").value;
 



  tableBody.innerHTML += `<tr><td>${firstNameInput}</td><td>${lastNameInput}</td><td>${idInput}</td><td>${titleInput}</td><td>${annualSalaryInput}</td>${clearFields}</tr>`
  (event).preventDefault();
} 