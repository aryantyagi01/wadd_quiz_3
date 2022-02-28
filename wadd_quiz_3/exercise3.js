//Higher order function- 1

function higherOrderGreet(name="Stranger") {
    alert("Hello " + ", " + name + "!");
}

function processUserInput(callback){
    var name = prompt('Enter your name.');
    callback(name);
}
processUserInput(higherOrderGreet);