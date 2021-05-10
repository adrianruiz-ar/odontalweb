// Tipos de Usuarios

let userClasico = document.getElementById('userClasico');
let userModerno = document.getElementById('userModerno');

let textoClasico = document.getElementById('textoClasico');
let textoModerno = document.getElementById('textoModerno');

let divImgBase02_mano = document.getElementById('divImg-base-02_mano');
let divImgBase03_dialogo = document.getElementById('divImg-base-03_dialogo');

let divImgClasico01_pizarra = document.getElementById('divImg-clasico-01_pizarra');
let divImgClasico02_utiles = document.getElementById('divImg-clasico-02_utiles');
let divImgClasico03_papeles = document.getElementById('divImg-clasico-03_papeles');
let divImgClasico04_taza = document.getElementById('divImg-clasico-04_taza');
let divImgClasico05_dialogo1 = document.getElementById('divImg-clasico-05_dialogo1');
let divImgClasico06_dialogo2 = document.getElementById('divImg-clasico-06_dialogo2');
let divImgClasico07_dialogo3 = document.getElementById('divImg-clasico-07_dialogo3');
let divImgClasico08_mano = document.getElementById('divImg-clasico-08_mano');

let divImgModerno01_lampara = document.getElementById('divImg-moderno-01_lampara');
let divImgModerno02_monitor = document.getElementById('divImg-moderno-02_monitor');
let divImgModerno03_gatocabeza = document.getElementById('divImg-moderno-03_gatocabeza');
let divImgModerno04_gatocuerpo = document.getElementById('divImg-moderno-04_gatocuerpo');
let divImgModerno05_maceta = document.getElementById('divImg-moderno-05_maceta');
let divImgModerno06_dialogo1 = document.getElementById('divImg-moderno-06_dialogo1');
let divImgModerno07_dialogo2 = document.getElementById('divImg-moderno-07_dialogo2');
let divImgModerno08_dialogo3 = document.getElementById('divImg-moderno-08_dialogo3');
let divImgModerno09_mano = document.getElementById('divImg-moderno-09_mano');

userClasico.onclick = (e) => {
	e.preventDefault();
    
    divImgBase02_mano.style.display = 'none';
    divImgBase03_dialogo.style.display = 'none';
    
    divImgClasico01_pizarra.classList.remove('divClasicoOut');
    divImgClasico02_utiles.classList.remove('divClasicoOut');
    divImgClasico03_papeles.classList.remove('divClasicoOut');
    divImgClasico04_taza.classList.remove('divClasicoOut');
    divImgClasico05_dialogo1.classList.remove('divClasicoOut');
    divImgClasico06_dialogo2.classList.remove('divClasicoOut');
    divImgClasico07_dialogo3.classList.remove('divClasicoOut');
    divImgClasico08_mano.classList.remove('divClasicoOut');
    
    divImgModerno01_lampara.classList.add('divModernoOut');
    divImgModerno02_monitor.classList.add('divModernoOut');
    divImgModerno03_gatocabeza.classList.add('divModernoOut');
    divImgModerno04_gatocuerpo.classList.add('divModernoOut');
    divImgModerno05_maceta.classList.add('divModernoOut');
    divImgModerno06_dialogo1.classList.add('divModernoOut');
    divImgModerno07_dialogo2.classList.add('divModernoOut');
    divImgModerno08_dialogo3.classList.add('divModernoOut');
    divImgModerno09_mano.classList.add('divModernoOut');
    
    userClasico.classList.remove('clasicoAnimacion');
    userModerno.classList.remove('modernoAnimacion');
    
	divImgClasico01_pizarra.style.display = 'block';
    divImgClasico02_utiles.style.display = 'block';
    divImgClasico03_papeles.style.display = 'block';
    divImgClasico04_taza.style.display = 'block';
    divImgClasico05_dialogo1.style.display = 'block';
    divImgClasico06_dialogo2.style.display = 'block';
    divImgClasico07_dialogo3.style.display = 'block';
    divImgClasico08_mano.style.display = 'block';
    textoModerno.style.display = 'none';
    textoClasico.style.display = 'block';
	//textoClasico.classList.add('animate__animated', 'animate__fadeInUp');
    textoClasico.classList.add('animate__animated', 'animate__flipInX', 'animate__delay-5s');
    

	
}



userModerno.onclick = (e) => {
	e.preventDefault();
    
    divImgBase02_mano.style.display = 'none';
    divImgBase03_dialogo.style.display = 'none';
    
    divImgModerno01_lampara.classList.remove('divModernoOut');
    divImgModerno02_monitor.classList.remove('divModernoOut');
    divImgModerno03_gatocabeza.classList.remove('divModernoOut');
    divImgModerno04_gatocuerpo.classList.remove('divModernoOut');
    divImgModerno05_maceta.classList.remove('divModernoOut');
    divImgModerno06_dialogo1.classList.remove('divModernoOut');
    divImgModerno07_dialogo2.classList.remove('divModernoOut');
    divImgModerno08_dialogo3.classList.remove('divModernoOut');
    divImgModerno09_mano.classList.remove('divModernoOut');
    
    divImgClasico01_pizarra.classList.add('divClasicoOut');
    divImgClasico02_utiles.classList.add('divClasicoOut');
    divImgClasico03_papeles.classList.add('divClasicoOut');
    divImgClasico04_taza.classList.add('divClasicoOut');
    divImgClasico05_dialogo1.classList.add('divClasicoOut');
    divImgClasico06_dialogo2.classList.add('divClasicoOut');
    divImgClasico07_dialogo3.classList.add('divClasicoOut');
    divImgClasico08_mano.classList.add('divClasicoOut');
    
    userClasico.classList.remove('clasicoAnimacion');
    userModerno.classList.remove('modernoAnimacion');
    
    divImgModerno01_lampara.style.display = 'block';
    divImgModerno02_monitor.style.display = 'block';
    divImgModerno03_gatocabeza.style.display = 'block';
    divImgModerno04_gatocuerpo.style.display = 'block';
    divImgModerno05_maceta.style.display = 'block';
    divImgModerno06_dialogo1.style.display = 'block';
    divImgModerno07_dialogo2.style.display = 'block';
    divImgModerno08_dialogo3.style.display = 'block';
    divImgModerno09_mano.style.display = 'block';
    textoClasico.style.display = 'none';
    textoModerno.style.display = 'block';
	//textoModerno.classList.add('animate__animated', 'animate__fadeInUp');
    textoModerno.classList.add('animate__animated', 'animate__flipInX', 'animate__delay-5s');
    
	
}
