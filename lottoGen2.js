//배열 생성
const arr=[]

// 1~45까지 숫자 생성
for(let i=1; i<=45;i++){
    arr.push(i)

}
    console.log(arr)

//
for(let i=0; i<6; i++){
    const idx=parseInt(Math.random()*arr.length)
    arr.splice(idx,1)
   console.log(arr)
}