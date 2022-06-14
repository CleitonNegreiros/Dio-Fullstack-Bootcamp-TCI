package praticaMetodos;

public class Main {

    public static void main(String[] args) {
        
   
    
    Calculadora
    System.out.println("Exercício calculadora");
    Calculadora.soma(3, 6);
    Calculadora.subtracao(9, 1.8);
    Calculadora.multiplicacao(7, 8);
    Calculadora.divisao(5, 2.5);
    
    // Mensagem
    System.out.println("Obter Mensagem");
    Mensagem.obterMensagem(9);
    Mensagem.obterMensagem(14);
    Mensagem.obterMensagem(1);
    

    // Empréstimo
    System.out.println("Exercício Empréstimo");
    Emprestimo.calcular(1000, Emprestimo.getDuasParcelas());
    Emprestimo.calcular(1000, Emprestimo.getTresParcelas());
    Emprestimo.calcular(1000, 5);
    

    // Cálculo da área dos quadriláteros notáveis

    System.out.println("Exercício Quadriláteros com retorno:");

    double areaQuadrado  = Quadrilatero.area(3);
    System.out.println("Área do quadrado " + areaQuadrado);

    double areaRetangulo = Quadrilatero.area(5, 5);
    System.out.println("Área do retângulo " + areaRetangulo);

    double areaTrapezio = Quadrilatero.area(7, 8, 9);
    System.out.println("Área do Trapézio " + areaTrapezio);

    }

}

