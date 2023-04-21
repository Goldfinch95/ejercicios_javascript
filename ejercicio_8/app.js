const inpNumber = document.getElementById("input__number");
const btnSend = document.getElementById("btn__submit");



const getInputValue = ()=>{
    const number = Number(inpNumber.value)
    return number
}

const multiplyTheNumber = (numberValue)=>{
    for(i = 0 ; i <= 10; i++){
        document.write(`${numberValue} x ${i} = ${i * numberValue}<br>`);
    }
}


btnSend.addEventListener("click", ()=>{
    const numberValue = getInputValue();
    multiplyTheNumber(numberValue);
})