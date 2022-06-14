package praticaMetodos;

public class Quadrilatero {

    public static double area(double lado) {

        // System.out.println("Área do quadrado " + lado * lado + " m²");
        return lado * lado;
        
    }
    public static double area(double lado1, double lado2) {

        // System.out.println("Área do retângulo " + lado1 * lado2 + " m²");
        return lado1 * lado2;
        
    }
    public static double area(double baseMaior, double baseMenor, double altura) {

        // System.out.println("Área do trapézio " + (((baseMaior + baseMenor) * altura) /2 ) + " m²");
        return (((baseMaior + baseMenor) * altura) /2 );
        
    }
     
}