const inpNumber = document.getElementById("input__number");
const btnSend = document.getElementById("btn__send");
const ulResults = document.getElementById("ul__result");

let numbers = [];
let total = 0;



const getInputsValues = ()=>{
    const number = Number(inpNumber.value);
    numbers.push(number)
}

const addUserNumbers = ()=>{
    
    for(i=0; i < numbers.length; i++){
        
    }
    console.log(total)
}
/*
const showResults = (result)=>{
    ulResults.innerHTML = `La suma de los números da: ${result}`
}*/


btnSend.addEventListener("click", ()=>{
    getInputsValues();
    addUserNumbers();
    
    //const numberValue = getInputsValues();
    //const result = addUserNumbers(numberValue, click);
    //showResults(result);
})