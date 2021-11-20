document.getElementById("btnok").onclick = () => {
    let resultado = document.getElementById("resultado")
    var nome = document.getElementById("nome").value;
    let valoraplicado = parseFloat(document.getElementById("valorap").value)
    let txdjuro = parseFloat(document.getElementById("txjuros").value/100)
    let numparc = parseFloat(document.getElementById("numpar").value)
    if(numparc != "" || valoraplicado != "" || txdjuro != "" || numparc != "")
    {
        var formatter = new Intl.NumberFormat(undefined, {
            style: 'currency',
            currency: 'BRL',
        });
        let valorfuturo = (valoraplicado * ((((1 + txdjuro) ** numparc) - 1) / txdjuro)).toFixed(2)
        resultado.innerHTML = `${nome}, se você aplicar ${formatter.format(valoraplicado)}, à taxa de juros de ${txdjuro}% ao mês, durante ${numparc} meses, acumulará uma poupança de ${formatter.format(valorfuturo)}`
    }
    else 
    {
        resultado.innerHTML = "Por favor, preencha todos os campos."
    }
}