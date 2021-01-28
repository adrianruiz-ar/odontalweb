// Menú Superior

$(window).scroll(function(){
	$('#menuTop').toggleClass('scroll', $(this).scrollTop() > 50);
});


// Efecto del Botón Switch

const checkbox = document.getElementById('switch-label');

checkbox.addEventListener( 'change', function() {

    let antiguoImg = document.getElementById('user_antiguo_img');
    let antiguoTexto = document.getElementById('user_antiguo_texto');

    let modernoImg = document.getElementById('user_moderno_img');
    let modernoTexto = document.getElementById('user_moderno_texto');


    if(this.checked) {

        antiguoImg.classList.add("user_ocultar");
        antiguoTexto.classList.add("user_ocultar");

        modernoImg.classList.remove("user_ocultar");
        modernoTexto.classList.remove("user_ocultar");
    
    }
    else {
        
        antiguoImg.classList.remove("user_ocultar");
        antiguoTexto.classList.remove("user_ocultar");  

        modernoImg.classList.add("user_ocultar");
        modernoTexto.classList.add("user_ocultar");
    }
});


// Before and After

