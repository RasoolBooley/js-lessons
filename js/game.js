
// create a game that has characters, players and enemies. Players must be able to attack enemies and vice versa. If attacked, respective health bars should be reduced depending on the attack. If health depletes, the character dies. XP is gained upon defeating enemies. 

// firstly create a prototype for the character " Name, Health, Damage, level, primary-attack" 

let start = alert("Open your console");

    mainName = prompt("What is your name, warrior?");


let character = {
    init: function(name, health, damage, level, attack) {
        this.name = name;
        this.health = health;
        this.damage = damage;
        this.level = level;
        this.attack = attack;
    },
};


let mainCharacter = Object.create(character);
    mainCharacter.init(mainName, 100, 30, 1, "slash");

    enemy = Object.create(character);
    enemy.init("Green Man", 60, 20, 3, "stab");

    npcMichelle = Object.create(character);
    npcMichelle.init("Michelle", 100, 100, 10, "Death Kiss")

    npcNur = Object.create(character);
    npcNur.init("The Brock", 100, 150, 10, "Kamehameha")

    npcMarlon = Object.create(character);
    npcMarlon.init("Post Marlone", 250, 100, 10, "Smack Attack" )

console.log(mainName + " you have been chosen to protect the kingdom");
console.log("")


    

