var botaoCrip = document.querySelector(".btcriptografar");

var areaTexto = document.querySelector(".area-texto-criptografar"); // area do texto digitado
var areaCripto = document.querySelector(".area-texto-descriptografar");//area para o texto CRIPTOGRAFADO

botaoCrip.addEventListener("click",function(){

	areaCripto.style.backgroundImage = "none"; //remove a imagem de fundo

	var textoDigitado = areaTexto.value; //texto digitado para criptografar

	var textoCriptografado = criptografar(textoDigitado);

	areaCripto.textContent = textoCriptografado; // colocamos o texto digitado na area de CRIPTOGRAFIA
	botaoCopiar.focus();


})


function criptografar(texto){
	var codigos = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]; //códigos
	var textoMinusculo = texto.toLowerCase(); //deixamos todas as letras em minusculo

	for(i=0; i < codigos.length; i++){
		if(textoMinusculo.includes(codigos[i][0])){
			textoMinusculo = textoMinusculo.replaceAll(codigos[i][0],codigos[i][1]);
		}
	}
	return textoMinusculo;
}

