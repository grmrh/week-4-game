var game = function(data) {

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



    var character = {
        name, 
        baseAttackPower, 
        healthPoint, 
        attackPower,
        counterAttackPower
    };

    var numberOfPlayers = 0;
    var createCharacter = function(data) {
        numberOfPlayers++;
        return character {
            name: data.name,
            baseAttackPower: data.baseAttackPower,
            healthPoint: data.healthPoint,
            attackPower: data.attackPower,
            counterAttackPower: data.counterAttackPower
        }
    }


    var attack = function(opponentCounterAP) {
        this.prop.attackPower += this.prop.baseAttackPower;
        this.prop.healthPoint -= opponentCounterAP;
    }

    var attacked = function(attackPower) {
        return this.prop.healthPoint -= attackPower;
    }

    var isLost = function() {
        if (this.prop.healthPoint <= 0) {
            return true;
        }
        else false;
    }

    var didWin = function(numberOfOpponents) {
        if (numberOfOpponents <= 0)
            return true;
        else false;
    }
}

