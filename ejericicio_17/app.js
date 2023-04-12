const inpName = document.getElementById("input__name");
const inpLastName = document.getElementById("input__last-name");
const inpAge = document.getElementById("input__age");
const btnSend = document.getElementById("btn__send");
const ulData = document.getElementById("data");

const getInputsValues = ()=> {
    const valueName = inpName.value;
    const valueLastName = inpLastName.value;
    const valueAge = inpAge.value;
    return {valueName, valueLastName, valueAge}
}

btnSend.addEventListener("click", ()=>{
    const values = getInputsValues();
    if(values.valueName == "" || values.valueLastName == "" || values.valueAge == ""){
        ulData.innerHTML = "Ingrese los datos por favor"
    }
    else{
    ulData.innerHTML = `Tu nombre es: ${values.valueName}<br> Tu apellido es: ${values.valueLastName}<br> Tu edad es de: ${values.valueAge}`;
}
})



