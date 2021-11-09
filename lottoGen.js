 const arr=[]
 //const temp=[1,2,3]
 arr.push(1)
 arr.push(2)
 console.log(arr)

 while(true) {  //항상 true 무한루프
  ///숫자를 생성 1-45 사이의 숫자
  const num= parseInt(Math.random()*45)+1
  console.log(num)
  //const num = 10

  //검사
  const index = arr.indexOf(num)
  //console.log('NUM:${num} INDEX:${index}')


  if (index >= 0) {
   continue
  }
  const newLength = arr.push(num)

  if(newLength===6){
   break
  }

 }
 console.log("END") //UNREACHABLE CODE

//1.빈배열
 //2.배열에 숫자를 채워넣는다. 1~45 반복문
 //3.