document.addEventListener('DOMContentLoaded', function () {
  const defaultFontSize = 16; // Coloca um tamanho para a letra (max)
  let currentFontSize = defaultFontSize;

  // Função que coloca o tamanho nas letras 
  const setFontSize = (size) => {
    document.body.style.fontSize = `${size}px`;
  };

  // aumenta a font com o button
  document.getElementById('aumentar-fonte').addEventListener('click', function () {
    currentFontSize += 2; //Aumenta  font size by 2 pixels
    setFontSize(currentFontSize);
  });

  // diminui a font com o button
  document.getElementById('diminuir-fonte').addEventListener('click', function () {
    currentFontSize -= 2; // Diminui font size by 2 pixels
    setFontSize(currentFontSize);
  });
});
