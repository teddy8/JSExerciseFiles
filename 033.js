// Symbol = ES6의 새로운 자료형 생성시 마다 primary한 값이 생성
const symbol = Symbol();
const hello = Symbol('hello');

console.log(Number(3) === Number(3));
console.log(Symbol('symbol') === Symbol('symbol'));
console.log(Symbol() === Symbol());
console.log(typeof Symbol());

const nationility = Symbol('nationility');
const user = {
    name: 'jay'
};
user[nationility] = 'korean';
console.log(user[nationility]);  // korean

// 심볼이 객체의 키로 사용되면 값을 가져올 수 없다 (name만 출력됨)
for (let key in user) {
    console.log(key);
}

console.log('e');
console.log(Object.keys(user));
console.log(Object.getOwnPropertyNames(user));
console.log(JSON.stringify(user));
console.log('e');

// 심볼이 객체의 키로 사용되면 이렇게 값을 가져와야 한다
const symbolProperties = Object.getOwnPropertySymbols(user);
console.log(symbolProperties);
console.log(user[symbolProperties[0]]);