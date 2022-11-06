const array = [1, 2, 3, 4, 5, 6, 7];
// // Результат: [1, 2, 3, 4, 6, 7]

function removeElement(array, item) {
  while (array.includes(item)) {
    const index = array.indexOf(item);
    array.splice(index, 1);
  }
}

removeElement(array, 3);
console.log(array);

// function removeElement(array, item) {
//   array.forEach((element, index) => {
//     if (element === item) {
//       array.splice(index, 1);
//     }
//   });
// }
