// algo
// add event handler
// read form
// post request
// validate form
const url = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users';
const user = {
  email: 'lidoik89@gmail.com',
  firstName: 'Volodymyr',
  lastName: 'Meduna',
  city: 'Lviv',
  age: 31,
};

// const addNewUser = user => {
//   return fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=utf-8',
//     },
//     body: JSON.stringify(user),
//   });
// };

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(user),
})
  // .then(resp => {
  //   console.log(resp);
  // });
  .then(response => {
    return response.json();
  })
  .then(body => {
    console.log(body);
  });
