const double = x => x + x;
console.log(double(2)); // 4

const add = (a, b) => a + b;  
console.log(add(1, 2)); // 3

const printArguments = () => {
  console.log(arguments);
}
printArguments(1, 2, 3);  // 화살표 함수는 arguments 객체가 만들어지지 않아 에러 발생

const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}
console.log(sum(1, 2, 3));  // 6

setTimeout(() => {
  console.log('화살표 함수!');  // 화살표 함수!
}, 10);