
const readLine= require('readline-sync');
//const Console = require("console");
// const readlinesync= require(
// console.log("ODD EVEN")
// const answer= readLine.prompt()
// console.log(answer)

const r1=20
const r2=10

//console.log(Math.PI)
const area1= Math.pow(r1,2)* Math.PI
const area2= Math.pow(r1,2)* Math.PI

let gap=area1-area2
//if 삼항연산자

gap=gap<0? gap*-1 : gap

gap=gap.toFixed(2)
//console.log ("이 도형의 넓이는"+ gap)
console.log( '이 도형의 넓이는 ${gap} 입니다')

// if (gap<0) {
//     gap*-1
// }

// const num= Math.pow(2,4)
// console.log(num)
// r1 *r1 *Math.PU
