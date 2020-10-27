// ------------ Velocidad de Baja link superior ------------

$("#btnRegistro").click(scroll)

function scroll() {
    $("html, body").animate(
        {
            scrollTop: $("#form").offset().top
        },
        3000
    )
}
