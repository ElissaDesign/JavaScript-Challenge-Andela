//Write a Javascript function that takes an array of numbers and return a reversed version. Note: here you are not allowed to use an intermediary array. You need to use the same array passed in the parameter and just reverse its content. Do not use inbuilt functions like reverse(). Just use loops and conditions.


let arry=[];

function reverseArray(array){
    for(let i=array.length-1;i>=0;i--){
        arry.push(array[i]);
    }
    return arry;
    
}
console.log(reverseArray([1,2,3,4,5,6]));