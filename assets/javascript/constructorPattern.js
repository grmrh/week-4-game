var setup = function(data) {

    function Character(data) {
        this.name = data.name;
        this.baseAttackPower = data.baseAttackPower;
        this.healthPoint = data.healthPoint;
        this.attackPower = data.attackPower;
        this.counterAttackPower = data.counterAttackPower;
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

    // Character.prototype.attack = function(opponentCounterAP) {
    //     this.attackPower += this.baseAttackPower;
    //     this.healthPoint -= opponentCounterAP;
    // }

    // Character.prototype.attacked = function(opponentAttackPower) {
    //     return this.healthPoint -= opponentAttackPower;
    // }    


    var numberOfPlayers = 0;
    var createCharacter = function(data) {
        numberOfPlayers++;
       return Character (data)();
    }

    var playerList = [
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

    playerList.forEach(function(player){
        createCharacter(player)();
    });
}

