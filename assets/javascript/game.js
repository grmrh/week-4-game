/**
 * declare functions
 */
// makeup players
const playerList = [
    {name:'Luke', 
    baseAttackPower: 3,
    healthPoint: 50,
    attackPower: 4,
    counterAttackPower: 2,
    source:'../assets/images/luke.png'},
    {name:'Yoda', 
    baseAttackPower: 5,
    healthPoint: 100,
    attackPower: 7,
    counterAttackPower: 3,
    source:'../assets/images/yoda.png'},
    {name:'Lea', 
    baseAttackPower: 5,
    healthPoint: 40,
    attackPower: 3,
    counterAttackPower: 3,
    source:'../assets/images/lea.png'},
    {name:'Darkbader', 
    baseAttackPower: 1,
    healthPoint: 60,
    attackPower: 5,
    counterAttackPower: 3,
    source:'../assets/images/darkbader.png'},
    {name:'Obiwan', 
    baseAttackPower: 4,
    healthPoint: 80,
    attackPower: 6,
    counterAttackPower: 4,
    source:'../assets/images/obiwan.png'},
    {name:'Skywalker', 
    baseAttackPower: 3,
    healthPoint: 50,
    attackPower: 4,
    counterAttackPower: 2,
    source:'../assets/images/skywalker.png'}
];

function Character(data) {
    this.name = data.name;
    this.baseAttackPower = data.baseAttackPower;
    this.healthPoint = data.healthPoint;
    this.attackPower = data.attackPower;
    this.counterAttackPower = data.counterAttackPower;

    // this.isAttacker = function(nm) {
    //     if (nm === this.name) return true;
    //     else return false;
    // }, 
    this.isAttacker = false,
    this.isDefender = false,
    this.shape = function($place) {
        var content = `<div class="card bg-light mb-3" style="max-width: 10rem;">
                    <div class="card-body">
                    <h4 class="card-title">${this.name}</h4>
                    <p class="card-text">BAP: ${this.baseAttackPower}</p></div>
                    <div class="card-footer" data-hp= ${this.healthPoint} >HP:${this.healthPoint} </div></div>`;   
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

var players = [];
var attacker = [];
var enemies = [];
var defender = [];

function setup() {
    /**
     * create game players and place then in the initial position
     */
    playerList.forEach((player)=> {
        players.push(createPlayer(player));
    });
    
    //console.log(players);
    //players.forEach(player =>console.log(player.name))

    $("body").find("#start-over").hide();
    /**
    * place players in the initial position -- checked
    */
    players.forEach(player => player.shape($(".enemy-area")));

}

    function selectPlayer(event) {
        var self = $(this);

    // there are cases that the attacler's attackPower is too high, where clicking on the defender to 
    // get the fight ready does not move it to the defender area/ The defender is already defeated

    if (!attackerAssigned()) {
            selectAttacker(event, self);
    }
    else {
        selectDefender(event, self);
    }
    }

    function selectAttacker(event, self) {
        if (attacker.length > 0) {
            return;
        }

        self.removeClass("bg-light")
                .addClass("bg-dark")
                .addClass("text-white");
        self.appendTo(".attacker-area");
        //event.data.$attackerArea.append(event.data.$clickedCard);
        var nm = self.children("div").children("h4.card-title").text();
        attacker = $.grep(players, function(character, index){
            return (character.name == nm); 
        });

        attacker[0].isAttacker = true;

        console.log(nm);
        console.log(attacker);
        //setAttacker(nm);
        setEnemies();
    }

    function attackerAssigned() {
        if (attacker.length > 0) {
            return true;
        } else
        return false;
    }

    function selectDefender(event, self) {

        if (defender.length > 0) {
            return;
        }
        // check if an attacker exists
        var nm = self.children("div").children("h4.card-title").text();
        // if (attackerAssigned != true) return;

        self.removeClass("bg-red")
                .addClass("bg-info")
                .addClass("text-white");
        self.appendTo(".defender-area");
        //event.data.$attackerArea.append(event.data.$clickedCard);
        
        defender = $.grep(players, function(character, index){
            return (character.name == nm); 
        });

        defender[0].isDefender = true;

        console.log(nm);
        console.log(defender);
        //setAttacker(nm);
        setDefender();
    }

    /**
     * set attacker
     */

    function setAttacker(nm) {
        attacker = $.grep(players, function(character, index){
            return (character.isAttacker === true);
        });
        console.log(attacker);
    }
    function setEnemies() {
        enemies = $.grep(players, function(character, index){
            return (character.isAttacker === true);
        }, true);
        $(".card").removeClass("bg-light")
                    .addClass("bg-danger")
                    .addClass("text-white");
        console.log(enemies);
    }
    function setDefender(nm) {
        defender = $.grep(players, function(character, index){
            return (character.isDefender === true);
        });

        enemies.splice($.inArray(defender[0], enemies), 1);
        console.log(defender);
        console.log(enemies);
    }

 /**
 * start game
 */ 

var main = $("body");
var fightbutton = main.find("#fight");
var startover = main.find("#start-over");
var numberOfOpponents = enemies.length;

setup();
var enemy = main.find(".enemy-area").find(".card");

//$(".card").on("click", selectPlayer);
enemy.on("click", selectPlayer);

fightbutton.on("click", function() {
    var offensive = attacker[0];
    var defensive = defender[0];

    offensive.attackPower += offensive.baseAttackPower;
    offensive.healthPoint -= defensive.counterAttackPower;
    defensive.healthPoint -= offensive.attackPower;

    var attackerHp = main.find(".attacker-area").find(".card-footer");
    var defenderHp = main.find(".defender-area").find(".card-footer");
    
    // set the data-hp attribute value
    attackerHp.attr("data-hp", offensive.healthPoint);
    defenderHp.attr("data-hp", defensive.healthPoint);

    attackerHp.text(offensive.healthPoint);
    defenderHp.text(defensive.healthPoint);

    // check health points
    if (defensive.healthPoint <= 0) {
        //$("div.defender-area").children(".card").remove();
        main.find(".defender-area").find(".card").remove();
        numberOfOpponents--;
        numberOfOpponents == 0 ? alert("OK You win") : startover.show();
    }
})

startover.on("click", function() {
    startover.hide();
    // remove from defender array
    //defender.splice($.inArray(defender[0], defender), 1);
    defender= [];
});