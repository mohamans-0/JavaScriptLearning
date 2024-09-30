const calcAverage = (a,b,c) => (a+b+c) / 3;

let scoreDolphins = calcAverage(44 + 23 + 71);
let scoreKoalas   = calcAverage(65 + 54 + 49);

const checkWinner = function (scoreDolphins,scoreKoalas) {
    
    if (scoreDolphins > 2 * scoreKoalas){
        console.log(`Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`);
    } else if (scoreKoalas > 2 * scoreDolphins){
        console.log(`Dolphins win (${scoreKoalas} vs. ${scoreDolphins})`);
    }else {
        console.log("No team wins...");
    }
    
}
checkWinner(scoreDolphins,scoreKoalas);
