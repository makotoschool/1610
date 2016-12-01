var list=new Array(
	{name:'井村真琴',pref:'兵庫県',city:'神戸市'},
	{name:'山田太郎',pref:'兵庫県',city:'西宮市'},
	{name:'吉田啓介',pref:'大阪府',city:'大阪市'}
);

	//document.write(list[2].name);

for(i=0;i<list.length;i++){
	var no=i+1;
	document.write('<dt>会員番号'+no+list[i].name+'</dt>');
	document.write('<dd>住所(県)'+list[i].pref);
}






