function validaFormulario() {
    var nome = document.getElementById("nome");
    var vnome = nome.value;
    var tel = document.getElementById("telefone");
    var vtel = tel.value;
    var email = document.getElementById("email");
    var vemail = email.value;
    var texto = document.getElementById("texto");
    var vtexto = texto.value;
    if (vnome == '') {
        alert("Por favor, preeencha o campo nome.")
        nome.focus;
        return false;
    }
    else if (vtel == "") {
        alert("Por favor, preeencha o campo de telefone.")
        tel.focus;
        return false;
    }
    else if (vemail == "") {
        alert("Por favor, preeencha o campo email.")
        email.focus;
        return false;
    }
    else if (vtexto == "") {
        alert("Por favor, preeencha o campo de texto.")
        texto.focus;
        return false;
    }
    else{
        alert("Formulário enviado com sucesso!")
    }
}