function Storage() {  // 생성자 함수
  this.dataStore = {};
}
Storage.prototype.put = function(key, data) { // 메소드 put 추가
  this.dataStore[key] = data;
}
Storage.prototype.getData = function(key) { // 메소드 getData 추가
  return this.dataStore[key];
}

const productStorage = new Storage(); // Storage 타입의 인스턴스 생성
productStorage.put('id001', { name: '키보드', price: 2000 });
console.log(productStorage.getData('id001')); // { name: '키보드', price: 2000}

function RemovableStorage() {
  Storage.call(this);
}
RemovableStorage.prototype = Object.create(Storage.prototype);
RemovableStorage.prototype.removeAll = function() {
  this.dataStore = {}
}
const productStorage2 = new RemovableStorage();
productStorage2.put('id001', { name: '키보드', price: 2000 });
productStorage2.removeAll();
const item2 = productStorage2.getData('id001');
console.log(item2);