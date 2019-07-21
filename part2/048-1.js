const studentProto = {
  gainExp: function() {
    this.exp++;
  }
};

const monster = {
  name: '하린',
  age: 10,
  exp: 0,
  __proto__: studentProto
};

const bbo = {
  name: "뽀",
  age: 20,
  exp: 10,
  __proto__: studentProto
};

bbo.gainExp();  // 11
monster.gainExp();  // 1
monster.gainExp();  // 2

console.log(monster); // {name: '하린', age: 10, exp: 2}
console.log(bbo); // {name: '뽀', age: 20, exp: 10}