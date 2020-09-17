console.clear();

const weapons = [
    new Knife(), 
    new Staff(), 
    new Axe(), 
    new StormStaff(), 
    new LongBow(), 
    new Bow()
];

function getNames() {
return weapons.map(weapon => weapon.name);
}

function getCountReliableWeapons(durability) {
    const strongWeapon = weapons.filter(weapon => weapon.durability > durability);
    return strongWeapon.length;
}

function hasReliableWeapons(durability) {
    return weapons.some(weapon => weapon.durability > durability);
}

function getReliableWeaponsNames(durability) {
    const stWeapon = weapons.filter(weapon => weapon.durability > durability);
    return stWeapon.map(weapon => weapon.name);
}

function getTotalDamage() {
    let allAttack = weapons.map(weapon => weapon.attack);
    let result = allAttack.reduce(function (sum, current){
            return sum + current;
        }, 0);
    return result;
}

// 3.2 - 2 /////////////////////////////////////

function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
    // Замедление на половину секунды.
    sleep(100); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
  }

function compareArrays(arr1, arr2){
    // return arr1.every((elem, index) => elem === arr2[index]);
    if (arr1.length === arr2.length){
        return arr1.every(elem => elem === arr2[arr1.indexOf(elem)]);
    } 
    return false;
}

function memorize(fm, limit) {
  const memory = [];  
    return (...args) => {
      const XXX = memory.find(eachElement => compareArrays(eachElement.args, args));
      if(XXX !== undefined) {
        return XXX.result;
      } else {
          memory.push({args: args, result: fm(...args)});
          if(memory.length > limit){
            memory.splice(0, memory.length - limit);
          }
          return fm(...args);
      }
    }
}

// sum считает сумму всех переданных аргументов
function sum (...args){ 
  return args.reduce((sum, current) => sum + current, 0);
}

const mSum = memorize(sum, 2) // переменная mSum хранит сумму всех переданных аргументов

console.log(mSum(3, 4, 10));
console.log(mSum(3, 4, 1)); 
console.log(mSum(1, 3));






// 3.2 -2(альтернативный вариант)/////////////////////////////

// function memorize() {
//   return function(){};
// }

// function memorize() {
//   return () => {};
// }

// function memorize() {
//     return (...args) => console.log(args);
// }

// function memorize(func) {
//   return (...args)=> func(args);
// }

// function memorize(func) {
//   const array = [
//     {
//       args: [3, 4],
//       result: 7
//     },
//     {
//       args: [1, 3],
//       result: 4
//     }
//   ]
//   return function(...xxx){
//     console.log('args1 из функции', xxx)
//     console.log('args2 из массива', array[1].args)
    
//     console.log(compareArrays(xxx, array[0].args));
//     // console.log(args.find(func));
//     return func(...xxx);
//   } 
// }

// const resultFunction = memorize((a, b) => a + b);
// console.log(resultFunction(3, 4)); // <= должно вывести: 7
// // console.log(resultFunction(5, 6));



