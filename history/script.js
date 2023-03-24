// when the page loads the function is executed
window.onload = loadTipList();

// Function
function loadTipList() {
  if (
    (localStorage.getItem("tipHistory") === null) ||
    (localStorage.getItem("tipHistory") === '[]')
  ) {
    document.getElementById("noHistory").innerHTML ="YOU HAVE NO HISTORY";
    document.querySelector(".historyList").innerHTML = "";
  } else {
    const listElementFromLocalStorage = JSON.parse(
      localStorage.getItem("tipHistory")
    );
    let listElement = document.querySelector(".historyList");
    listElement.innerHTML = "";
    
    for (let i = 0; i < listElementFromLocalStorage.length; i++) {
      listElement.innerHTML += `<li><p>&bull; ${listElementFromLocalStorage[i]}</p> <button onclick="deleteByIndex(${i})">Delete</button></li>`;
    }

    // Transforming array of strings to array of numbers
    let listElementFromLocalStorageNumbers =
      listElementFromLocalStorage.map(Number);
    // Calculating the total tip amount of the array
    let tipSum = 0;
    for (let i = 0; i < listElementFromLocalStorageNumbers.length; i++) {
      tipSum += listElementFromLocalStorageNumbers[i];
    }
    // Displays the tips sum
    listElement.innerHTML += `<p>Total tip amount: ${tipSum.toFixed(2)}.<p>`;
  }
}
// Deletes the item by its index
function deleteByIndex(index) {
  const listElementFromLocalStorage = JSON.parse(
    localStorage.getItem("tipHistory")
  );
  listElementFromLocalStorage.splice(index, 1);
  localStorage.setItem(
    "tipHistory",
    JSON.stringify(listElementFromLocalStorage)
  );
  loadTipList();
}
