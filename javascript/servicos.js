var popup = document.getElementById('popupForm'); //must be global
var body = document.getElementById('body')
var produtoInput = document.querySelector("input#Produto");

function openForm(product) { //open form    
    var t = product.innerText.slice(0, product.innerText.indexOf('a partir')); //just heading
    produtoInput.value = t;
    popup.style.display="block"; //aparece o form

    body.style.overflow ="hidden"; //impossibilitar scroll
}

window.onclick = function(event) { //close form when clicked anywhere
    if (event.target == popup) {
      popup.style.display = "none"; //some form
      body.style.overflow ="initial"; //volta scroll para o modo inicial
    }
  }

function sendForm() { //criar msg de envio de formulário

}