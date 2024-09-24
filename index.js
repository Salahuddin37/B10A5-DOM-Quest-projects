
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
    const historyItem = document.createElement("div");
    historyItem.className = "bg-white w-full h-[100px] border border-gray-300 rounded-lg my-6";

    historyItem.innerHTML =`
    <p class="text-lg font-semibold py-3 px-3">${noakhaliInputValue} Taka is Donated for Donate for Flood at Noakhali, Bangladesh</p>
    <p class="px-4 py-1">Date: ${new Date().toString()} </p>
    
    `
    const historyContainer = document.getElementById('history-list');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
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
        const historyItem = document.createElement("div");
        historyItem.className =  "bg-white w-full h-[100px] border border-gray-300 rounded-lg my-6";

        historyItem.innerHTML = `
        <p class="text-lg font-semibold py-3 px-3">${feniInputValue} Taka is Donated for Donate for Flood Relief in Feni,Bangladesh </p>
        <p class="px-4 py-1">Date: ${new Date().toString()} </p>
        
        `
        const historyConatiner= document.getElementById('history-list');
        historyConatiner.insertBefore(historyItem, historyConatiner.firstChild);

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
        const historyContainer = document.getElementById('history-list');
        const historyItem = document.createElement('div');
        historyItem.className = "bg-white w-full h-[100px] border border-gray-300 rounded-lg my-6";

        historyItem.innerHTML = `
        <p class="text-lg font-semibold py-3 px-3"> ${quotaInput} Taka is Donated for Aid for Injured in the Quota Movement </p>
        <p class="px-4 py-1"> Date: ${new Date().toString()} </p>
        `
        const historyConatiner = document.getElementById('history-list');
        historyConatiner.insertBefore(historyItem, historyConatiner.firstChild);
        console.log('History item added:', historyItem);
    }
    else{
        alert('Invalid Input')
    }

})


// Button design section----------------------------------------btn design
const historyBtn = document.getElementById('history-btn');
const donationBtn = document.getElementById('donation-btn');

historyBtn.addEventListener('click', function(){
    historyBtn.classList.add("bg-lime-400", "hover:bg-lime-400");
    donationBtn.classList.remove("bg-lime-400", "hover:bg-lime-400");

    document.getElementById('sections').classList.add("hidden");
    document.getElementById('history-list').classList.remove('hidden');  
    console.log('History button clicked, sections hidden, history shown'); 
});

donationBtn.addEventListener('click', function(){
    donationBtn.classList.add("bg-lime-400", "hover:bg-lime-400");
    historyBtn.classList.remove("bg-lime-400", "hover:bg-lime-400");

    document.getElementById('sections').classList.remove("hidden");
    document.getElementById('history-list').classList.add("hidden");
})