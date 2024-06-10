const chk = document.getElementById('chk')

chk.addEventListener('change', () =>{
  document.body.classList.toggle('dark')
})

// Deixar em todas as páginas //

document.addEventListener('DOMContentLoaded', () => {
  // Verifique se a guia foi aberta por outra guia
  const isChildTab = window.opener ? true : false;

  // Verifique a preferência do modo escuro no Local Storage
  const darkModePreference = localStorage.getItem('darkMode');

  // Verifique se a preferência é "enabled" e a guia não é uma guia filha
  if (darkModePreference === 'enabled' && !isChildTab) {
    document.body.classList.add('dark');
    const chk = document.getElementById("chk");
    chk.checked = true;
  }

  // Adicione o evento de mudança para alternar o modo escuro na página atual
  const chk = document.getElementById("chk");

  chk.addEventListener('change', () => {
    if (chk.checked) {
      document.body.classList.add('dark');
      localStorage.setItem('darkMode', 'enabled');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('darkMode', 'disabled');
    }
  });
});