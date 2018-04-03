var game = function() {

    function Character(data) {
        this.name = data.name;
        this.baseAttackPower = data.baseAttackPower;
        this.healthPoint = data.healthPoint;
        this.attackPower = data.attackPower;
        this.counterAttackPower = data.counterAttackPower;
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

    Character.prototype.attack = function(opponentCounterAP) {
        this.attackPower += this.baseAttackPower;
        this.healthPoint -= opponentCounterAP;
    }

    Character.prototype.attacked = function(opponentAttackPower) {
        return this.healthPoint -= opponentAttackPower;
    }    

    var numberOfPlayers = 0;
    var numberOfOpponents = numberOfPlayers > 1 ? numberOfPlayers -1 : 0;
    var createCharacter = function(data) {
        numberOfPlayers++;

        // example
        var data = {
            name: "Obiwan", 
            baseAttackPower: 3, 
            healthPoint:4, 
            attackPower: 5, 
            counterAttackPower: 6};

        var player = new Character(data);

        return player;
    }

}