const inpName = document.getElementById("input__name");
const btnSend = document.getElementById("btn__send");
const ulListName = document.getElementById("ul__list");

const getInputsValues = ()=>{
    const valuesName = inpName.value
    return valuesName
}



btnSend.addEventListener("click", ()=>{
    const valueName = getInputsValues();
    //*localStorage permite acceder a la memoria local de la web. 
    //*la propiedad setItem permite almacenar los datos del tipo string, necesita de dos datos, el primero la clave donde se almacenan esos datos y el segundo los datos string que se van a almacenar.
    const oldNames = localStorage.getItem('names');
    localStorage.setItem('names',  `${valueName},${oldNames}`);
    ulListName.innerHTML = localStorage.getItem('names');
    //*la propiedad getItem permite obtener los datos que estan almacenados en la memoria local de la pagina. necesita unicamente de la clave.*/
})

ulListName.innerHTML = localStorage.getItem('names');