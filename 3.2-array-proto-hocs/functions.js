'use srtict';
console.clear();

// const weapons = [
//     new Knife(), 
//     new Staff(), 
//     new Axe(), 
//     new StormStaff(), 
//     new LongBow(), 
//     new Bow()
// ];

// function getNames() {
// return weapons.map(weapon => weapon.name);
// }

// function getCountReliableWeapons(durability) {
//     return weapons.filter(weapon => weapon.durability > durability).length;
// }

// function hasReliableWeapons(durability) {
//     return weapons.some(weapon => weapon.durability > durability);
// }

// function getReliableWeaponsNames(durability) {
//     return weapons.filter(weapon => weapon.durability > durability).map(weapon => weapon.name);
// }

// function getTotalDamage() {
//     return weapons.map(weapon => weapon.attack).reduce((sum, current) => sum + current, 0);
// }



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
  return (arr1.length === arr2.length) && (arr1.every((elem, index) => elem === arr2[index]));
}

function memorize(getFunction, limit) {
  const memory = [];  
    return (...args) => {
      const memoryItem = memory.find(eachElement => compareArrays(eachElement.args, args));
      if(memoryItem) {
        return memoryItem.result;
      }
      memory.push({args: args, result: getFunction(...args)});
      if(memory.length > limit){
        memory.splice(0, memory.length - limit);
      }
      return memory[memory.length - 1].result;
    }
}

// sum считает сумму всех переданных аргументов
function sum(...args) { 
  return args.reduce((sum, current) => sum + current, 0);
}

const mSum = memorize(sum, 3) // переменная mSum хранит сумму всех переданных аргументов

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



