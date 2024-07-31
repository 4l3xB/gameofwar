class Card {
    constructor(suit,face,value) {
        this.suit = suit;
        this.face = face;
        this.value = value;
    }
}

class Player {
    constructor(name, hand) {
        this.name = name;
        this.score = 0;
        this.hand = hand;
    }
}


class Game {
    constructor() {
        this.deck = [];
        this.players = [];
        this.initGame();
        this.startGame();
    }

    makeCards() {
        let suits = ['❤️', '💎','🍀','🗡️'];
        let faces = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
    
        for (let f = 0; f < faces.length; f++ ) {
            for (let s = 0; s < suits.length; s++) {          
                let card = new Card(suits[s],faces[f],f + 2)
                this.deck.push(card);
            }   
        }

        //borrowed this code from https://stackoverflow.com


        for (let i = this.deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = temp;
        }
    }

    //what it should do

    initGame() {
        this.makeCards();

        for (let x = 0; x < 2; x++) {
            let hand = this.deck.splice(0,26);
            let player = new Player(`Player${x+1}`,hand);
            this.players.push(player);
        }

    

    }

    

    startGame() {
        //play the game
    }
}


const game = new Game();

console.log(game);












// const face = document.createElement('h2');
// face.innerText = `${ace.face} ${ace.suit}`;
// card.append(face);
// document.body.append(card);