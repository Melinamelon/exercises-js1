function secondMatchesAmy(array) {
  if ( array[2]==="Amy") {
    return "Second index matched!";
  }
  return "Second index not matched";
}
const arr = ['banana', 'strawberry', 'Amy', 'kiwi', 'fig', 'orange'];
const arr2 = ['banana', 'hola', 'strawberry', 'kiwi', 'fig', 'orange'];
const arr3 = ['banana', 'strawberry', 'Amy', 'kiwi', 'fig', 'orange'];

console.log(secondMatchesAmy(arr));
console.log(secondMatchesAmy(arr2));
console.log(secondMatchesAmy(arr3));