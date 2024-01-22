function calculate(){

    console.log("button works");

    const billAmountInput = document.getElementById('billAmount');
    const serviceRatingSelect = document.getElementById('serviceRating');
    const splitCountInput = document.getElementById('splitCount');
    const mealTypeSelect = document.getElementById('mealType');

    
    const tipAmount = document.getElementById('tipAmount');
    const totalAmount = document.getElementById('totalAmount');
    const amountPerPerson = document.getElementById('amountPerPerson');

    const billAmount = parseFloat(billAmountInput.value);
    const serviceRating = parseInt(serviceRatingSelect.value);
    const splitCount = parseFloat(splitCountInput.value);
    const mealType = mealTypeSelect.value;

    console.log(splitCount);

    if(isNaN(billAmount) || isNaN(serviceRating) || isNaN(splitCount)){
        console.log("invalid input:");
        totalAmount.textContent = "Please Enter a Valid Number";
        tipAmount.textContent = "";
        amountPerPerson.textContent = "";
        return;


    }
    let tip = 0;
    switch(serviceRating){
        case 1:
            tip = billAmount * 0.05;
            break;
        case 2:
            tip = billAmount * 0.10;
            break;
            case 3:
            tip = billAmount * 0.15;
            break;
        case 4:
            tip = billAmount * 0.20;
            break;
            
    }
    let totalPayable = billAmount + tip;
    
    if(mealType === "dineer")
    {
        tip += 5;
        totalPayable += 5;
    }

    
    let totalPayablePerPerson = totalPayable / splitCount;

    tipAmount.textContent = `Tip: ${tip.toFixed(2)}`;
    totalAmount.textContent =  `Total Amount: ${totalPayable.toFixed(2)}`;
    amountPerPerson.textContent =  `Amount Per Person: ${totalPayablePerPerson.toFixed(2)}`;

}


document.getElementById('calculateButton').addEventListener('click', calculate);