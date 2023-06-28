const numero= document.querySelectorAll(".numeros");
const operadores= document.querySelectorAll(".operador");
const pantalla= document.querySelector(".pantalla");
const iguale= document.querySelector(".igual");
const borrar=document.querySelectorAll(".borrar");

let op_actual=""; 
let op_anterior="";
let opera= "";
let resultado="";

numero.forEach((numeros)  => {
    numeros.addEventListener("click", () => {
        op_actual += numeros.innerHTML;
        pantalla.innerHTML = op_actual;
    })
})

operadores.forEach((oper) => {
    oper.addEventListener("click",() => {
        op_anterior = op_actual;
        op_actual ="";
        opera = oper.innerHTML ;
    })
})

iguale.addEventListener("click",() => {
    switch (opera) {
        case "+": 
            resultado = parseFloat(op_anterior) + parseFloat(op_actual)
            break;
        case "-":
            resultado = parseFloat(op_anterior) - parseFloat(op_actual)
            break;
        case "*":
            resultado= parseFloat(op_anterior) * parseFloat(op_actual)
            break;
        case "/":
            resultado = parseFloat (op_anterior) / parseFloat(op_actual)
            break;
        default:
            console.log ("Error!");

    }
    pantalla.innerHTML = resultado;
})

borrar.addEventListener("click", () => {
    pantalla.innerHTML = "";

})
