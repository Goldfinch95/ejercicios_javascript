const inpNumber = document.getElementById("input__number");
const btnSend = document.getElementById("btn__submit");
const ulResult = document.getElementById("ul__result");


const getInputValue = ()=>{
    const number = Number(inpNumber.value)
    return number
}

const checkIfItIsEvenOrOdd = (numberValue)=>{
    if(numberValue % 2 === 0){
        ulResult.innerHTML = `el numero ${numberValue} es par`;
    }
    else if(numberValue % 2 !== 0){
        ulResult.innerHTML = `el numero ${numberValue} es impar`;
    }
}


btnSend.addEventListener("click", ()=>{
    const numberValue = getInputValue();
    checkIfItIsEvenOrOdd(numberValue);
})