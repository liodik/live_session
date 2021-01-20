function getRandomNumbers(length, start, end) {
  if (Math.abs(end - start) < 1) {
    return null;
  }
  const min = Math.ceil(start);
  const max = Math.ceil(end);
  //     for (let i = 0; i < number; i++) {
  //       if (start > 0 && end > 0) {
  //         resArr.push(Math.floor(Math.random() * (end - start + 1)) + start);
  //       } else {
  //         resArr.push(Math.ceil(Math.random() * (end - start + 1)) + start);
  //       }
  //     }
  //     return resArr;
  //   }

  new Array(length).fill().map(el => Math.floor(Math.random() * (max - min) + min));
}
