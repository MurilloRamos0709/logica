/**
 * Cálculo do IMC
 * @author Murillo Ramos
 */

 function calcularImc(){
     let peso, altura, imc //variáveis do mesmo tipo 
     /* 
     parseFloat converte a String da caixa de texto do formulário para um tipo númerico
     Float (númerico reais, casa decimais)
     Int (números inteiros)
     Replace (trocar um caractere por outro)
     */
     peso = parseFloat(frmImc.txtPeso.value.replace(",","."))
     altura = parseFloat(frmImc.txtAltura.value.replace(",","."))
     imc = peso / (altura * altura)
     frmImc.txtImc.value = imc.toFixed(2)
 }