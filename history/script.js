// when the page loads the function is executed
window.onload = loadTipList();

// funciton that loads the data stored in localStorage and displays the value.
function loadTipList() {
  if (localStorage.getItem("tipHistory") === null){
    document.getElementById("noHistory").innerHTML="YOU HAVE NO HISTORY"
  } else{
  const listElementFromLocalStorage = JSON.parse(localStorage.getItem('tipHistory'));
  const listElement = document.querySelector('.historyList');
  listElementFromLocalStorage.forEach(element => {
    const listItemElement = document.createElement('li');
    listItemElement.textContent = element;
    listElement.appendChild(listItemElement)
  });
  
}
}