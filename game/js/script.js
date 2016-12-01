var question=prompt('あなたは何月生まれですか？','月を入れてね');

if(question==1){
 var q_2=prompt('1月の何日生まれですか?','日');
	if(q_2>=1 && q_2<=15){
			var reload=confirm('あなたは今月いろんなものを引き寄せます');
			if(reload){
				location.reload();	
				}

	}else{
			var reload=confirm('体調の変化の月です、宇宙と同調し乗り越えましょう');
			if(reload){
				location.reload();	
				}

	}

}else if(question==2){
alert('2月生まれのラッキーカラーはピンクです');

}else if(question==3){
alert('3月生まれのラッキーカラーはブルーです');

}else if(question>12){
alert('入力にエラーがあります！');
}




