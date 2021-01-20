class Sportsman {
  constructor(name) {
    this.name = name;
  }

  run() {
    console.log(`${this.name} is runnig`);
  }
  // get name() {
  //   if(this.name.length<3) {
  //     throw new Error('invalid name');
  //   }
  //   return this.name;
  // }
}

class Swimmer extends Sportsman {
  constructor(name, swimmingStyle) {
    // can lose context -- example 1
    super(name);
    this.swimmingStyle = swimmingStyle;
  }
  swim() {
    // console.log(this);
    console.log(`${this.name} is swimming ${this.swimmingStyle}`);
  }
  // testFunc() {
  //   const binded = this.swim(bind.this);
  //   setTimeout(binded, 1000);
  // }
}

// testing
// const sportsman = new Sportsman('Denis');
// const swimmer = new Swimmer('user', 'some style');
// swimmer.name;
// swimmer.swim();

// can lose context -- example 3
// const swimFunc = swimmer.swim;
// swimFunc();

// can lose context -- example 2
// console.log('static Call');
// Swimmer.swim();

const runner = new Sportsman('Tom');
console.log(runner);
runner.run();

const swimmer2 = new Swimmer('tom', 'breaststroke');
console.log(swimmer2);
swimmer2.swim();
