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
/*
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
*/

/*
class Car {
  constructor(name, number) {
    this.name = name;
    this.number = number;
  }
}

class Fast extends Car {
  constructor(name, number) {
    super(name, number);
    this.price = 1;
  }
}

class Custom extends Car {
  constructor(name, number) {
    super(name, number);
    this.price = 2;
  }
}

class Trip {
  constructor(car) {
    this.car = car;
  }
  start() {
    console.log(`該車名稱：${this.car.name}，該車號碼：${this.car.number}`);
  }
  end() {
    console.log(`總金額：${this.car.price * 5}`);
  }
}

let car = new Fast("快車", 100);
let trip = new Trip(car);
trip.start();
trip.end();
*/

/*
// 車子
class Car {
  constructor(number) {
    this.number = number;
  }
}
// 層
class Floor {
  constructor(level, parkcells) {
    this.level = level;
    this.parkcells = parkcells || []; // 停放格數量
  }
  emptyParkCellNum() {
    let num = 0;
    this.parkcells.forEach((cell) => {
      if (cell.empty) {
        num = num + 1;
      }
    });
    return num;
  }
}
// 車位
class ParkCell {
  constructor() {
    this.empty = true;
  }
  in() {
    this.empty = false;
  }
  out() {
    this.empty = true;
  }
}

// 攝影機
class Camera {
  shot(car) {
    return {
      num: car.number,
      inTime: Date.now(),
    };
  }
}

// 螢幕
class Monitor {
  show(car, inTime) {
    console.log(`車號： ${car.number}`);
    console.log(`停出時間： ${Date.now() - inTime}`);
  }
}

// 停車場
class Park {
  constructor(floors) {
    this.floors = floors || [];
    this.camera = new Camera();
    this.monitor = new Monitor();
    this.carList = {}; // 儲存攝影機拍攝返回的車輛訊息
  }
  in(car) {
    // 通過攝影機獲取訊息
    const info = this.camera.shot(car);
    // 停到某個停車位
    const index = parseInt((Math.random() * 100) % 100);
    const parkcell = this.floors[0].parkcells[index];
    parkcell.in();
    info.parkcell = parkcell;
    this.carList[car.number] = info;
  }
  out(car) {
    const info = this.carList[car.number];
    const parkcell = info.parkcell;
    parkcell.out();
    this.monitor.show(car, info.inTime);
    delete this.carList[car.number];
  }
  emptyNum() {
    return this.floors
      .map((floor) => {
        return `${floor.level}層，還有 ${floor.parkcells.length}個停車位`;
      })
      .join("\n");
  }
}

const floors = [];
for (let i = 0; i < 3; i++) {
  const parkcell = [];
  for (let j = 0; j < 100; j++) {
    parkcell[j] = new ParkCell();
  }
  floors[i] = new Floor(i + 1, parkcell);
}

const park = new Park(floors);

const car1 = new Car(100);
const car2 = new Car(200);
const car3 = new Car(300);

console.log("第一輛車進入");
console.log(park.emptyNum());
park.in(car1);
console.log("第二輛車進入");
console.log(park.emptyNum());
park.in(car2);
console.log("第一輛車離開");
park.out(car1);
console.log("第二輛車離開");
park.out(car2);
*/

// 工廠模式
class Product {
  constructor(name) {
    this.name = name;
  }
  init() {
    alert("init");
  }
  fn1() {
    alert("fn1");
  }
}

class Creator {
  create(name) {
    return new Product(name);
  }
}

// new 一個工廠
let create = new Creator();
// 透過工廠創一個 product
let product = create.create("漢堡");
product.init();
product.fn1();
