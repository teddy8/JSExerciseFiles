var obj = { a: 1, b: 2, c: 30, d: 44, e: 5 };

var { a, c } = obj;
console.log(`a >>> ${a}`);
console.log(`c >>> ${c}`);

// a의 속성값을 newA에 할당하되, 값이 undefined인 경우 10 할당
var { a: newA = 10, f: newF = 7 } = obj;
console.log(`newA >>> ${newA}`);
console.log(`newF >>> ${newF}`);