var botaoCopiar = document.querySelector(".btcopiar");

botaoCopiar.addEventListener("click",function(){

	areaCripto.select();
	document.execCommand("copy");

	areaCripto.textContent = "";
	areaTexto.value = "";
	areaTexto.focus();
})