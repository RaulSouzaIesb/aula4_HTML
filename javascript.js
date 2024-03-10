const submitBtn = document.querySelector('#submit-btn');

if(submitBtn){
	submitBtn.addEventListener('click', function(e) {
	e.preventDefault();
	const nome = document.querySelector('#nome').value;
	const email = document.querySelector('#email').value;
	const senha = document.querySelector('#senha').value;
	const usuario = {
	  nome: nome,
	  email: email,
	  senha: senha
	};
	if(nome != "" && senha != ""){
		document.cookie = "nome=" + nome;
		const json = JSON.stringify(usuario);
		console.log(json);
		const blob = new Blob([json], {type: "application/json"});
		const url = URL.createObjectURL(blob);
		const doc = document.createElement('a');
		doc.download = 'usuario.json';
		doc.href = url;
		doc.click();
		}else {alert("Campo nome ou senha em branco!");}
	});
}

// Selecione o botão de abrir o pop-up e o pop-up em si
const openPopupButton = document.querySelectorAll('.open-popup');
const popup = document.querySelectorAll('.popup');

if(openPopupButton){
	
	for (var i = 0; i < openPopupButton.length; i++) {
	// Adicione um evento de clique no botão para abrir o pop-up
	
	openPopupButton[i].addEventListener('click', function() {
		if (this.id == "sobre"){
			popup[0].style.display = 'block'; // Element is rendered as a block-level element
		}else if (this.id == "cadastro"){
			popup[1].style.display = 'block'; // Element is rendered as a block-level element
		}else if (this.id == "login"){
			popup[2].style.display = 'block'; // Element is rendered as a block-level element
		}
	});}
}

// Adicione um evento de clique fora do pop-up para fechá-lo
window.addEventListener('click', function(event) {
  if (event.target == popup[0] || event.target == popup[1] || event.target == popup[2]) {
	for (var i = 0; i < popup.length; i++) {
		popup[i].style.display = 'none'; // Esconder os pop-ups
	}
  }
});

//const fechar = document.querySelectorAll('.fechar');

/* if(fechar){
	for (var i = 0; i < openPopupButton.length; i++) {
		fechar[i].addEventListener('click', () => {
			for (var i = 0; i < popup.length; i++) {
				popup[i].style.display = 'none'; // Esconder os pop-ups
			}
		});
	}	
} */

function showCookies() {
  console.log(document.cookie)
}

function clearOutputCookies() {
  document.cookie = ""
}