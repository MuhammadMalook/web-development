//Rest operator
//used inside the function's parameter which expects multiple arguments.


//spread operator is used as an argument like (...arr) || ([...arr])
function sum(...params) {
    console.log(params)
}
let arr = [10,20,30]
sum(arr) //it will be considered as a single argument in rest operator defined in sum function //output [[10,20,30]]
sum(...arr) //it will break array into single elements //output = [10,20,30]
sum([...arr]) //it is also same as sending arr as single arrgument due to brackets. //output = [[10,20,30]]

//spread operator as concatenation

let array1 = [10,11,12]
let array2 = [13,14,15]
//let array3 = array1 //deep copy
let array3 = [...array1] //shallow copy of array
array1.push(20)
console.log(array3)
let array4 = [...array1,...array2]
array1.push(50)
console.log(array4) //50 is not updated in array4 due to shallow copy.

console.log([...array1,...array2]) //[ 10, 11, 12, 13, 14, 15 ]
console.log(...array1,...array2) //10 11 12 13 14 15
console.log([...array1,array2]) //[ 10, 11, 12, [ 13, 14, 15 ] ]
console.log([8,9,...array1,...array2]) //[8, 9, 10, 11,12, 13, 14, 15]