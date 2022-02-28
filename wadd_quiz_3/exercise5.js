var mySecondArr = [1, 2, 3, 4];
mySecondArr.forEach(myFunction)

function myFunction(item, index, arr) {
  arr[index] = item * item;
}