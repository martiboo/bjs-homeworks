//задача 1

class Weapon {
    constructor(data) {
        this.name = data.name;
        this.attack = data.attack;
        this.durability = data.durability;
        this.range = data.range;
        this.version = data.version;
    }
    takeDamage(damage) {
        if (this.durability === Infinity) {
            return;
        }
        this.durability = this.durability - damage;
        if (this.durability <= 0) {
            this.durability = 0;
        }
    }
    getDamage() {
        if (this.durability === 0) {
            return 0;
        }
        if (this.durability >= this.durability * 0.3) {
            return this.attack;
        }
        return this.attack / 2;
    }
    isBroken() {
        if (this.durability > 0) {
            return false
        }
        return true;
    }
}

const sword = new Weapon({
    name: 'Старый меч',
    attack: 20,
    durability: 10,
    range: 1,
  });
  
  sword.takeDamage(5);
  console.log(sword.durability);

  const arm = new Weapon({
    name: 'Рука',
    attack: 1,
    durability: Infinity,
    range: 1,
  });
  
  arm.takeDamage(20);
  console.log(arm.durability);
  
  const bow = new Weapon({
    name: 'Лук',
    attack: 10,
    durability: 200,
    range: 3,
  });
  
  bow.takeDamage(20);
  console.log(bow.durability);
  
  bow.takeDamage(200);
  console.log(bow.durability);

console.log(bow.durability);
console.log(bow.getDamage());

console.log(arm.durability); 
console.log(arm.getDamage());

console.log(bow.durability);
console.log(bow.isBroken());

console.log(arm.durability);
console.log(arm.isBroken());

const weapon = [
    new Weapon({name: 'Рука', attack: 1, durability: Infinity, range: 1}),
    new Weapon({name: 'Лук', attack: 10, durability: 200, range: 3}),
    new Weapon({name: 'Меч', attack: 25, durability: 500, range: 1}),
    new Weapon({name: 'Нож', attack: 5, durability: 300, range: 1}),
    new Weapon({name: 'Посох', attack: 8, durability: 300, range: 2}),
]
console.log(weapon);

const upgradeWeapon = [
    new Weapon({name: 'Длинный лук', version: 'Лук', attack: 15, durability: 200, range: 4}),
    new Weapon({name: 'Секира', version: 'Меч', attack: 27, durability: 800, range: 1}),
    new Weapon({name: 'Посох Бури', version: 'Посох', attack: 10, durability: 300, range: 3}),
]
console.log(upgradeWeapon);

//задача 2

class Bow extends Weapon {
    constructor() {
        super({name: 'Лук', attack: 10, durability: 200, range: 3});
    }
}

const bowTwo = new Bow();

console.log(bowTwo.name);
console.log(bowTwo.attack);
console.log(bowTwo.durability);
console.log(bowTwo.range);

class Hand extends Weapon {
    constructor() {
        super({name: 'Рука', attack: 1, durability: Infinity, range: 1});
    }
}

const handTwo = new Hand();

console.log(handTwo.name);
console.log(handTwo.attack);
console.log(handTwo.durability);
console.log(handTwo.range);

class Sword extends Weapon {
    constructor() {
        super({name: 'Меч', attack: 25, durability: 500, range: 1});
    }
}

const swordTwo = new Sword();

console.log(swordTwo.name);
console.log(swordTwo.attack);
console.log(swordTwo.durability);
console.log(swordTwo.range);

class Knife extends Weapon {
    constructor() {
        super({name: 'Нож', attack: 5, durability: 300, range: 1});
    }
}

const knifeTwo = new Knife();

console.log(knifeTwo.name);
console.log(knifeTwo.attack);
console.log(knifeTwo.durability);
console.log(knifeTwo.range);

class Staff extends Weapon {
    constructor() {
        super({name: 'Посох', attack: 8, durability: 300, range: 2});
    }
}

const staffTwo = new Staff();

console.log(staffTwo.name);
console.log(staffTwo.attack);
console.log(staffTwo.durability);
console.log(staffTwo.range);

class LongBow extends Bow {
    constructor() {
        super();
        this.name = 'Длинный лук';
        this.attack = 15;
        this.range = 4;
    }
}

const longBow = new LongBow();

console.log(longBow.name);
console.log(longBow.attack);
console.log(longBow.durability);
console.log(longBow.range);

class BattleAxe extends Sword {
    constructor() {
        super();
        this.name = 'Секира';
        this.attack = 27;
        this.durability = 800;
    }
}

const battleAxe = new BattleAxe();

console.log(battleAxe.name);
console.log(battleAxe.attack);
console.log(battleAxe.durability);
console.log(battleAxe.range);

class StormStaff extends Staff {
    constructor() {
        super();
        this.name = 'Посох Бури';
        this.attack = 10;
        this.range = 3;
    }
}

const stormStaff = new StormStaff();

console.log(stormStaff.name);
console.log(stormStaff.attack);
console.log(stormStaff.durability);
console.log(stormStaff.range);

//задача 3

class StudentLog {
    constructor(name) {
        this.name = name;
        this.newObject = {
            
        };
    }
    getName() {
        return this.name;
    }
    addGrade(grade, subject) {
    
        if (grade > 5 || grade <= 0 || isNaN(grade) === true) {
            
            console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5`)
        
            if (subject in this.newObject) {
                return this.newObject[subject].length;
            }
            return 0;
          
        }
        if (subject in this.newObject === false) {
            this.newObject[subject] = [];
        }
        this.newObject[subject].push(grade);
        return this.newObject[subject].length;
    }
    getAverageBySubject(subject) {
        if (subject in this.newObject === false) {
            return 0;
        }
        let sum = 0;
        for (let i = 0; i < this.newObject[subject].length; i++) {
            sum = sum + this.newObject[subject][i];
        }
        let average = sum / this.newObject[subject].length;
        return average;
    }
    getTotalAverage() {
        let sum = 0;
        let counter = 0;
        for (let subject in this.newObject) {
            let averageMarkSubject = this.getAverageBySubject(subject);
            sum = sum + averageMarkSubject;
            counter++;
        }
        let averageTotal = sum / counter;
        return averageTotal;
    }
}

const log = new StudentLog('Олег Никифоров');

console.log(log.addGrade(3, 'algebra'));
console.log(log.addGrade('отлично!', 'math'));
console.log(log.addGrade(4, 'algebra'));
console.log(log.addGrade(5, 'geometry'));
console.log(log.addGrade(25, 'geometry'));


log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getAverageBySubject('geometry'));
console.log(log.getAverageBySubject('algebra'));
console.log(log.getAverageBySubject('math'));

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getTotalAverage());