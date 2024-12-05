let positionWitch = 0;
let postionGriffin = 50;
const positionBook = 51;
let inGame = true;
let nextCharacters = "witch";
console.log(`Ils sont lancer dans l'arène!\nLa sorcière est lancée à l'extrémité ${positionWitch}\nLe Griffon est lancé à l'autre extrémité ${postionGriffin}`)

function rollDice () {      //fonction me permettant de pouvoir lance le dés
    return 1 + Math.floor(Math.random() * 6);
}
let fiftyFifty = () => Math.random() < 0.5;
function luckyCard (){
    if (fiftyFifty() === true){
        moveCharacters ("griffin", -3);
        console.log(`La sorcière met des patates de forain au Griffon.\${positionGriffin}`);
    }else {
        moveCharacters ("witch", 1);
        console.log("Le Griffon a driveby la Sorcière, elle a réussi à esquiver les balles. Elle est dans le quartier d'après. +1 case.")
    }
}
function switchCharacters () {
    if (nextCharacters === "witch"){
        nextCharacters = "griffin"; 
    }else if (nextCharacters === "griffin"){
        nextCharacters = "witch";
    }
    return;
}
function moveCharacters (selectCharacters, amount) {
    if (selectCharacters === "witch"){
        positionWitch += amount;
        if (positionWitch >= postionGriffin){
            positionWitch = postionGriffin;
            luckyCard(); 
        }
    }else if (selectCharacters === "griffin"){
        postionGriffin -= amount;
        if (positionWitch >= postionGriffin){
            postionGriffin = positionWitch;
            if (fiftyFifty() === true) luckyCard();
            else moveCharacters ("witch", -2);
        }
    }
    return;
}
while(inGame === true){
    moveCharacters(nextCharacters, rollDice());
    switchCharacters();
    if (positionWitch >= 51) {
        inGame = false;
        console.log("Annnnnnnnnnnnd the WINNER IS ... THE WIIIIITCH");
    }else if (postionGriffin <= 0){
        inGame = false;
        console.log("Annnnnnnnnnnnd the WINNER IS ... THE GRRRIIIIIFFIIIIIIIIIIIINNNNNN");
    }   
}

/*lancer le dé (de 1 à 6) puis déplacer le joueur en fonction du résultat;

si les joueurs se croisent 

--> sorciere arrive case griffon, se stop --> carteChance (function)

--> griffon arrive case sorciere, se stop --> if score rollDice > 3 alors carteChance else recule 2 cases */