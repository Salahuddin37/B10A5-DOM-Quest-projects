
function getInputValueById(id){
    return parseFloat(document.getElementById(id).value);
}

function getTextValueById(id){
    return parseFloat(document.getElementById(id).innerText);
}

// Add History section
function addHistory(amount, message){
    const historyItem = document.createElement("div");
    historyItem.className = "bg-white lg:w-full w-[95%] mx-auto lg:h-[100px] h-[160px] border-2 rounded-lg my-6";

    historyItem.innerHTML =`
    <p class="text-lg font-semibold py-3 px-3">${amount} Taka is Donated for ${message}</p>
    <p class="px-4 py-1">Date: ${new Date().toString()} </p>
    
    `
    const historyContainer = document.getElementById('history-list');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
};


// Button design section---------
function toggleSection(historyBtn, donationBtn, hideSection, showSection){
    const historyId = document.getElementById(historyBtn);
    const donationId = document.getElementById(donationBtn);

    historyId.classList.add("bg-lime-400", "hover:bg-lime-400");
    donationId.classList.remove("bg-lime-400", "hover:bg-lime-400");

    document.getElementById(showSection).classList.remove('hidden');
    document.getElementById(hideSection).classList.add("hidden");
}

// home html button -----
function homeBlogBtn(id, filepath){
    document.getElementById(id).addEventListener('click', function(){
        window.location.href = filepath;
    })
}