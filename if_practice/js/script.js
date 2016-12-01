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



