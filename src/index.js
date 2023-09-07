// 類=>模板
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    alert(`${this.name} is eat something.`);
  }
  speak() {
    alert(`${this.name} is speaking.`);
  }
}

// 對象=>實例
const leon = new Person("leon", 30);
leon.eat();

// 子類繼承父類
class Student extends Person {
  constructor(name, age, number) {
    super(name, age);
    this.number = number;
  }
  study() {
    alert(`${this.name} is studying.`);
  }
}
