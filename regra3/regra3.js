/**
 * Regra de 3
 * @author Murillo Ramos
 */

 function calcularValor(){
    let x, y, valor
    x=parseFloat(frmRegra3.txtX.Value.replace(",",","))
    y=parseFloat(frmRegra3.txtY.Value.replace(",",","))
    valor = (x * y) /100
    frmRegra3.txtResultado.Value.toFixed(2)

}