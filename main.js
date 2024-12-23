// * Q1
class Person {
  constructor(name) {
    this.name = name;
  }
}

class Teacher extends Person {
  teach(subject) {
    console.log(`${this.name} is now teaching ${subject}`);
  }
}

const teacher = new Teacher("Ahmed");
teacher.teach("Computer Science");

// * Q2
class Vehicle {
  constructor(wheels, speed) {
    this.wheels = wheels;
    this.speed = speed;
  }
}

class Bike extends Vehicle {
  constructor() {
    super(2, 'fast enough');
    Bike.incrementCount();
  }

  static count = 0;
  static incrementCount() {
    Bike.count++;
  }

  static getCount() {
    return Bike.count;
  }
}

// const bike1 = new Bike();
// const bike2 = new Bike();
// const bike3 = new Bike();

for (let i = 0; i < 20; i++) {
  new Bike();
  console.log(`Bike Call No. ${Bike.getCount()}`);
}

// console.log(Bike.getCount());
