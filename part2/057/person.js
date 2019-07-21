export default class Person {
  constructor(speed) {
    this.speed = speed;
  }
  speedUp(n=0) {
    console.log(`before speed = ${this.speed}`);
    this.speed += n;
    console.log(`after speed = ${this.speed}`);
  }
}