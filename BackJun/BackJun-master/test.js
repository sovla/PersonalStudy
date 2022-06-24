class User {
  constructor(name) {
    console.log("constructor", name);
    this.name = name;
  }
  get name() {
    console.log("getter", this._name);
    return this._name;
  }
  set name(value) {
    console.log("setter", value);
    if (value.length < 4) {
      console.log("이름이 짧음");
      return;
    }
    this._name = value;
  }
}

let user = new User("보라보라보라");
console.log(user.name);

user = new User("");
