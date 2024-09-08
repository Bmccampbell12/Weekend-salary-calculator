onReady();

function onReady() {
  console.log('Javascript is working!');
}

let tableBody = document.getElementById("table")

















function submitText(){
  let deleteButton = `<td onClick="deleteAffirmation(event)">❌</td>`
  let formAffirmation = document.getElementById("affirmation").value  
  let formAuthor = document.getElementById("Author").value   
  tableBody.innerHTML +=   `<tr><td>${formAffirmation}</td><td>${formAuthor}</td>${deleteButton}</tr>`
  event.preventDefault();
} 