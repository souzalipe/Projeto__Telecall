let userLogado.JSON.parse(localStorage.setItem('userLogado'))

let logado = document.querySelector('#logado')

logado.innerHTML = 'Bem Vindo a Cpaas'+ {userLogado.nome}

function sair(){
  localStorage.removeItem('token')
  window.location.href = 'https://projet-x.felipenascime42.repl.co/login.html'
}
