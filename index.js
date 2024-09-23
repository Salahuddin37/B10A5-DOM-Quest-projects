
// Noakhali Flood Section----------------------------------------Noakhali Flood

document.getElementById('noakhali-donate-btn')
.addEventListener('click', function(){
    
const noakhaliInputValue = getInputValueById('noakhali-input');
const noakhaliTotalDonateValue = getTextValueById('noakhaliTotalValue');
const floodAmount = getTextValueById('flood-total-amount');

if(!isNaN(noakhaliInputValue) && noakhaliInputValue >0){
    if(floodAmount <= 0){
        alert('Invalid Input');
        return;
    }
    const newValue = noakhaliInputValue + noakhaliTotalDonateValue;
    document.getElementById('noakhaliTotalValue').innerText = newValue;

    const floodNewAmount = floodAmount - noakhaliInputValue;
    document.getElementById('flood-total-amount').innerText = floodNewAmount;
}
else{
    alert('Invalid Input')
}

})

// Feni Flood Section----------------------------------------------Feni Flood
document.getElementById('feni-donate-btn')
.addEventListener('click', function(){
    
    const feniInputValue = getInputValueById('feni-input-value');
    const feniTotalDonateValue = getTextValueById('feni-total-donate-value');
    const floodAmount = getTextValueById('flood-total-amount');
    

    if(!isNaN(feniInputValue) && feniInputValue >0){
        if(floodAmount <= 0){
            alert('Invalid Input');
            return;
        }
        const feniNewValue = feniInputValue + feniTotalDonateValue;
        document.getElementById('feni-total-donate-value').innerText = feniNewValue;

        const floodNewAmount = floodAmount - feniInputValue;
        document.getElementById('flood-total-amount').innerText = floodNewAmount;

    }
    else{
        alert('Invalid Input');
    }
})

// Quota Movement Section -----------------------------------Quota Movement
document.getElementById('quota-btn')
.addEventListener('click', function(){
    console.log('Button Clicked')

    const quotaInput = getInputValueById('quota-input');
    const quotaTotalDonate = getTextValueById('quota-total-donate');
    const floodAmount = getTextValueById('flood-total-amount');

    if(!isNaN(quotaInput) && quotaInput >0){
        if(floodAmount <= 0 ){
            alert('Invlaid Input');
            return;
        }
        const newTotalDonate = quotaInput + quotaTotalDonate;
        document.getElementById('quota-total-donate').innerText = newTotalDonate;

        const newFloodAmount = floodAmount - quotaInput;
        document.getElementById('flood-total-amount').innerText = newFloodAmount;
    }
    else{
        alert('Invalid Input')
    }

})