// global variable
let totalAmount

//when the page is loaded the function executes
window.onload = () =>
    {
        document.querySelector('#calculate').onclick = calculateTip;
        document.querySelector('#erase').onclick = clearInterval;
        document.querySelector('#save').onclick = save;
    }

function calculateTip() {
    let amount = document.querySelector('#amount').value;
    let persons = document.querySelector('#persons').value;
    let service = document.querySelector('#services').value;
  
    console.log(service);
  
    if (amount === '' && service === 'Select') {
        alert("Please enter valid values");
        return;
    }
  
    if (persons === '1'){
        document.querySelector('#each').style.display = 'none'}
    else{
        document.querySelector('#each').style.display = 'block'};
  
    let total = (amount * service) / persons;
    total = total.toFixed(2);
    totalAmount = total;
  
    document.getElementById('save').innerText="Save"
    document.querySelector('.tip').style.display = 'flex';
    document.querySelector('#total').innerHTML = total;
}



// clears all values introduced
function clearInterval() {
    document.querySelector('#amount').value="";
    document.querySelector('#persons').value="";
    document.querySelector('#services').value="Select";
    document.querySelector('.tip').style.display = 'none';
}

// saves the value in the history page
function save(){
    if((localStorage.getItem("tipHistory") === null)){
        let tipValue = [];
        localStorage.setItem("tipHistory",JSON.stringify(tipValue));
    };
        let tipValue = [];
        tipValue = JSON.parse(localStorage.getItem("tipHistory"));
        tipValue.push(totalAmount);
        localStorage.setItem("tipHistory",JSON.stringify(tipValue)); 
document.getElementById('save').innerText="Saved!"
}