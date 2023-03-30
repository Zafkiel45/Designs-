const table = document.querySelector('#tabela');
const button = document.querySelector('#button');
button.addEventListener('click', function(){
  html2canvas(table).then(function(canvas) {
    const link = document.createElement('a');
    link.href = canvas.toDataURL();
    link.download = 'my-table.png';
    link.click();
  });
})
