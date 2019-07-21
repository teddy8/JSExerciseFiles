// 리터럴 표기법으로 객체를 family 변수에 대입하고 있는 것
var person = {
  'name': 'chulsu',
  members: {},
  addFamily: function(age, name, role) {
    this.members[role] = {
      age: age,
      name: name
    };
  },
  getHeadcount: function() {
    return Object.keys(this.members).length;
  }
};

person.addFamily(30, 'chloe', 'aunt');
person.addFamily(3, 'lyn', 'niece');
person.addFamily(10, 'dangdangi', 'dog');
console.log(person.getHeadcount()); // 3