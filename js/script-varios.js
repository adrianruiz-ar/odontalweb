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

	imgClasico.style.display = 'block';
	imgModerno.style.display = 'none';

	fondoModerno.style.display = 'none';
	fondoClasico.style.display = 'block';

	imgClasico.classList.add('animate__animated', 'animate__bounceInLeft');
	fondoClasico.classList.add('animate__animated', 'animate__bounceIn');

	textoClasico.style.display = 'block';
	textoModerno.style.display = 'none';
	textoClasico.classList.add('animate__animated', 'animate__fadeInUp');
}



userModerno.onclick = (e) => {
	e.preventDefault();

	imgClasico.style.display = 'none';
	imgModerno.style.display = 'block';

	fondoModerno.style.display = 'block';
	fondoClasico.style.display = 'none';
	

	imgModerno.classList.add('animate__animated', 'animate__bounceInRight');
	fondoModerno.classList.add('animate__animated', 'animate__bounceIn');

	textoModerno.style.display = 'block';
	textoClasico.style.display = 'none';
	textoModerno.classList.add('animate__animated', 'animate__fadeInUp');
}
