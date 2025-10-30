document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('cadastroForm');

  const campos = {
    nome: document.getElementById('nome'),
    cpf: document.getElementById('cpf'),
    nascimento: document.getElementById('nascimento'),
    telefone: document.getElementById('telefone'),
    email: document.getElementById('email'),
    rua: document.getElementById('rua'),
    numero: document.getElementById('numero'),
    bairro: document.getElementById('bairro'),
    cidade: document.getElementById('cidade'),
    estado: document.getElementById('estado'),
    cep: document.getElementById('cep')
  };

  // Função auxiliar para mostrar erro
  function mostrarErro(campo, mensagem) {
    let msg = campo.nextElementSibling;
    if (!msg || !msg.classList.contains('error-message')) {
      msg = document.createElement('div');
      msg.classList.add('error-message');
      campo.parentNode.insertBefore(msg, campo.nextSibling);
    }
    msg.textContent = mensagem;
    campo.classList.add('error');
  }

  function limparErro(campo) {
    campo.classList.remove('error');
    const msg = campo.nextElementSibling;
    if (msg && msg.classList.contains('error-message')) msg.remove();
  }

  // Funções de validação
  const isEmailValid = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPhoneValid = phone => /^\(\d{2}\) \d{4,5}-\d{4}$/.test(phone);
  const isCEPValid = cep => /^\d{5}-\d{3}$/.test(cep);
  const isCPFValid = cpf => {
    cpf = cpf.replace(/[^\d]+/g,'');
    if(cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
    let sum = 0;
    for(let i=0; i<9; i++) sum += parseInt(cpf.charAt(i)) * (10-i);
    let rev = 11 - (sum % 11);
    if(rev === 10 || rev === 11) rev = 0;
    if(rev !== parseInt(cpf.charAt(9))) return false;
    sum = 0;
    for(let i=0; i<10; i++) sum += parseInt(cpf.charAt(i)) * (11-i);
    rev = 11 - (sum % 11);
    if(rev === 10 || rev === 11) rev = 0;
    return rev === parseInt(cpf.charAt(10));
  };

  form.addEventListener('submit', e => {
    e.preventDefault();
    let valido = true;

    // Limpa erros anteriores
    Object.values(campos).forEach(c => limparErro(c));

    // Validações
    if(campos.nome.value.trim().length < 3) { mostrarErro(campos.nome, 'Nome completo é obrigatório.'); valido = false; }
    if(!isCPFValid(campos.cpf.value.trim())) { mostrarErro(campos.cpf, 'CPF inválido.'); valido = false; }
    if(!campos.nascimento.value) { mostrarErro(campos.nascimento, 'Data de nascimento é obrigatória.'); valido = false; }
    if(!isPhoneValid(campos.telefone.value.trim())) { mostrarErro(campos.telefone, 'Telefone inválido (Ex: (00) 00000-0000).'); valido = false; }
    if(!isEmailValid(campos.email.value.trim())) { mostrarErro(campos.email, 'E-mail inválido.'); valido = false; }
    ['rua','numero','bairro','cidade'].forEach(campo => {
      if(!campos[campo].value.trim()) { mostrarErro(campos[campo], 'Campo obrigatório.'); valido = false; }
    });
    if(campos.estado.value.trim().length !== 2) { mostrarErro(campos.estado, 'Informe o estado (Ex: SP).'); valido = false; }
    if(!isCEPValid(campos.cep.value.trim())) { mostrarErro(campos.cep, 'CEP inválido (Ex: 00000-000).'); valido = false; }

    if(valido){
      alert('Cadastro enviado com sucesso, meu amor 💜!');
      form.reset();
    }
  });
});
