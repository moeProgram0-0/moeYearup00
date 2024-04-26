document.querySelector('#tip-form').addEventListener('change', function() {
    var bill = Number(document.getElementById('billTotal').value);
    var tip = parseFloat(document.getElementById('tipInput').value);

    // Validation
    if (isNaN(bill) || isNaN(tip)) {
        alert("Please enter valid numbers for the bill amount and tip percentage.");
        return;
    }

    // Display Tip Percentage
    document.getElementById('tipOutput').innerHTML = `${tip}%`;

    var tipValue = bill * (tip / 100);
    var finalBill = bill + tipValue;

    // Display Results
    var tipAmount = document.querySelector('#tipAmount');
    var totalBillWithTip = document.querySelector('#totalBillWithTip');

    tipAmount.value = tipValue.toFixed(2);
    totalBillWithTip.value = finalBill.toFixed(2);

    document.getElementById('results').style.display = 'block';
});