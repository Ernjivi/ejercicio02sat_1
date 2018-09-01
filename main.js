
function tipCalculator(cuenta){
    
    let propina = 0;
    // Calcular si el valor de la ceunta es menor igual que 50,
    if(cuenta < 50){
        // Agregamos el 20 a la cuenta
        propina = cuenta * .20;
    }
    // Calcular si el valor de la ceunta es mayor que 50 menor que 200
    else if(cuenta >= 50 && cuenta <= 200){
        // Agregamos el 15 a la cuenta
        propina = cuenta * .15;
    }
    // Cualquier otro caso
    else {
        propina = cuenta * .10;
    }
    return propina
}


// Cache DOM
let cuentaInput = document.querySelector('#cuenta');
let button = document.querySelector('#boton');
let result = document.querySelector('#result');

// button.addEventListener('click', (evt) => console.log("OUCH!!!"));
button.addEventListener('click', function(evt){
    // Obtener valor input.
    let inputValue = cuentaInput.value;
    let propina = tipCalculator(inputValue);

    // console.log(propina);
    // console.log(parseInt(inputValue) + propina);
    result.innerHTML = propina + ' ' + (parseInt(inputValue) + propina);
});



