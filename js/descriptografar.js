var botaoDescrip = document.querySelector(".btdescriptografar");

botaoDescrip.addEventListener("click",function(){

	areaCripto.style.backgroundImage = "none"; //remove a imagem de fundo

	var textoDigitado = areaTexto.value; //texto digitado para descritografar
	var textoDescriptografado = descriptografar(textoDigitado);

	areaCripto.textContent = textoDescriptografado; // colocamos o texto digitado na area de CRIPTOGRAFIA
})

function descriptografar(texto){
		var codigos = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]; //códigos
		var textoMinusculo = texto.toLowerCase(); //deixamos todas as letras em minusculo

	for(i=0; i < codigos.length; i++){
		if(textoMinusculo.includes(codigos[i][1])){
			textoMinusculo = textoMinusculo.replaceAll(codigos[i][1],codigos[i][0]);
		}
	}
	return textoMinusculo;
}