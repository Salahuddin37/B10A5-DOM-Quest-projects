
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
// Modal Section------------------
    const modal = document.getElementById('my_modal_5');
    modal.showModal();

// Noakhali History Section--------------
    addHistory(noakhaliInputValue, "Donate for Flood at Noakhali, Bangladesh");
    
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
// Modal Section------------------
        const modal = document.getElementById('my_modal_5');
        modal.showModal();

// Feni History Section--------------
        addHistory(feniInputValue, "Donate for Flood Relief in Feni,Bangladesh");
    }
    else{
        alert('Invalid Input');
    }
})

// Quota Movement Section -----------------------------------Quota Movement
document.getElementById('quota-btn')
.addEventListener('click', function(){
    

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
// Modal Section------------------
        const modal = document.getElementById('my_modal_5');
        modal.showModal();
// Quota History Section--------------
        addHistory(quotaInput, "Aid for Injured in the Quota Movement");
        
    }
    else{
        alert('Invalid Input')
    }

})


// Button design section---------
document.getElementById("history-btn").addEventListener('click', function(){
    toggleSection("history-btn", "donation-btn", "sections", "history-list");
});

document.getElementById('donation-btn').addEventListener('click', function(){
    toggleSection("donation-btn", "history-btn", "history-list", "sections");
});

// home html button link-----
homeBlogBtn("blog-btn","home.html");
    

