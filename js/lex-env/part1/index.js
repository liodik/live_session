/* eslint-disable */

const message = 'Test';
const weight = 55;

function run() {
  console.log('RUN');
}

function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';
  let count = 0;
  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }
  function countMessage() {
    count++;
    console.log(count + 'was send');
  }

  return {
    sendMessage,
    setMessage,
    setSender,
    countMessage,
  };
}

const messanger = createMessenger();
// run();

// global lex environment
// {
//   enviromentRecord : {
//     message: 'test',
//     weight:55,
//     run:func,
//     createMessengermessager: func,
//   }
//   outer:null
// }

// createMessenger lex environment
// {
//   enviromentRecord : {
//     message: '',
//     sender:'',
//     sendMessage:func,
//     .....
//   },
//   outer: global

// loop lex environment
// enviromentRecord : {
//   i=0;
// }
// outer: global

// sendMessenger lex environment
// {
//   enviromentRecord : {
//
//   },
//   outer: createMessanger lex enviroment
