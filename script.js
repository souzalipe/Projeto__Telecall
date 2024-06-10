
      let btn = document.querySelector('#verSenha');
      let btn2 = document.querySelector('#verConfirme');

      let labelNome = document.querySelector('#labelNome');
      let nome = document.querySelector('#nome');
      let validenome = false;

      let labelSenha = document.querySelector('#labelSenha');
      let senha = document.querySelector('#senha');
      let validesenha = false;

      let labelConfirmacao = document.querySelector('#labelConfirmacao');
      let senha2 = document.querySelector('#senha2');
      let validesenha2 = false;

      let mae = document.querySelector('#Nomematerno');
      let labelMae = document.querySelector('#labelMae');
      let validemae = false;

      let labelTel = document.querySelector('#labelTel');
      let tel = document.querySelector('#tel');

      let login = document.querySelector('#login');
      let labelLogin = document.querySelector('#labelLogin');
      let validelogin = false;

      let labelCpf = document.querySelector('#labelCpf');
      let validecpf = false;

      const cepInput = $("#cep");
      const labelCep = $("#labelCep");
      let validecep = false;

      const labelCidade = $("#labelCidade");
      const cidadeInput = $("#cid");

      const ruaInput = $("#rua");
      const labelRua = $("#labelRua");

      const bairroInput = $("#bairro");
      const labelBairro = $("#labelBairro");

      const emailInput = document.getElementById('email');
      const labelEmail = document.getElementById('labelEmail');
      let valideemail = false;



      nome.addEventListener('input', () => {
        // Remove caracteres que não são letras ou espaços
        nome.value = nome.value.replace(/[^a-zA-Z\s]/g, '');

        if (nome.value.length >= 15 && nome.value.length < 60) {
          labelNome.setAttribute('style', 'color: green');
          labelNome.innerHTML = 'Nome';
          validenome = true;
        } else {
          labelNome.setAttribute('style', 'color: red');
          labelNome.innerHTML = 'Nome *insira no mínimo 15 caracteres';
          validenome = false;
        }
      });


      senha.addEventListener('input', () => {
        senha.value = senha.value.replace(/[^a-zA-Z]/g, ''); // Remove caracteres não alfabéticos

        if (senha.value.length < 8) {
          labelSenha.setAttribute('style', 'color: red');
          labelSenha.innerHTML = 'Senha *Insira no mínimo 8 caracteres';
          validesenha = false;
        } else {
          labelSenha.setAttribute('style', 'color: green');
          labelSenha.innerHTML = 'Senha';
          validesenha = true;
        }
      });

      senha2.addEventListener('input', () => {
        senha2.value = senha2.value.replace(/[^a-zA-Z]/g, ''); // Remove caracteres não alfabéticos

        if (senha.value !== senha2.value) {
          labelConfirmacao.setAttribute('style', 'color: red');
          labelConfirmacao.innerHTML = 'Confirmação de Senha *As senhas não conferem';
          validesenha2 = false;
        } else {
          labelConfirmacao.setAttribute('style', 'color: green');
          labelConfirmacao.innerHTML = 'Confirmação de Senha';
          validesenha2 = true;
        }
      });


      mae.addEventListener('input', () => {
        mae.value = mae.value.replace(/\d/g, ''); // Remove números
        nome.value = nome.value.replace(/[^a-zA-Z\s]/g, ''); // Remove caracteres não alfabéticos
        if (mae.value.length >= 15 && nome.value.length < 60) {
          labelMae.setAttribute('style', 'color: green');
          labelMae.innerHTML = 'Nome da mãe';
          validemae = true;
        } else {
          labelMae.setAttribute('style', 'color: red');
          labelMae.innerHTML = 'Nome da mãe *insira no mínimo 15 caracteres';
          validemae = false;
        }
      });


      function validarCPF(cpf) {
        // Verificar se o CPF tem 11 dígitos
        if (cpf.length !== 11) {
          return false;
        }

        // Verificar se todos os dígitos são iguais (CPF inválido)
        if (/^(\d)\1{10}$/.test(cpf)) {
          return false;
        }

        // Calcula o primeiro dígito verificador
        let sum = 0;
        for (let i = 0; i < 9; i++) {
          sum += parseInt(cpf.charAt(i)) * (10 - i);
        }
        let mod = sum % 11;
        let digit1 = mod < 2 ? 0 : 11 - mod;

        // Calcula o segundo dígito verificador
        sum = 0;
        for (let i = 0; i < 10; i++) {
          sum += parseInt(cpf.charAt(i)) * (11 - i);
        }
        mod = sum % 11;
        let digit2 = mod < 2 ? 0 : 11 - mod;

        // Verifica se os dígitos verificadores são válidos
        if (parseInt(cpf.charAt(9)) !== digit1 || parseInt(cpf.charAt(10)) !== digit2) {
          return false;
        }

        // Se todas as verificações passaram, o CPF é válido, então formatamos
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
      }

      cpf.addEventListener('input', () => {
        // Remove todos os caracteres não numéricos
        cpf.value = cpf.value.replace(/\D/g, '');

        const isCPFValid = validarCPF(cpf.value);

        if (isCPFValid) {
          labelCpf.setAttribute('style', 'color: green');
          labelCpf.innerHTML = 'CPF válido';
          cpf.value = isCPFValid; // Define o valor da entrada como o CPF formatado
          validecpf = true;
        } else {
          labelCpf.setAttribute('style', 'color: red');
          labelCpf.innerHTML = 'CPF inválido';
          validecpf = false;
        }
      });


      $(document).ready(function() {
        //Telefone
        $("#tel").mask("(99) 9999-9999");

        //celular
        $("#numeroCelular").mask("(99) 99999-9999");
      });




      emailInput.addEventListener('input', function() {
        const email = emailInput.value;
        validarEmail(email);
      });
      function validarEmail(email) {
        // Expressão regular para validar o formato do e-mail
        var regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        if (regex.test(email)) {
          labelEmail.style.color = 'green'; // E-mail válido, cor verde
          labelEmail.innerHTML = 'E-mail válido';
          valideemail = true;

        } else {
          labelEmail.style.color = 'red'; // E-mail inválido, cor vermelha
          labelEmail.innerHTML = 'E-mail inválido';
          valideemail = false;

        }
      }

      cepInput.on("input", function () {
        let cep = cepInput.val().replace(/\D/g, "").slice(0, 8);
        cepInput.val(cep);

        cidadeInput.val("");
        ruaInput.val("");
        bairroInput.val("");

        labelRua.css("color", ""); // Remover a cor da rua
        labelCidade.css("color", ""); // Remover a cor da cidade
        labelBairro.css("color", ""); // Remover a cor do bairro

        if (cep.length === 0) {
          labelCep.css("color", ""); // Remover a cor
          labelCep.html("Cep:");
        } else {
          validarCep(cep);
        }
      });

      function validarCep(cep) {
        var regex = /^[0-9]{8}$/;

        if (regex.test(cep)) {
          labelCep.css("color", "green");
          labelCep.html('Cep válido');
          validecep = true;
        } else {
          labelCep.css("color", "red");
          labelCep.html('Cep inválido');
          validecep = false;
        }

        const url = `https://viacep.com.br/ws/${cep}/json/`;

        if (cep.length === 8) {
          fetch(url)
            .then((response) => {
              if (!response.ok) {
                labelCep.css("color", "red");
                throw new Error('Não foi possível obter os dados do CEP.');
              }
              return response.json();
            })
            .then((data) => {
              if (data.erro) {
                labelCep.css("color", "red");
                labelCep.html('CEP não encontrado');
                validecep = false;
              } else {
                labelCep.css("color", "green");
                labelRua.css("color", "green");
                labelCidade.css("color", "green");
                labelBairro.css("color", "green");
                validecep = true;
              }

              cidadeInput.val(data.localidade);
              ruaInput.val(data.logradouro);
              bairroInput.val(data.bairro);
            })
            .catch((error) => {
              console.error(error);
              validecep = false;
            });
        }
      }




      function cadastrar() {
        // Validações dos campos

        if (validenome && validesenha && validesenha2 && validecep && validecpf && valideemail && validemae && validelogin) {
            let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

            listaUser.push({
                nome: nome.value,
                login: login.value,
                email: emailInput.value,
                senha: senha.value
            });

            localStorage.setItem('listaUser', JSON.stringify(listaUser));
            setTimeout(()=>{
              window.open("https://projet-x.felipenascime42.repl.co/login.html", "_blank");
          }, 3000)

          document.getElementById('mensagem').innerHTML = 'Cadastro realizado com sucesso!';


            return false; // Impede o envio do formulário, já que a página será redirecionada
        } else {
            document.getElementById('mensagem').innerHTML = 'Preencha o formulário corretamente.';
            return false; // Impede o envio do formulário em caso de erro
        }
      }


      btn.addEventListener('click', () => {
        let inputSenha = document.querySelector('#senha')
        if (inputSenha.getAttribute('type') == 'password') {
          inputSenha.setAttribute('type', 'text')
        } else {
          inputSenha.setAttribute('type', 'password')
        }
      })

      btn2.addEventListener('click', () => {
        let inputSenha = document.querySelector('#senha2')
        if (inputSenha.getAttribute('type') == 'password') {
          inputSenha.setAttribute('type', 'text')
        } else {
          inputSenha.setAttribute('type', 'password')
        }
      });




      login.addEventListener('input', function () {
        let inputValue = login.value;

        // Remova espaços em branco do início e do final do valor
        inputValue = inputValue.trim();

        // Remova todos os números do valor
        inputValue = inputValue.replace(/\d/g, '');

        login.value = inputValue; // Define o valor do campo sem os números

        if (inputValue.length === 0) {
          labelLogin.textContent = "Login:";
          labelLogin.style.color = "black"; // Pode definir a cor desejada para o texto normal
          validelogin = false; // Define como inválido, se necessário
        } else if (inputValue.length === 6) {
          labelLogin.textContent = "Login:";
          labelLogin.style.color = "green";
          validelogin = true;
        } else {
          labelLogin.textContent = "Login: *Incorreto. Digite exatamente 6 letras.";
          labelLogin.style.color = "red";
          validelogin = false;
        }
      });