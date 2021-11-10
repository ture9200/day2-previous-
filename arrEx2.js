//for문 , for루프라고 부름
for(let i=0; i<10; i++) {
    // i++대신  i= i+1, i<10 (검사식 생략가능), let i =0 을 앞에 빼도 됨
    //for(;;) 로 가능 = while(true)
    console.log(i)

    if(i>=10){
        break
    }
}

//while(i>10) {
    //console.log(i)
    //i=i+1
//}
//for루프 -> while루프로 바꾸는 것 : 면접문제 많이 출시

//한번의 실행을 보증싶을때
do{

}while(i<20){

}