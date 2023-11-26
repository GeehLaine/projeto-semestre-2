function exibir1() {

    var paragrafoMensagem = document.getElementById("mensagem1");

    paragrafoMensagem.textContent = "Sua solicitação foi enviada, aguarde!";

    setTimeout(function() {
        paragrafoMensagem.textContent = "";
    }, 5000);
}
function exibir2() {

    var paragrafoMensagem = document.getElementById("mensagem2");

    paragrafoMensagem.textContent = "Sua solicitação foi enviada, aguarde!";

    setTimeout(function() {
        paragrafoMensagem.textContent = "";
    }, 5000);
}

function exibir3() {

    var paragrafoMensagem = document.getElementById("mensagem3");

    paragrafoMensagem.textContent = "Sua solicitação foi enviada, aguarde!";

    setTimeout(function() {
        paragrafoMensagem.textContent = ""; 
    }, 5000);
}
