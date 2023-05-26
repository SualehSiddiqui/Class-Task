// Head or Tail
// var firstUserName = window.prompt("Enter First Player Name");
// var secondUserName = window.prompt("Enter Second Player Name");
// var headOrTail = window.prompt(firstUserName + " Choose Head or Tail")
// var num = Math.random();
// var toss = Math.round(num);
// if (toss == 1){
//     console.log( firstUserName + " Won")
// }
// else{
//     console.log(secondUserName + " Won")
// }

//Dice
// var num = Math.random()* 5;
// var diceNum = Math.round(num+1);
// console.log(diceNum) 

//Password;
// var pass = "";
// for (var i = 0; i<10; i++){
//     var num = Math.random()*i;
//     // var temp = num*i;
//      pass = pass + Math.round(num)
// }
// console.log(pass)
// var string = ["a", "b", "e" ,"k"]
// var num1 = Math.random().round();
// console.log()
// for(var i=; i<4)


//Auto Password
var smallAlphabet = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var largeAlphabet = ["A", "B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var  specialChar = ["@","!","#","$","%","^","&","*","_","(",")"];
var password = [];
var shuffle = Math.random();
for(var i = 0; i < 3; i++){
    var randomNum = Math.random()*25;
    if( shuffle < 2 && shuffle > 0 ){
        password.push(smallAlphabet[Math.floor(randomNum)]);
    }
    else{
        password.shift(smallAlphabet[Math.floor(randomNum)]);
    }
}
console.log(password)