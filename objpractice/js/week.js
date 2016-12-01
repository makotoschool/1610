var imura ={
	firstname:'真琴',
	familyname:'井村',
	age:40,
	hobby:'音楽,旅',
	bmi:function(weight,height){
		var result=weight/(height*height);
		return result;	
		}
}

imura.familyname='Imura';

document.write('私の名前は');
document.write(imura.familyname+imura.firstname+'です<br>');
document.write('年齢は'+imura.age+'歳<br>');
document.write('趣味は'+imura.hobby+'です<br>');
document.write(imura.bmi(60,1.73));







