
var week=new Array(
'月',
'火',
'水',
'木',
'金',
'土',
'日',
'jojojo',
'hhdhhd',
'fhsa'

);

for(i=0;i<week.length;i++){
document.write(week[i]);
}

var today=new Date();
var month=today.getMonth()+1;
var date=today.getDate();
var day=today.getDay()-1;
document.write('<br>今日は'+month+'月'+date+'日('+week[day]+')');




