/*
Difference between div and span ? 
 - Both of them used to group and format content. Difference is <span> is isline-level, <div> is block-level element.
Location line tag link and script ?
 - Line should be located inside head tag. But script various by position and requires add some extra parameters according to position.
Difference between null and undefined ?
 - `undefined` is used to represent the absence of a value when a variable has not been assigned a value or a function does not return a value,
    while `null` is used to represent the intentional absence of a value.
What is NaN ?
 - Not a Number
Difference between == and === ?
 - The `==` operator performs type coercion, which means it tries to convert the values being compared to a common type before making the comparison.
   The `===` operator, on the other hand, does not perform type coercion and only returns `true` if both the value and type of the operands are the same.
Problem (0.1 + 0. 2)  === 0.3 ?
 - False: 0.0000000000000004
*/

/*
    Problem: В функцию передается массив, функция должна вернуть сумму всех нечетных чисел больше нуля.
*/

function calculate(arr) {
  return arr.reduce(
    (accumulator, currentvalue) =>
      currentvalue > 0 && currentvalue % 2 !== 0
        ? (accumulator += currentvalue)
        : accumulator,
    0
  );
}

// console.log(calculate([5, 0, -5, 20, 88, 17, -32])); // 22

/*
 Crazy console:    
*/

let arr1 = [5, 10, 15];
let arr2 = arr1;
arr2 = [50, 100, 150];
// console.log(arr1[0]); // 5

/*
    Problem: В функцию передается массив целых чисел и число k. Необходимо написать функцию, которая вернет булево значение,
             true в случае если в переданном массиве есть два числа, сума которых равна k, иначе false.
*/

function check(arr, num) {
  for (let i = 0; i < arr.length; i++)
    for (let j = i + 1; j < arr.length; j++)
      if (arr[i] + arr[j] === num) return true;

  return false;
}

// console.log(check([10, 15, 3, 7], 17)); // true
// console.log(check([10, 15, 3, 7], 20)); // false

/*
    Problem: В функцию передается целое положительное число. Необходимо сделать так, чтобы функция возвращала сумму всех цифр в переданном числе.
*/

function sumDigits(num) {
  return String(num)
    .split("")
    .reduce(
      (accumulator, currentValue) => accumulator + Number(currentValue),
      0
    );
}
// console.log(sumDigits(123)); // 6
// console.log(sumDigits(9045)); // 18
// console.log(sumDigits(3)); // 3

/*
    Problem: функция func принимает массив чисел, необходимо реализовать функцию так, чтобы она вернула количество элементов переданного массива,
             которые отличны от наибольшего элемента не более чем на 10%.
*/

function func(arr) {
  const maxNum = Math.max(...arr);

  return arr.filter((val) => val > maxNum * 0.9 && val !== maxNum);
}

// console.log(func([5, 88, 95, 100, 77, 21, 92])); // [95, 92]
// console.log(func([2, 13, 55, 29, 19, 5, -5])); // []

/*
    Problem: Дана функция, в нее передается массив и целое положительное число. Необходимо реализовать функцию так,
             чтобы она в массив добавляла нули до нужного размера, размер передан вторым параметром.
*/

function fullArr(arr, len) {
  if (arr.length >= len) return arr;

  for (let i = 0; i < len - arr.length + 1; i++) arr.push(0);
  return arr;
}

// console.log(fullArr([2, 6, 8], 5)); // [ 2, 6, 8, 0, 0 ]

/*
    Problem: Реализовать функцию unique, в которую передается массив с числами, а функция возвращает массив, очишенный от дублей.
*/

function unique(arr) {
  return arr.filter((value, index) => arr.indexOf(value) === index);
}
// console.log(unique([1, 8, 1, 5, 9, 5, 8])); // [ 1, 8, 5, 9 ]

/*
    Problem: Реализовать функцию round5, которой передается целое число, функция должна возвращать ближайшее целое число к тому что было передано, без остатка делящееся на 5.
*/

function round5(val) {
  return Math.round(val / 5) * 5;
}
// console.log(round5(0)); // 0
// console.log(round5(2)); // 0
// console.log(round5(7)); // 5
// console.log(round5(99)); // 100
// console.log(round5(121)); // 120

/*
    Problem: Необходмо реализовать функцию uniquePoints, функция принимает массив с объектами, в которых записаны точки на осях координат.
             Необходимо сделать так, чтобы из функции возвращался массив, очищенный от дублей точек.
*/

function uniquePoints(arr) {}

const arr = [
  { x: 5, y: 10 },
  { x: 1, y: 15 },
  { x: 7, y: -15 },
  { x: 16, y: 33 },
  { x: 1, y: 15 },
  { x: 7, y: -15 },
  { x: 4, y: 12 },
];

uniquePoints(arr);
