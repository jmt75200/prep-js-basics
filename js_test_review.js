/*
  Joelle Torneros
*/

// Variables

var knight = "Arthur";
var maiden = "Jane";
var monster = "TanDragon";

// Array
var weaponChest = ["Mace", "Sorcerer's Stone", "Excalibur"];

// Object
var hero = {
  wizard : "Merlin",
  weapon : weaponChest[2],
  power : 9001
}

// Sword in the stone
function swordInTheStone(worthy) {
  if (worthy == "Arthur") {
    console.log("We have found our King " + worthy);
  } else {
    console.log("We must keep searching, for " + worthy + " is unworthy");
  }
}

swordInTheStone(knight);

// True Love
function trueLove(king, queen) {
  if (queen == "Guiverene" && king == "Arthur" ) {
    console.log("On this day, our " + king + " "+"and"+" " +queen + " shall rule happily ever after.");
  } else {
    console.log("We must keep searching, for true love must reign over Camelot.");
  }
}

trueLove(knight, maiden);

// Epic Battle
function epicBattle(wizard, enemy, powa) {
  if (powa <= 15) {
    console.log("Our " + wizard + " has fallen.");
  } else if (powa >= 16 && powa <= 40) {
    console.log("Our " + wizard + " has almost slain the " + enemy);
  } else {
    console.log("Our " + wizard + " has slain the " + enemy);
  }
}

epicBattle(hero.wizard, monster, hero.power);

// Merlin's War
function merlinsWar(weapon) {
  if (weapon == weaponChest[1]) {
    console.log (hero.wizard + " shall slay the " + monster + " with the " + weapon);
  } else {
    weapon = weaponChest[1];
    console.log(hero.wizard + " is ready for war with the " + weapon);
  }
}

merlinsWar(hero.weapon);

