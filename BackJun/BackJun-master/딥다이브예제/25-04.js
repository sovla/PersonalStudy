class Person {
  //  생성자
  constructor(name) {
    this.name = name;
  }
  //    프로토타입
  sayHi() {
    console.log(`Hi ${this.name}`);
  }
  static sayHello() {
    console.log("Hello");
  }
}
