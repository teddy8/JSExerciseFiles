var x = 5;              // 숫자형(Number)
var y = 'five';         // 문자형(String)
var isTrue = true;      // 불린형(Boolean)
var empty = null;       // null
var nothing             // undefined
var sym = Symbol('me'); // Symbol

// 객체(Object)
var item = {
    price: 5000,
    count: 10
}; 

// 배열(Array)
var fruits = ['apple', 'orange', 'kiwi']; 

// 함수(function)
var addFruit = function (fruit) {
    fruits.push(fruit);
} 

addFruit('watermelon');
console.log(fruits);