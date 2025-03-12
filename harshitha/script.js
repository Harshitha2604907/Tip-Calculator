// script.js

document.getElementById('calculateBtn').addEventListener('click', function() {
    // Get user inputs
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);

    // Check if inputs are valid numbers
    if (isNaN(billAmount) || billAmount <= 0 || isNaN(tipPercentage) || tipPercentage < 0) {
        alert('Please enter valid positive numbers for both bill amount and tip percentage.');
        return;
    }

    // Calculate tip and total
    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalAmount = billAmount + tipAmount;

    // Display results with Indian Rupees (₹)
    document.getElementById('tipAmount').textContent = tipAmount.toFixed(2);
    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
});
