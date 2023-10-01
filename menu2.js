document.addEventListener("DOMContentLoaded", function() {

    var usuariosCadastrados = localStorage.getItem("usuariosCadastrados");
    if (usuariosCadastrados) {
      usuariosCadastrados = JSON.parse(usuariosCadastrados);
      

      if (usuariosCadastrados.length > 0) {
        var usuario = usuariosCadastrados[usuariosCadastrados.length - 1];
        
        document.getElementById("name").value = usuario.nome;
        document.getElementById("address").value = usuario.email;
        document.getElementById("phone").value = usuario.cnpj;
        document.getElementById("password").value = usuario.senha;
      }
    }
  });
  
  function sairDaConta() {
    localStorage.removeItem("usuariosCadastrados");
    alert("Você saiu da conta");
    window.location.href = "login.html";
}