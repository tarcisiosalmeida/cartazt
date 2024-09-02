document.addEventListener('DOMContentLoaded', function() {
  const productorNameInput = document.getElementById('name');
  const productorName = document.getElementById('productor-name');

  const valorVista = document.getElementById('valor-vista');
  const previewValorVista = document.getElementById('preview-valor-vista')

  const valorPrazo = document.getElementById('valor-prazo');
  const previewValorPrazo= document.getElementById('preview-valor-prazo')

  const selectElement = document.getElementById("opcoes");
  
  selectElement.addEventListener('input', function(e) {
    const valorSelecionado = selectElement.value;
    document.getElementById("resultado").innerText =  valorSelecionado;

    if (valorSelecionado == "3x"){
      productorNameInput.addEventListener('input', function() {
        productorName.textContent = productorNameInput.value;
    });
  
    valorVista.addEventListener('input', function() {
      previewValorVista.textContent = valorVista.value;
    });
  
      valorPrazo.addEventListener('input', function() {
        let value = valorPrazo.value.replace(/\D/g, '');
        value = (value / 100).toFixed(2).replace('.', ',');
        valorPrazo.value = 'R$ ' + value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        let numericValue = parseFloat(value.replace(',', '.').replace(/\./g, ''));
        previewValorPrazo.textContent = (numericValue / 300).toFixed(2).replace('.', ',');
      });
    } else if (valorSelecionado == "6x"){
      productorNameInput.addEventListener('input', function() {
        productorName.textContent = productorNameInput.value;
    });
  
    valorVista.addEventListener('input', function() {
      previewValorVista.textContent = valorVista.value;
    });
  
      valorPrazo.addEventListener('input', function() {
        let value = valorPrazo.value.replace(/\D/g, '');
        value = (value / 100).toFixed(2).replace('.', ',');
        valorPrazo.value = 'R$ ' + value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        let numericValue = parseFloat(value.replace(',', '.').replace(/\./g, ''));
        previewValorPrazo.textContent = (numericValue / 600).toFixed(2).replace('.', ',');
      });
    } else if (valorSelecionado == "10x"){
      productorNameInput.addEventListener('input', function() {
        productorName.textContent = productorNameInput.value;
    });
  
    valorVista.addEventListener('input', function() {
      previewValorVista.textContent = valorVista.value;
    });
  
      valorPrazo.addEventListener('input', function() {
        let value = valorPrazo.value.replace(/\D/g, '');
        value = (value / 100).toFixed(2).replace('.', ',');
        valorPrazo.value = 'R$ ' + value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        let numericValue = parseFloat(value.replace(',', '.').replace(/\./g, ''));
        previewValorPrazo.textContent = (numericValue / 1000).toFixed(2).replace('.', ',');
      });
    } else if (valorSelecionado == "12x"){
      productorNameInput.addEventListener('input', function() {
        productorName.textContent = productorNameInput.value;
    });
  
    valorVista.addEventListener('input', function() {
      previewValorVista.textContent = valorVista.value;
    });
  
      valorPrazo.addEventListener('input', function() {
        let value = valorPrazo.value.replace(/\D/g, '');
        value = (value / 100).toFixed(2).replace('.', ',');
        valorPrazo.value = 'R$ ' + value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        let numericValue = parseFloat(value.replace(',', '.').replace(/\./g, ''));
        previewValorPrazo.textContent = (numericValue / 1200).toFixed(2).replace('.', ',');
      });
    }
});


 productorNameInput.addEventListener('input', function() {
      productorName.textContent = productorNameInput.value;
  });

  valorVista.addEventListener('input', function() {
    previewValorVista.textContent = valorVista.value;
  });

  valorPrazo.addEventListener('input', function() {
    let value = valorPrazo.value.replace(/\D/g, '');
    value = (value / 100).toFixed(2).replace('.', ',');
    valorPrazo.value = 'R$ ' + value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    let numericValue = parseFloat(value.replace(',', '.').replace(/\./g, ''));
    previewValorPrazo.textContent = (numericValue / 1200).toFixed(2).replace('.', ',');
  });


});

document.getElementById('valor-vista').addEventListener('input', function(e) {
  let value = e.target.value;
  value = value.replace(/\D/g, '');
  value = (value / 100).toFixed(2).replace('.', ',');
  value = 'R$ ' + value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  e.target.value = value;
});







function printPage(){
  window.print()
}



console.log()




