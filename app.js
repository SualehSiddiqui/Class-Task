// Q2. Write a JS code to print a 2D array
// var arr = [[2, 3, 4],[8, 5, 9]]

// for(var i = 0 ; i<arr.length ; i++){
//     for(var j= 0 ; j<arr[0].length ;j++ ){
//         console.log(arr[i][j]);
//     }
// }

//Q1. Write a JS code to print numbers from 1 to 10
// for (i=1; i<=10; i++){
//     console.log(i);
// }

//Q3. Write a JS code to print Even numbers in given array
// var arr = [13,23,12,45,22,48,66,100];
// for (i=0; i<arr.length;i++){
//     if(arr[i]%2 === 0 ){
//         console.log(arr[i])
//     }
// }

// Q4. Write a JS code to delete all occurrence of element in given array
// var arr = [23,56,4,78,5,63,45,210,56];
// for(i=0; i<arr.length ; i++){
//     if(arr[i] ===56){
//         arr.splice(i,1);
//     }
// }
// console.log(arr)

// Q7. Write a JS code to print a pattern using for loop
// var num="";
// for(var i = 1; i<11; i++ ){
//     num = num + i;
//     console.log(num);
// }

// Q8. Write a JS code to find the no of digits in a number
// var num = prompt("Enter number");
// console.log(num.length)

// Q9. Write a progrma to capitalize whole paragraph
var para = "lorem ipsum dolor saylani amet consectetur adipisicing elit.non minima aut, esse amet saylani quam consequatur debiti.dolorem dicta, saylani inventore recusandae obcaecati quos." 
var temp = para.split("");
for (i=0; i<temp.length; i++){
    if(temp.join("").slice(i,i+7) == "saylani"){
        temp.splice(i, 7 , "S", "M", "I", "T");
    }
}
console.log(temp.join(""));






