document.addEventListener('DOMContentLoaded', function() {
  const productorNameInput = document.getElementById('name');
  const productorName = document.getElementById('productor-name');

  const valorVista = document.getElementById('valor-vista');
  const previewValorVista = document.getElementById('preview-valor-vista');

  const valorPrazo = document.getElementById('valor-prazo');
  const previewValorPrazo = document.getElementById('preview-valor-prazo');

  const selectElement = document.getElementById("opcoes");

  
  function atualizarValorPrazo() {
    const valorSelecionado = selectElement.value;
    let divisor = 1;
    let parcelas = "";

    switch (valorSelecionado) {
      case "3x":
        divisor = 300;
        parcelas = "3x de ";
        break;
      case "6x":
        divisor = 600;
        parcelas = "6x de ";
        break;
      case "10x":
        divisor = 1000;
        parcelas = "10x de ";
        break;
      case "12x":
        divisor = 1200;
        parcelas = "12x de ";
        break;
      case "selecione":
        divisor = 100;
        parcelas = "";
        break;
    }

    let value = valorPrazo.value.replace(/\D/g, '');
    value = (value / 100).toFixed(2).replace('.', ',');
    valorPrazo.value = 'R$ ' + value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    let numericValue = parseFloat(value.replace(',', '.').replace(/\./g, ''));
    previewValorPrazo.textContent = parcelas + 'R$ ' + (numericValue / divisor).toFixed(2).replace('.', ',');
  }

  
  productorNameInput.addEventListener('input', function() {
    productorName.textContent = productorNameInput.value;
  });


  valorVista.addEventListener('input', function() {
    previewValorVista.textContent = valorVista.value;
  });

  
  valorPrazo.addEventListener('input', atualizarValorPrazo);
  selectElement.addEventListener('input', atualizarValorPrazo);

  valorVista.addEventListener('input', function(e) {
    let value = e.target.value;
    value = value.replace(/\D/g, '');
    value = (value / 100).toFixed(2).replace('.', ',');

    
    e.target.value = 'R$ ' + value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    
    previewValorVista.textContent = e.target.value;
  });
});

function printPage() {
  window.print();
}






