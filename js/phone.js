function updatePhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    // const newPhoneNumber = previousPhoneNumber + 1;
    let newPhoneNumber;
    if(isIncrease){
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else{
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}
function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalPRice = newPhoneNumber * 1200;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPRice;
}



document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber =  updatePhoneNumber(true);
    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();
    //calculate total
    

})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
   const newPhoneNumber =  updatePhoneNumber(false);
   updatePhoneTotalPrice(newPhoneNumber);
   calculateSubTotal();
})