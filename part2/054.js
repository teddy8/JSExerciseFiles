// 전역 객체인 window 객체를 접근
this.valueA = 'a';
console.log(valueA);
valueB = 'b';
console.log(this.valueB);

function checkThis() {
  console.log(this);
}
function checkThis2() {
  "use strict"; // 엄격한 모드 (window의 this 접근 불가)
  console.log(this);
}
checkThis();
checkThis2();

function Product(name, price) {
  this.name = name;
  this.price = price;
}
const product1 = Product('가방', 2000); // new 키워드 없이 생성했기 때문에 전역 객체인 window를 가리킴
console.log(window.name); // '가방'
console.log(window.price);  // 2000

const product2 = {
  name: '가방2',
  price: 3000,
  getVAT() {  // 객체 내의 메소드에서 사용한 this는 그 객체를 가리킴
    return this.price / 10;
  }
}
const valueOfProduct2 = product2.getVAT();
console.log(valueOfProduct2); // 300

const calVAT = product2.getVAT; // 근데 this를 메소드에서 사용했더라도 메소드를 다른 변수에 저장하고 그 변수를 통해 호출하면 
const VAT2 = calVAT();          // 일반적인 함수 호출이 되어 this는 전역 객체를 가리킴
console.log(VAT2);  // 200

const newCalVAT = calVAT.bind(product2);  // 근데 또 this는 bind를 통해 변경할 수 있다.
const VAT3 = newCalVAT();                 // bind외에 call과 apply로도 가능하다
console.log(VAT3);  // 300

const counter1 = {
  count: 0,
  addAfter1Sec() {
    setTimeout(function() {
      this.count += 1;
      console.log(this.count);  // NaN
    },1000)
  }
};
counter1.addAfter1Sec();

const counter2= {
  count: 0,
  addAfter1Sec() {
    setTimeout(() => {
      this.count += 1;
      console.log(this.count);  // 1
    }, 1000)
  }
};
counter2.addAfter1Sec();

// 화살표 함수와 bind가 자바스크립트에 추가되기 전에 사용하던 방법
const counter1 = {
  count: 0,
  addAfter1Sec() {
    const me = this;
    setTimeout(function () {
      me.count += 1;
      console.log(this.count);
    }, 1000)
  }
};
counter1.addAfter1Sec();