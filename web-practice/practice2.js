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





//
let person = {Name:"Malook",Age:20,Address:{city:"khanpur Mahar",district:"ghotki",province:"sindh"},phone:"01234"}
const {Name,Age,Address:{province},phone} = person
console.log(province)

//closure function
function outer()
{
    let count = 0;
   return  function inner()
    {
        return count=count+1
    }
}
const newF = outer();
console.log(newF())
console.log(newF())
console.log(newF())



// function f1()
// {
//     let count = 0;
//     return function f2(){
//         return count = count+1
//     }
// }

// const f = f1()
// console.log(f())
// console.log(f())

// console.log(f())
// console.log(f())

//rest operator
//must be the last parameter
function func(b,...a)
{
    console.log(b)
}
func(1,2,3,4,5)

function sum(a,b)
{
    return a+b
}
//higher order function
function higher(func,a,b)
{

    return func(a,b)
}
console.log(higher(sum,10,20))

//forEach()
let array = [1,2,"hello",'z',"zyx",23]
array.forEach(item=>console.log(item))
array.forEach((item)=>{console.log(item)})
let array1 = array.forEach(item=>item*2)
console.log(array1)

//map()
let array = [1,2,3,4,5]
let newArray = array.map(itm=>itm*2)
console.log(newArray)
let newArray1 = array.map((itm,ind)=> {return itm*ind})
console.log(newArray1)

//filter()
let array = [1,2,3,4,5]
let newArray = array.filter(itm=>itm%2==0)
console.log(newArray)

//reduce()
let array = [1,2,3,4,5]
let sum = array.reduce((acc,curr)=>acc+=curr)
console.log(sum) //sum of all elements = 15

//find()
let array = [1,2,3,4,5]
let find = array.find(itm=>itm>1)
console.log(find)

//some()
let array = [1,2,3,4,5]
let yes = array.some(itm=>itm == 6)
console.log(yes)

//every()
let array = [1,2,3,4,5]
let yes = array.every(itm=>itm%2==1 || itm%2==0)
console.log(yes)



let array = [1,2,3,4,5]
let newArray1 = array.map(itm=>{ itm*2})
console.log(newArray1)



let array = [1,2,3,4,5]
let yes = array.forEach(function(itm){console.log(itm)})
console.log(yes)

//sort()
let array = [1,2,3,4,5]
let arr = array.sort((a,b)=>{return b-a})
console.log(arr)

//some()
//returns boolean value
let array = [1,2,3,4,5]
let arr = array.some((itm)=>{return itm>4})
console.log(arr)

//every
let array = [1,2,3,4,5]
let arr = array.every((itm)=>{return itm>0})
console.log(arr)


//promises
//used to achieve asynchronous behavior.
//since javascript has synchronous behavior.

// let id= setInterval(
//     function f1()
//     {
//         return 2*5;
//     },3000);
// console.log(5*data);
// clearInterval(id)


function buycake(cake)
{
    return new Promise((resolve,reject)=>{
        if(cake=="chocolate")
        {
            resolve("done!")
        }
        else
        {
            reject("i will not let you celebrate my birthday")
        }
    })
}
buycake("chocolate").then(res=>console.log(res)).catch(res=>console.log(res))

//template litterals or backticks (``)
let Name="Malook"
console.log(`My name is ${Name}`)

//arrow functions
let ar = ()=>{
    console.log("arrow")
}
ar()


//enhanced object literal
let obj = {Name:"Malook",Age:21}
console.log(obj.Name)
//Now using enhanced literal
let Name="Malook"
let age = 20
let obj = {Name,age}
console.log(obj.Name)


//destructuring
//object destructring
let obj = {Name:"Malook",Age:21,Address:{city:"khanpur mahar",district:"ghotki",province:"sindh"},phone:"1234"}
const {Address:{province}} = obj
console.log(province)

//array destructuring
let ar = [1,2,3,4,5,[6,7,8],9,10]
const [,,,,,[a]] = ar
console.log(a)

//defualt operator
function f2(a=1)
{
    console.log(a)
}
f2(2)

//rest ...
//spread ...

//spread operator
let arr1 = [1,2,3,4,5],arr2 = [5,6,7,8]
console.log(['a','b',...arr1,...arr2])

function b(...x)
{
    console.log(x) 
}
let arr1 = [1,2,3,4,5]
b(arr1) //without rest operator // output [[1,2,3,4,5]]
b(...arr1) //spread operator // output [1,2,3,4,5]

//Generators
//simple function executes only once 
//Just like regular function, returns a single value, but generator can be iterate as we want.

function* generator()
{
    yield 1,
    console.log("hello")
    yield 2,
    yield 3
}
let gen = generator()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())


