// function main(a){
//     let newArr = []
//     for(let i = 1;i<=a;i++){
//         for(let j =1;j<=i;j++){
//             if(i%j === 0){
//                 newArr.push(i)
//             } 
//         }
//     }
//   return  newArr.length
// }
// console.log(main(10))

// 5    (1*1) + (1*2) + (1*2*3) + (1*2*3*4) + (1*2*3*4*5)

// function main(a){

//   for(var i = 1;i<=a;i++){
//     for(let j = 1;j<=i;j++){
//       var sum = j
//       sum *=j*j
    
//     }

//     sum +=sum
    
//   }
//  return sum
// }
// console.log(main(5))





//                     //  data types


// //  primitive                       non-primitive    
                                
//  number                          // array
//  string                          // object
//  boolen                          // funtion
//  symbol                           // Map  weakMap
//  null                             // set   weakSet
//  undefind
//  NaN



//  console.log(BigInt(10))


// [
//     {userId:1,usernmae:'nodir',age:21},
//     {userId:1,usernmae:'nodir',age:21},
//     {userId:1,usernmae:'nodir',age:21},
//     {userId:1,usernmae:'nodir',age:21},
//     {userId:1,usernmae:'nodir',age:21},
//     {userId:1,usernmae:'nodir',age:21},

// ]




//                     // functions

// //  regular function             


//  function main(a,b){          

//     if(a-b == 2){
//         return a-b
//     }else{
//         return a + b
//     }
       
//  }   

//   main

//  console.log(main(2,3));    








// const main = (a) => {
//        for(let i = 1;i<=a;i++){
//            if(i%2 === 0){
//             console.log(i + '---- juft son')
//            }else{
//             console.log(i + '---- toq son')
//            }
//        }
// }

// console.log(main(100))






// function time(a){

// let time = Math.floor(a/3600)
// let min = a%3600

//     return `${time} soat ${min/60} minut o'tdi`
// }

// console.log(time(3600))

// function main(){
//     let a =1
//     let num = 10
//     return `${num} --- ${a}`
// }
// console.log(main())


// let a = 11

// a== 10 ? console.log('bu 10'): console.log('bu 10 emas');


// if(a/2== 5 && a/a == 1){
//     console.log('bu sonni ikkita boluchisi bor')
// }else{
//     console.log('2 ta yoq')
// }



// let obj = {
//     id:1,
//     name:'nodir',
//     age:21
// }

// obj.freeze()

// console.log(obj)



