 //======================================== BLOCO DE VARIAVEIS GLOBAIS======================
 //========================================================================================
 
 let n1 =["A♠","2♠","3♠","4♠","5♠","6♠","7♠","8♠","9♠","10♠","J♠","Q♠","K♠"];
 let n2 =["A♣","2♣","3♣","4♣","5♣","6♣","7♣","8♣","9♣","10♣","J♣","Q♣","K♣"];
 let n3 =["A♥","2♥","3♥","4♥","5♥","6♥","7♥","8♥","9♥","10♥","J♥","Q♥","K♥"];
 let n4 =["A♦","2♦","3♦","4♦","5♦","6♦","7♦","8♦","9♦","10♦","J♦","Q♦","K♦"];
 let baralho= n1.concat(n2,n3,n4);

function principal() {
    // CRIAR O ARRAY QUE REPRESENTA
    // O BARALHO
    console.log("espadas "+n1)
    console.log("paus "+n2);
    console.log("copas "+n3);
    console.log("ouros "+n4);
    console.log("-----ordem  original------------");
    console.log(baralho);

    console.log("---- ordem apos 01 randor");
    baralho.sort(randOrd); 
    console.log(baralho);
    baralho.forEach(element => {
        console.log("Carta :"+element);
        baralho.sort(randOrd);
    });
    console.log("apos todas estas interacoes");
    console.log("ordem : "+ baralho);
    // primeira carta do topo dar para o jogador
    
    console.log("Jogador recebe carta: "+ );
    console.log("o robo pegou a proxima carta que é um "+ );
    console.log("o ganhador com a carta maior foi"+);
}
    


function randOrd(a, b) {
 return Math.random() - 0.5; // Gera um número aleatório entre -0.5 e 0.5
}