let btn = document.querySelector('#eye-icon');

btn.addEventListener('click', () => {
  let inputSenha = document.querySelector('#senha');

  if (inputSenha.getAttribute('type') == 'password') {
    inputSenha.setAttribute('type', 'text');
  } else {
    inputSenha.setAttribute('type', 'password');
  }
});

function entrar(){
  let usuario  = document.querySelector('#usuario')
  let labelUser  = document.querySelector('#labelUser')

  let senha  = document.querySelector('#senha')
  let labelSenha  = document.querySelector('#labelSenha')

  let msgError = document.querySelector('#msgError');

  let listaUser = []

  let userValide = {
    nome:'',
    user:'',
    senha:''
  }

  listaUser = JSON.parse(localStorage.getItem('listaUser'))


listaUser.forEach((item) =>{
  if(usuario.value == item.login && senha.value == item.senha){
    userValide = {
      nome: item.nome,
      login: item.login,
      senha: item.senha
    }
  }
})

if(usuario.value == userValide.login && senha.value == userValide.senha){
  window.open("https://projet-x--felipenascime42.repl.co/cpass.html", "_blank");

  localStorage.setItem('userLogado', JSON.stringify(userValide))

  let token = Math.random().toString(16).substring(2)
  localStorage.setItem('token',token)
}else{
  labelUser.setAttribute('style','color:red')
  usuario.setAttribute('style','border-color:red')
  labelSenha.setAttribute('style','color:red')
  senha.setAttribute('style','border-color:red')
  msgError.setAttribute('style','display:block')
  msgError.innerHTML = "Usuario ou senha incorretos"
  usuario.focus()
}

  
}