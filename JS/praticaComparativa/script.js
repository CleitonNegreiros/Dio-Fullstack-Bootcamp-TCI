function comparativa() {

    const n1 = Number(prompt('Digite o primeiro número'));
    const n2 = Number(prompt('Digite o segundo número'));

    if (!n1 || !n2){
        alert('Erro - Entradas Inválidas')
        comparativa();
    } else {

        if (n1 == n2){
            var igual = '';
        } else {
            var igual = 'não';
        }
        var soma = n1 + n2;
        if (soma > 10){
            var sum = 'maior';
        } else {
            var sum = 'menor';
        }
        if (soma > 20){
            var sum2 = 'maior';
        } else {
            var sum2 = 'menor';
        }
    
    alert(`Os números ${n1} e ${n2} ${igual} são iguais. Sua soma é ${soma}, que é ${sum} que 10 e ${sum2} que 20`)
    }
    novaComparacao();
    function novaComparacao(){
        let opcao = prompt('Deseja realizar mais alguma operação?(S/N)')
        if (opcao == 'S') {
            comparativa();
        } else if (opcao == 'N') {
            alert('Muito Obrigado, até mais!')
        } else {
            alert('Erro - Opção inválida!')
            comparativa();
        }
    }
}

comparativa();