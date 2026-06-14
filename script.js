function mostrarMensagem(){

alert(
"Produzir mais e preservar mais: esse é o futuro do agro sustentável 🌱"
);

}

function calcularImpacto(){

let valor =
document.getElementById("producao").value;

let resultado =
document.getElementById("resultado");

if(valor===""){

resultado.innerHTML=
"Digite um valor.";

return;

}

valor=
Number(valor);

let agua=
valor*30;

let carbono=
valor*12;

resultado.innerHTML=`

🌾 Produção: ${valor} toneladas

💧 Água economizada:
${agua} mil litros

🌍 Emissão reduzida:
${carbono} kg CO₂

`;

}

function curiosidade(numero){

let texto=
document.getElementById("texto");

if(numero===1){

texto.innerHTML=
"🌱 A agricultura sustentável reduz impactos ambientais.";

}

if(numero===2){

texto.innerHTML=
"🪨 Solos saudáveis aumentam produtividade.";

}

if(numero===3){

texto.innerHTML=
"🚜 Tecnologias ajudam a produzir mais usando menos recursos.";

}

}