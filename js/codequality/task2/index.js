// const TIME_TO_GO = 10;
// const SECRET_NAME = 'text';
//
//
// ----  bad
// const withdraw = (clients, balances, client, amount) => {
//   const ind = clients.indexOf(client);
//   if (amount > balances[ind]) {
//     return -1;
//   } else if (amount <= balances[ind]) {
//     const result = [];
//     balances.forEach(num => {
//       if (num === balances[ind]) {
//         result.push(num - amount);
//       } else {
//         result.push(num);
//       }
//     });
//     return result[ind];
//   }
// };

// --- good
// const withdraw=(clients, balances, client, amount)=> {
//   const index =clients.indexOf(client);
//   if (amount>balances[index]) {
//     return -1;
//   }
//   balances[index]-=amount;
//   return balances[index];
//   };

// ---- bad
// function withdraw(clients, balances, client, amount) {
//   let indexOfTheElementClient = clients.indexOf(client);
//   let result;
//   if (clients.includes(client) && balances[clients.indexOf(client)] - amount > 0) {
//     balances.splice(indexOfTheElementClient, 1, balances[indexOfTheElementClient] - amount);
//     return result = balances[indexOfTheElementClient];
//   }
//   return -1;
// }

// ------ good
// function withdraw (clients, balances, client, amount) {
//   const clientIndex =clients.indexOf(client);

//   if (balances[clientIndex]<amount) {
//     return -1;
//   }
//   balances[clientIndex] -=amount;
//   return balances[clientIndex];
// }

// ----bad;
// const withdraw = (clients, balances, client, amount) => {
//   const indexOfClient = clients.indexOf(client);
//   const balanceOfClient = balances[indexOfClient];
//   if (amount > balanceOfClient) {
//     return -1;
//   }
//   return balanceOfClient - amount;
// };

// ---- good
// const withdraw = (clients, balances, client, amount) => {
//   const indexOfClient = clients.indexOf(client);

//   return amount > balances[indexOfClient] ? -1 : balances[indexOfClient] - amount;
// };
