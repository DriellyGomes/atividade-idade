let resultado;
let idade= parseFloat(prompt("Digite sua idade:"));  

if ( idade < 18 ) {
    resultado="Menor de idade"; 
}
else if ( idade >= 18 && idade < 25) {
    resultado="Jovem"; 
}
else if ( idade >= 25 && idade < 45) {
    resultado="Jovem Adulto"; 
}
else if ( idade >= 45 && idade < 60) {
    resultado="Adulto"; 
}
else (resultado = "Você está na terceira idade")

const caixaResultado = document.getElementById('resultado');
caixaResultado.value =resultado;

