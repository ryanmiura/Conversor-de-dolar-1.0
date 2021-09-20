function Converter() { // checa se o button "Converter()" do HTML foi clicado pelo elemento onClick
    var valorElementoInput = document.getElementById("valor") // define a linha de codigo "valor" do HTML como uma variavel
    var valorDigitado = valorElementoInput.value //define o valor de entrada do elemento input como uma variavel
    var valorNumerico = parseFloat(valorDigitado) //define o valor do input como numerico e transforma em uma variavel
    
    var valorEmReal = valorNumerico * 5
    
    var elementoValorConvertido = document.getElementById("valorConvertido") // transformo a tag h2 com o id"valorConvertido" em uma variavel em js
    var mensagemValorConvertido = valorDigitado + " dolares, são " + valorEmReal + " reais" //variavel que junta o valor digitado e o valor convertido para formar uma mensagem
    elementoValorConvertido.innerHTML = mensagemValorConvertido // manda a mensagem do valor convertido para dentro do elemento do HTML
}