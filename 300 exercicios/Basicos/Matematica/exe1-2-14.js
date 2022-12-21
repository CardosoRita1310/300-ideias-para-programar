/*Vou e volto diariamente a pé para o trabalho, que dista aproximadamente 800 m de minha casa. Supondo que trabalho 5 dias por semana, 45 semanas por
ano, "bole" a operação matemática que deve ser efetuada para calcular quantos quilômetros,
aproximadamente, terei andado ao final de um ano. Elabore um programa que faça as contas e
mostre o resultado na tela.*/

function calculaKm(diasTrabalhadosSemanalmente, semanasPorAno){
    const distancia = 800;
        
    const ano = distancia * 2 * diasTrabalhadosSemanalmente * semanasPorAno;
        
    return ano/1000;

}

function calculaPassagem(diasTrabalhadosSemanalmente, semanasPorAno, valorPassagem){
    const valor = diasTrabalhadosSemanalmente * semanasPorAno * valorPassagem * 2;

    return valor;
}

function main(){
return console.log("Você andou " + calculaKm(5,45) + "km este ano e gastou " + calculaPassagem(5, 45, 2.45) + " de passagem");
}



main();