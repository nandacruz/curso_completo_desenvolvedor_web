//alert("Olá HCODE");

/*
var resposta = confirm("Deseja excluir?");


console.log(resposta);
*/

/*
var a = 10;
var b = 33;

alert( a + b );
*/



const a = 10;
const b = 33;

function somar(a,b){
    return a + b;    
}

//console.log(somar(2,5));

document.querySelector("#calcular").addEventListener("click",function(){

    let valorA = document.querySelector("#valorA").value;
    let valorB = document.querySelector("#valoeB").value;

    if(valorA.length > 0 && valorB.length > 0){
        alert(parseInt(valorA)+ parseInt(valorB));

    }else{
        alert("Digite os valores para o cálculo")
    }
    
});