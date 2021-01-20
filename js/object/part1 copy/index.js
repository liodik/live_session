// function markAdmins(users, adminIds) {
//   users.map(el => {
//     if (adminIds.includes(el.id)) {
//       el.isAdmin = true;
//     } else {
//       el.isAdmin = false;
//     }
//   });
//   return users;
// }

// const markAdmins = (users, adminIds) =>
//   users.map(el =>
//     adminIds.includes(el.id) ?
//     { ...el, isAdmin: true } :
//     { ...el, isAdmin: false }
//   );

// function markAdmins(users, adminIds) {
//   return users.map(el => {
//     let isAdmin = false;
//     if (adminIds.includes(el.id)) {
//       isAdmin = true;
//     }
//     return { ...el, isAdmin: isAdmin };
//   });
// }

function markAdmins(users, adminIds) {
  return users.map(el => {
    let isAdmin = adminIds.includes(el.id);
    return { ...el, isAdmin };
  });
}

const adminIds = ['2', '8'];
const users = [
  { id: '4', name: 'Bob' },
  { id: '2', name: 'Tom' },
  { id: '5', name: 'Sam' },
  { id: '8', name: 'Tad' },
];
console.log(markAdmins(users, adminIds));
