const person = {
  firstName: "Ungmo",
  lastName: "Lee",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
};
console.log(person.firstName + " " + person.lastName); // Ungmo Lee
//  set fullName(name)
person.fullName = "Heegun Lee";
console.log(person); // { firstName: 'Heegun', lastName: 'Lee', fullName: [Getter/Setter] }
//  get fullName()
console.log(person.fullName); // Heegun Lee

let descriptor = Object.getOwnPropertyDescriptor(person, "fullName");
console.log(descriptor);
// 접근자 프로퍼티
// {
//     get: [Function: get fullName],
//     set: [Function: set fullName],
//     enumerable: true,
//     configurable: true
//   }
