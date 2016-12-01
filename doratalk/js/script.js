$(function(){
	var talk1=[
		'やあ',
		'ぼく',
		'どらえもん',
		'22世紀からやってきたよ'
		];
			

	$('#talkwrapp').hide();
	$('#dora').css({position:'relative',
					top:'-1000px'	
					});	
	
	setTimeout(function(){
		$('#dora').animate({top:0},2000,'easeInBounce',function(){
			$('#talkwrapp').fadeIn(1000,function(){
				$('#talk1').text(talk1[0]);
			
			});
				
		});
	
	},1000);





});//jQuery end





