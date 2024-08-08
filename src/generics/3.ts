// У вас є функція merge, яка поєднує два об'єкти. Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.

// function merge (objA, objB) {
//   return Object.assign(objA, objB);
// }

function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

// const objA = { name: 'Alice', age: 30 };
// const objB = { color: 'blue', height: 170 };
// const merged = merge(objA, objB);
// console.log(merged); // Output: { name: 'Alice', age: 30, color: 'blue', height: 170 }
