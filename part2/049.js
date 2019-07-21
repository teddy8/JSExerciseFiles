function Teacher(name, age, subject) {
  this.name = name;
  this.age = age;
  this.subject = subject;
  this.teach = function (student) {
    console.log(student + '에게 ' + this.subject + '를 가르칩니다.');
  };
}

const jay = new Teacher('jay', 30, 'JavaScript');
console.log(jay); // Teacher {name: "jay", age: 30, subject: "JavaScript", teach: f}
jay.teach('bbo'); // 'bbo에게 JavaScript를 가르칩니다'

console.log(jay.constructor); // f Teacher(name, age, subject) {...}
console.log(jay instanceof Teacher);  // true

const jay2 = Teacher('jay', 30, 'JavaScript');
console.log(jay2);  // new를 안썼으므로 undefined
console.log(age); // 30