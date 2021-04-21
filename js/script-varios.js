// Tipos de Usuarios

let userClasico = document.getElementById('usuarioClasico');
let userModerno = document.getElementById('userModerno');

let fondoModerno = document.getElementById('fondoModerno');
let fondoClasico = document.getElementById('fondoClasico');

let imgClasico = document.getElementById('imgClasico');
let imgModerno = document.getElementById('imgModerno');

let textoClasico = document.getElementById('textoClasico');
let textoModerno = document.getElementById('textoModerno');

userClasico.onclick = (e) => {
	e.preventDefault();

	fondoClasico.style.display = 'block';
	fondoClasico.classList.add('animate__animated', 'animate__bounceIn');

	fondoModerno.style.display = 'none';

	imgClasico.style.display = 'block';
	imgClasico.classList.add('animate__animated', 'animate__bounceInLeft');

	imgModerno.style.display = 'none';

	textoClasico.style.display = 'block';
	textoClasico.classList.add('animate__animated', 'animate__fadeInUp');

	textoModerno.style.display = 'none';
}



userModerno.onclick = (e) => {
	e.preventDefault();

	fondoModerno.style.display = 'block';
	fondoModerno.classList.add('animate__animated', 'animate__bounceIn');

	fondoClasico.style.display = 'none';

	imgModerno.style.display = 'block';
	imgModerno.classList.add('animate__animated', 'animate__bounceInRight');
	
	imgClasico.style.display = 'none';

	textoModerno.style.display = 'block';
	textoModerno.classList.add('animate__animated', 'animate__fadeInUp');

	textoClasico.style.display = 'none';
}
