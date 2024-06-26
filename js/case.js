/*
1. add event listner to the plus button
2. get the value inside the case number field (input field)
3. convert the number to an integer
4. calculate the new case number
5. set the value to the case number field
 */

function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    // const newCaseNumber = previousCaseNumber + 1;
    let newCaseNumber;
    if(isIncrease === true){
        newCaseNumber = previousCaseNumber + 1;
    }
    else{
        newCaseNumber = previousCaseNumber - 1;
    }
    
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber =  updateCaseNumber(true);
    
    // const caseTotalPrice = newCaseNumber * 59;
    // const caseTotalElement = document.getElementById('case-total');
    // caseTotalElement.innerText = caseTotalPrice;
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
})
document.getElementById('btn-case-minus').addEventListener('click', function(){
    // console.log('minus clicked');
   const newCaseNumber = updateCaseNumber(false);

//    const caseTotalPrice = newCaseNumber * 59;
//    const caseTotalElement = document.getElementById('case-total');
//    caseTotalElement.innerText = caseTotalPrice;
updateCaseTotalPrice(newCaseNumber);
calculateSubTotal();
})