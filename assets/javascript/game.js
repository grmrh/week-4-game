/**
 * declare functions
 */
function Character(data) {
    this.name = data.name;
    this.baseAttackPower = data.baseAttackPower;
    this.healthPoint = data.healthPoint;
    this.attackPower = data.attackPower;
    this.counterAttackPower = data.counterAttackPower;
    this.isAttacker = function(nm) {
        if (nm === this.name) return true;
        else return false;
    }, 
    this.shape = function($place) {
        var content;
        content = ` <div class="col-md-6">
                                     <div class="card bg-light mb-3" style="max-width: 10rem;">
                                    <div class="card-body">
                                    <h4 class="card-title">${this.name}</h4>
                                    <p class="card-text">BAP: ${this.baseAttackPower}</p></div>
                                    <div class="card-footer">HP: ${this.healthPoint}</div></div></div> `;     
        $place.append(content);
    };
    this.source = data.source;
    this.attack = function(opponentCounterAP) {
        this.attackPower += this.baseAttackPower;
        this.healthPoint -= opponentCounterAP;
    }
    this.attacked = function(opponentAttackPower) {
        return this.healthPoint -= opponentAttackPower;
    }
    this.isLost = function() {
        if (this.healthPoint <= 0) {
            return true;
        }
        else false;
    }    

    this.didWin = function(numberOfOpponents) {
        if (numberOfOpponents <= 0)
            return true;
        else false;
    }
    //return this;   
}

function createPlayer(player) {
    var numberOfPlayers = 0;
    return new Character(player);
}   

function selectAsAttacker(event) {
    event.data.$clickedCard.removeClass("bg-light")
             .addClass("bg-dark")
             .addClass("text-white");
    return false;
    //event.data.$attackerArea.append(event.data.$clickedCard);
 }

// makeup players
const playerList = [
    {name:'Luke', 
    baseAttackPower: 3,
    healthPoint: 50,
    attackPower: 4,
    opponentCounterAP: 2,
    source:'../assets/images/luke.png'},
    {name:'Yoda', 
    baseAttackPower: 5,
    healthPoint: 100,
    attackPower: 7,
    opponentCounterAP: 3,
    source:'../assets/images/yoda.png'},
    {name:'Lea', 
    baseAttackPower: 5,
    healthPoint: 40,
    attackPower: 3,
    opponentCounterAP: 3,
    source:'../assets/images/lea.png'},
    {name:'Darkbader', 
    baseAttackPower: 1,
    healthPoint: 60,
    attackPower: 5,
    opponentCounterAP: 3,
    source:'../assets/images/darkbader.png'},
    {name:'Obiwan', 
    baseAttackPower: 4,
    healthPoint: 80,
    attackPower: 6,
    opponentCounterAP: 4,
    source:'../assets/images/obiwan.png'},
    {name:'Skywalker', 
    baseAttackPower: 3,
    healthPoint: 50,
    attackPower: 4,
    opponentCounterAP: 2,
    source:'../assets/images/skywalker.png'}
];

console.log(createPlayer(playerList[0]));

/**
 * create game players and place then in the initial position
 */
var players= [];
playerList.forEach((player)=> {
        players.push(createPlayer(player));
});

console.log(players);
players.forEach(player =>console.log(player.name))

/**
 * place players in the initial position -- checked
 */
players.forEach(player => player.shape($(".oppontent-area")));

/**
 * attach click event of selecting one attacher
 */
//players.forEach(player =>$(".card").on("click", player.selectAsAttacker($(this), $(".attacker-area"))));

//$(".card").on("click", null,  {$clickedCard: $(this), $attackerArea: $(".attacker-area") }, selectAsAttacker);

$(".card").on("click", function(){
    $(this).removeClass("bg-light")
             .addClass("bg-dark")
             .addClass("text-white");
    //$(".attacker-area").appendChild($(this));
    $(this).appendTo(".attacker-area");
});




