//関数化してみよう
//document.writeは出力する場所で行うようにする

function timeMsg(){
var myHour =5;
var msg='';
if(myHour>=8 && myHour<=11){
msg='今はモーニングです';

}else if(myHour==12){
msg='今はランチタイムです';

}else if(myHour>=13 && myHour<=15){
msg='今はカフェタイムです';

}else if((myHour>=22 && myHour<24)||(myHour>=0 && myHour<8)){
msg='現在閉店中です';

}else{//それ以外の時
msg='通常営業';

}

return msg;
}//end timeMsg()




/*
var myHour =23;

if(myHour>=8 && myHour<=11){
document.write('今はモーニングです');

}else if(myHour==12){
document.write('今はランチタイムです');

}else if(myHour>=13 && myHour<=15){
document.write('今はカフェタイムです');

}else if((myHour>=22 && myHour<24)||(myHour>=0 && myHour<8)){
document.write('現在閉店中です');

}else{//それ以外の時
document.write('通常営業');

}

*/


