const inpBeginningNumber = document.getElementById("input__beginning-number");
const inpEndingNumber = document.getElementById("input__ending-number");
const btnSend = document.getElementById("btn__send");


const getInputsValues =()=>{
    const beginningNumber = Number(inpBeginningNumber.value);
    const endingNumber = Number(inpEndingNumber.value);
    return {beginningNumber, endingNumber}
}

const numberTrial = (beginningNumber,endingNumber) =>{
    for(i = beginningNumber; i <= endingNumber; i++){
        document.write(i + "<br>");
    }
}


btnSend.addEventListener("click", ()=>{
    const {beginningNumber, endingNumber} = getInputsValues();
    numberTrial(beginningNumber, endingNumber);
})