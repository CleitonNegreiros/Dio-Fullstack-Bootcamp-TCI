function calculadora () {
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)'));

    // Verificação de Operação:
    if (!operacao || operacao >= 7){
        alert('Erro - Operação Inválida')
        calculadora();
    } else {

        // Inserção dos valores:
        let n1 = Number(prompt('Insira o primeiro valor'));
        let n2 = Number(prompt('Insira o segundo valor:'));
        let resultado;

        // Verificação das Variáveis:
        if (!n1 || !n2){
            alert('Erro - Parâmetros Inválidos')
            calculadora();
        } else {
            // Calculadora com funções começa aqui!:
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`)
                novaOperacao();
            }
            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`)
                novaOperacao();
            }
            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`)
                novaOperacao();
            }
            function divReal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`)
                novaOperacao();
            }
            function divInt() {
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é ${resultado}`)
                novaOperacao();
            }
            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} elevado à ${n2} potência é ${resultado}`)
                novaOperacao();
            }

            // Ao fim da operação escolhida, retorno se deseja continuar:
            function novaOperacao() {
                let opcao = prompt('Deseja realizar outra operação?\n 1 - Sim\n 2 - Não');
        
                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2){
                    alert('Até Logo!')
                } else {
                    alert('Digite uma opção válida!')
                    novaOperacao();
                } 
            }
        }
    
        // Condicional para selecionar escolha de user:
        if (operacao == 1) {
            soma();   
        } else if (operacao == 2) {
            subtracao();
        } else if (operacao == 3) {
            multiplicacao();
        } else if (operacao == 4) {
            divReal();
        } else if (operacao == 5) {
            divInt();
        } else if (operacao == 6) {
            potenciacao();
        } 
    }
}

calculadora();