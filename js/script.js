function getDepositInput(getInput){
    const depositInput = document.getElementById(getInput);
    const depositAmount = depositInput.value;
    // clear deposit input field
    depositInput.value = '';
    return depositAmount;
}
function updateTotalField(totalFieldID, depositAmount){
    const depositTotal = document.getElementById(totalFieldID);
    const oldDepositTotal = depositTotal.innerText;
    const newDepositTotal = parseFloat(oldDepositTotal) + parseFloat(depositAmount);
    depositTotal.innerText = newDepositTotal;
}
function updateBalance(remainingAmount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    const oldBalanceTotal = balanceTotal.innerText;
    if(isAdd == true){
        balanceTotal.innerText = parseFloat(oldBalanceTotal) + parseFloat(remainingAmount);
    }
    else{
        balanceTotal.innerText = parseFloat(oldBalanceTotal) - parseFloat(remainingAmount);
    }
}

document.getElementById('deposit-button').addEventListener('click', function(){
    // get the amount deposited
    const depositAmount = getDepositInput('deposit-input');
    if(depositAmount > 0){
    updateTotalField('deposit-total', depositAmount);
    updateBalance(depositAmount, true);
    }
    else{
    alert('Please, Input some valid Number');
    }
})

// handle withdraw event havedler 
document.getElementById('withdraw-button').addEventListener('click', function(){
    // get withdraw box
    const withdrawAmount = getDepositInput('withdraw-input');

    const balanceTotal = document.getElementById('balance-total').innerText;
    if(withdrawAmount > 0 && parseFloat(balanceTotal) > withdrawAmount){
    updateTotalField('withdraw-total', withdrawAmount);
    updateBalance(withdrawAmount, false);
    }
    else{
    alert('Please, Input some valid Number');
    }
})