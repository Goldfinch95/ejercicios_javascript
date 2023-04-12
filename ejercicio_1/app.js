const inpFirstNumber = document.getElementById("input__first-number");
const inpSecondNumber = document.getElementById("input__second-number");
const btnSend = document.getElementById("btn__send");
const ulAnswer = document.getElementById("ul__answer");

const getInputsValues = ()=>{
    const firstNumber = Number(inpFirstNumber.value);
    const secondNumber = Number(inpSecondNumber.value);
    return {firstNumber,secondNumber}
}

const getTheLargestNumber = (firstNumber, secondNumber)=>{
    if(firstNumber > secondNumber){
        return firstNumber
    }
    else{
        return secondNumber
    }
}

const getTheSmallestNumber = (firstNumber, secondNumber)=>{
    if(firstNumber < secondNumber){
        return firstNumber
    }
    else{
        return secondNumber
    }
}



btnSend.addEventListener("click", ()=>{
    const {firstNumber,secondNumber} = getInputsValues();
    const answerLargestNumber = getTheLargestNumber(firstNumber,secondNumber);
    const answerSmallerNumber = getTheSmallestNumber(firstNumber,secondNumber)
    ulAnswer.innerHTML = `el numero mas grande es ${answerLargestNumber}<br> el numero mas chico es ${answerSmallerNumber}`
    if(firstNumber == secondNumber){
        ulAnswer.innerHTML = 'Los números son iguales'
    } 
})