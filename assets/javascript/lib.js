var character = function(data) {
    var prop = {
        baseAttackPower: data.baseAttackPower,
        healthPoint: data.healthPoint,
        attackPower: data.attackPower,
        counterAttackPower: data.counterAttackPower
    };

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

