const arr=['타노스', '아이언맨', '블랙 위도우']
// console.log(arr.length)
//
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// // console.log(arr[3]) = Error
// //맨 마지막에 추가
// const changedLength= arr.push("블랙팬서")
// console.log(changedLength)
// //console.log(arr.indexOf("캡틴 아메리카"))
// console.log(arr)
// arr.splice(1,1)
// console.log(arr)

for(let i=0; i<arr.length;i++){
    //for(초기문; 검사식;변환식)
    //while(검사식){ 실행문}
    if (arr[i] === '블랙위도우') {
        continue
    }
    console.log(i)
    console.log(arr[i])
}
     console.log("------------")
    //console.log("i"+i)
