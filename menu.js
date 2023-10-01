
const botao = document.querySelector('.pedir');
const h4 = document.getElementById('frase');

botao.addEventListener('click', function() {
  h4.textContent = "Solicitação concluída! ONECARD será gerado de acordo com seus dados cadastrais. Entraremos em contato.";
  h4.style.display = 'block';

  setTimeout(function() {
    h4.style.display = 'none';
  }, 3000);
});