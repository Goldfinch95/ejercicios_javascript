const inpFirstNumber = document.getElementById("input__first-number");
const inpSecondNumber = document.getElementById("input__second-number");
const btnSend = document.getElementById("btn__submit");
const ulResult = document.getElementById("ul__result");


const getInputsValues = ()=>{
    const firstNumber = Number(inpFirstNumber.value);
    const secondNumber = Number(inpSecondNumber.value);
    return {firstNumber,secondNumber}
}

const addNumbers = (firstNumber, secondNumber)=>{
    const addResult = firstNumber + secondNumber;
    return addResult
}


btnSend.addEventListener('click', ()=>{
    const {firstNumber, secondNumber} = getInputsValues();
    console.log(firstNumber, secondNumber);
    
})