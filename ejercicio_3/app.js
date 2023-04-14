const inpNumber = document.getElementById("input__number");
const btnSend = document.getElementById("btn__send");
const ulResults = document.getElementById("ul__result");

let numbers = [];




const getInputsValues = ()=>{
    const number = Number(inpNumber.value);
    numbers.push(number)
}

const addUserNumbers = ()=>{
    let total = 0;
    let promedio = 0;
    for(i=0; i < numbers.length; i++){
        if(numbers[i] < 0){
            break
        }
        else{
            total = total + numbers[i];
            promedio = promedio + numbers[i] / numbers.length
        }
    }
    return {total, promedio}
}


const showResults = (result, promedio)=>{
    if(numbers[i]< 0){
    ulResults.innerHTML = `La suma de los números da: ${result} y el promedio es de ${promedio.toFixed(2)}`
}
}


btnSend.addEventListener("click", ()=>{
    getInputsValues();
    const {total, promedio} = addUserNumbers();
    showResults(total, promedio);
})