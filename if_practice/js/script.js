var myHour =11;

//午前と午後で出力メッセージを変える
//0-12午前
//12-24 午後

if(myHour<12){
document.write('今は午前です');

}else if(myHour==12){
document.write('今はランチタイムです');

}else{//それ以外の時
document.write('今は午後です');

}




