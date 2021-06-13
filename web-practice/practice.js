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




//javascript
function sum(a,b)
{
    return a+b;
}
console.log(sum(2,4))

//
const myFunc = (a,b)=>a+b;
console.log(myFunc(4,5)) 
//
const myFunc = (a,b)=>{return a+b;}

console.log(myFunc(4,5)) 

//ES6

//Rest operator
function myF(a,...rest)
{
    console.log(rest)
}
//myF(12,23,44,55,56)

//spread operator
//var ar = [1,2,3,4];
//myF(12,...ar)

let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];
let arr3 = [...arr1,...arr2,9,10,11]

console.log(arr3)

//array destructuring
let array1 = [1,2,3,4,5,[6,7,8],9,10];
const [,,,,a,[b,c,d],e] = array1;
console.log(c+ " "+e)

//object destructuring
let obj = {Name:"Malook",age:21,address:{city:"kpm",district:"ghotki"}};
console.log(obj.address.district)
const {address:{district,city}} = obj;
console.log(district)

//generators
function* myGen()
{
    yield 12,
    yield 15,
    console.log("after yeild2")
    yield 20;
}
let gen = myGen();
for (const iterator of gen) {
    console.log(iterator)
}

//map function
let array1 = [1,2,3,4]
let arrayNew = array1.map((elment) => elment%2)
console.log(arrayNew)
//filter
//returns an array of filtered element on the basis of condition
let filteredarray = array1.filter((element)=>element>2)
console.log(filteredarray)

//reduce
//takes two parameters (accumulator,currrentvalue)
//if we want the sum of an array we will use reduce function.
//returns a single elements

let array = [4,2,1,5,3]
let sum = array.reduce((acc,cur)=>acc = acc+ cur);
console.log(sum)

//find()
//it returns single element 
let el = array.find((element)=>element>3)
console.log(el)
//findIndex
let ind = array.findIndex((element)=>element>3)
console.log(ind)

//sort()
let sortedarray = array.sort();
console.log(sortedarray)


