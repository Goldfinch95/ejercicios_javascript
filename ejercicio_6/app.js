const inpNumber = document.getElementById("input__number");
const btnSend = document.getElementById("btn__submit");


const getInputValue = ()=>{
    const number = Number(inpNumber.value)
    return number
}

const getDivisors = (numberValue)=>{
    for(i = 1 ; i <= numberValue ; i++){
        if(numberValue % i === 0){
            document.write(i + "<br>")
        }
    }
}


btnSend.addEventListener("click", ()=>{
    const numberValue = getInputValue();
    getDivisors(numberValue);
})