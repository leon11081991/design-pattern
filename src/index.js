// 類=>模板
/*
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
*/

// 對象=>實例
/*
const leon = new Person("leon", 30);
leon.eat();
*/

// ----------------------------------------------

// 繼承：
// 子類繼承父類
/*
class Student extends Person {
  constructor(name, age, number) {
    super(name, age); // 繼承的屬性用 super()接收
    this.number = number; // 只有 Student 才有的屬性
  }
  study() {
    alert(`${this.name} is studying.`);
  }
}
*/

// 創建實例
/*
let alex = new Student("alex", 22, "A1");
let jack = new Student("jack", 25, "A2");
alex.study();
alex.eat();
jack.speak();
console.log(alex.number);
*/

// ----------------------------------------------

// 封裝：
// 在這裡運行TS https://www.typescriptlang.org/play
// 父類
/*
class People {
  name:string // TS 需要先聲明變數，默認是 public
  age:number  // TS 需要先聲明變數，默認是 public
  protected weight:number // 受保護的屬性，只有自己或子類可以訪問

  constructor(name:string, age:number){
    this.name = name
    this.age = age
    this.weight = 80
  }
  eat() {
    alert(`${this.name} is eat something.`);
  }
  speak() {
    alert(`${this.name} is speaking.`);
  }
}
*/

// 子類
/*
class Student extends People {
  number:string
  private girlfriend:string
  constructor(name:string, age:number, number:string){
    super(name, age)
    this.number = number
    this.girlfriend = 'lisa'
  }
  study() {
    alert(`${this.name} is studying.`);
  }
  getWeight(){
    alert(`Weight: ${this.weight}.`);
  }
}
*/

/*
let alex = new Student("alex", 22, "A1");
alex.getWeight()
*/

// 多型
// 父類
/*
class Person {
  constructor(name) {
    this.name = name;
  }
  saySomething() {}
}
*/

// 子類
/*
class A extends Person {
  constructor(name) {
    super(name);
  }
  saySomething() {
    alert("I am A");
  }
}
*/

// 子類
/*
class B extends Person {
  constructor(name) {
    super(name);
  }
  saySomething() {
    alert("I am B");
  }
}
*/

/*
let a = new A("a");
let b = new B("b");
a.saySomething();
b.saySomething();
*/

// UML 關聯
// 父類
/*
class Person {
  constructor(name, house) {
    this.name = name;
    this.house = house;
  }
  saySomething() {}
}

// 子類
class A extends Person {
  constructor(name, house) {
    super(name, house);
  }
  saySomething() {
    alert("I am A");
  }
}

// 子類
class B extends Person {
  constructor(name, house) {
    super(name, house);
  }
  saySomething() {
    alert("I am B");
  }
}

class House {
  constructor(city) {
    this.city = city;
  }
}

let aHouse = new House("台北市");
let a = new A("a", aHouse);
*/

// 單一職責原則
// 開放封閉原則
function loadImg(src) {
  let promise = new Promise(function (resolve, reject) {
    let img = document.createElement("img");
    img.onload = function () {
      resolve(img);
    };
    img.onerror = function () {
      reject("圖片讀取失敗");
    };
    img.src = src;
  });
  return promise;
}

let src =
  "https://d33wubrfki0l68.cloudfront.net/4af430fdfd803898be710ba089d17db28cd78bfa/3a8ae/img/javascript/hasownprop_for_obj_of_class.png";
let result = loadImg(src);

result
  .then(function (img) {
    // 第一個功能
    alert(`width: ${img.width}`);
    return img;
  })
  .then(function (img) {
    // 第二個功能
    alert(`height: ${img.height}`);
  })
  .catch(function (error) {
    alert(error);
  });
