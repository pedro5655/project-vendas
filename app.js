const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});





function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 200 * i);
    });
  };


		const titulo = document.querySelector('.intro')
		typeWriter(titulo);


  	window.sr = ScrollReveal({ reset: true});

	  sr.reveal('.intro, .section_titulo, .title', {duration: 2000});

  	sr.reveal('.section_titulo', {
		  rotate: { x: 0, y: 80, z:0},
		  duration: 2000
	  })
