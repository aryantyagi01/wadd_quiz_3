let text = "";
var myArr = ["one", "two", "three", "four"];
myArr.forEach(myFunction);
 
function myFunction(item, index) {
  text += index + ": " + item + "<br>"; 
}