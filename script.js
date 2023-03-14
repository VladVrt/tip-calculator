window.onload = () =>
    //function called when Calculate button is clicked.
    {
        /*calling a function calculateTip
         which will calculate the tip for the bill.*/
        document.querySelector('#calculate').onclick = calculateTip;
        document.querySelector('#erase').onclick = clearInterval;
    }
    
function calculateTip() {
    /*assign values of ID : amount, person and service to 
    variables for further calculations.*/
    let amount = document.querySelector('#amount').value;
    let persons = document.querySelector('#persons').value;
    let service = document.querySelector('#services').value;
  
    console.log(service);
    /*if statement will work when user presses 
          calculate without entering values. */
    //so will display an alert box and return.
    if (amount === '' && service === 'Select') {
        alert("Please enter valid values");
        return;
    }
  
    //checking number of persons 
    if (persons === '1')
    //if there is only one person then we need not to display each.
        document.querySelector('#each').style.display = 'none';
    else
    //if there are more than one person we will display each.  
        document.querySelector('#each').style.display = 'block';
  
    /*calculating the tip by multiplying total-bill and type of
     service; then dividing it by number of persons.*/
    //fixing the total amount up to 2 digits of decimal
    let total = (amount * service) / persons;
    total = total.toFixed(2);
  
    //displaying the tip value 
    document.querySelector('.tip').style.display = 'block';
    document.querySelector('#total').innerHTML = total;
}

function clearInterval() {
    // clears all values introduced
    document.querySelector('#amount').value="";
    document.querySelector('#persons').value="";
    document.querySelector('#services').value="Select";
    document.querySelector('.tip').style.display = 'none';
}