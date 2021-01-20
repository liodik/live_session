const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  timerId: 0,

  // startTimer() {
  //   console.log('start timer was called');

  //   function handler() {
  //     this.secondsPassed += 1;
  //     console.log(this.secondsPassed);
  //   }
  //   const handlerWithContext = handler.bind(this);
  //   // input: func, num;
  //   // output: num;
  //   setInterval(handlerWithContext, 1000);
  // },

  // option 2

  startTimer() {
    console.log('start timer was called');

    const timerId = setInterval(() => {
      this.secondsPassed += 1;

      if (this.secondsPassed === 60) {
        this.secondsPassed = 0;
        this.minsPassed += 1;
      }
      console.log('id ' + timerId);
      console.log('sec ' + this.secondsPassed);
      console.log('min ' + this.minsPassed);
    }, 1000);
    this.timerId = timerId;
  },

  stopTimer() {
    console.log('stop timer was called');
    console.log(this.timerId);

    clearInterval(this.timerId);

    // todo
  },

  getTime() {
    if (this.secondsPassed < 10) {
      this.secondsPassed = `0${this.secondsPassed}`;
    }
    return `${this.minsPassed}:${this.secondsPassed}`;
  },

  resetTimer() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
  },
};

// timer.startTimer();
// timer.stopTimer();
// timer.startTimer();
// console.log(timer.getTime());
// timer.stopTimer();
// input: timerId
// output: underfined
// clearInterval();
