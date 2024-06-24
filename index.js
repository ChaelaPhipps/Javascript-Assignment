function calculateInterest() {
    const principalAmount = parseFloat(document.getElementById('principalAmount').value);
    const annualInterestRate = parseFloat(document.getElementById('annualInterestRate').value);
    const numYears = parseInt(document.getElementById('numYears').value);

    if (isNaN(principalAmount) || principalAmount <= 0 || isNaN(annualInterestRate) || annualInterestRate < 0 || isNaN(numYears) || numYears <= 0) {
        alert('Please enter valid details');
        return;
    }

      const interestAccrued = (principalAmount * annualInterestRate * numYears) / 100;
    const totalAmount = principalAmount + interestAccrued;
    
       
    document.getElementById('interestAccrued').innerText = interestAccrued.toFixed(2);
    document.getElementById('totalAmount').innerText = totalAmount.toFixed(2);

    function resetFields() {
        document.getElementById('principalAmount').value = '';
        document.getElementById('annualInterestRate').value = '';
        document.getElementById('numYears').value = '';
        document.getElementById('interestAccrued').innerText = '';
        document.getElementById('totalAmount').innerText = '';
    }

    document.getElementById('resetButton').addEventListener('click', resetFields);
}

