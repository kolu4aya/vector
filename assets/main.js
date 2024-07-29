$(document).ready(function() {
	pos=0;
	n=1;
	$('.slide').eq(0).css('background-image', 'url("assets/img/slide'+n+'.webp")')
	mastext=['Животноводческие комплексы', 'Животноводческие комплексы', 'Обслуживание электрооборудования', 'Обслуживание электрооборудования', 'Электромонтажные работы квартир и коттеджей', 'Электромонтажные работы квартир и коттеджей', 'Производственные помещения', 'Производственные помещения']
	move(n)
function moveright(n){
	$('.left, .right').css('pointer-events', 'none')
	/*Добавляем в конец новый слайд и задаем фон*/
	$('.slideline').append('<div class="slide"></div>')
	$('.slide').eq($('.slide').length-1).css('background-image', 'url("assets/img/slide'+n+'.webp")')
	/*Добавляем новый блок текста*/
	$('.slidetext').append('<div class="textcontainer"><div class="text"></div><p>'+mastext[n-1]+'</p></div></div>')
	/*сдвигаем слайд*/
	$('.slideline').css('transform', 'translate3d(-100%, 0,0)')
	$('.slideline').css('transition-duration', '1s')
	$('.slideline').css('transition-timing-function', 'cubic-bezier(0.6, 0.1, 0.15, 0.8)')
	/*Сдвигаем блок текста*/
	$('.slidetext').css('transform', 'translate3d(-100%, 0,0)')
	$('.slidetext').css('transition-duration', '1s')
	$('.slidetext').css('transition-timing-function', 'cubic-bezier(0.6, 0.1, 0.15, 0.8)')
	/*поворачиваем блок текста и сдвигаем текст в исходное положение */
	$('.textcontainer').eq(1).children('.text').css('transform', 'rotateY(90deg) scaleX(0)')
	$('.textcontainer').eq(1).children('.text').css('transform-origin', 'left')
	$('.textcontainer').eq(1).children('.slidetext p').css('transform', 'translateY(350px)')
	$('.textcontainer').eq(1).children('.slidetext p').css('transition-duration', '0s')
	$('.textcontainer').eq(1).children('.slidetext p').css('transition-timing-function', '')
	$('.item').removeClass('active')
		$('.item').eq(n-1).addClass('active')
	setTimeout(function(){
		$('.left, .right').css('pointer-events', 'auto')
		/*удаляем старый слайд*/
		$('.slide').eq(0).remove()
		//удаляем старый блок текста
		$('.textcontainer').eq(0).remove()
		//сдвигаем слайды в 0
		$('.slideline').css('transition-duration', '0s')
		$('.slideline').css('transition-timing-function', '')
		$('.slideline').css('transform', 'translate3d(0%, 0,0)')
		//сдвигаем блок текста в 0
		$('.slidetext').css('transition-duration', '0s')
		$('.slidetext').css('transition-timing-function', '')
		$('.slidetext').css('transform', 'translate3d(0%, 0,0)')
		/*включаем поворот блока текста*/
		$('.text').css('transition-duration', '1s')
		$('.text').css('transform', 'rotateY(0deg) scaleX(1)')
		$('.text').css('transform-origin', 'left')
		//выезд текста
		$('.slidetext p').css('transform', 'translateY(0)')
		$('.slidetext p').css('transition-duration', '1s')
		$('.slidetext p').css('transition-timing-function', 'cubic-bezier(0.6, 0.1, 0.15, 0.8)')
	
},1100)
}
function moveleft(n){
	$('.left, .right').css('pointer-events', 'none')
	
	/*Добавляем новый блок текста*/
	$('.slidetext').prepend('<div class="textcontainer"><div class="text"></div><p>'+mastext[n-1]+'</p></div></div>')
	/*сдвигаем слайд в исходное положение*/
	$('.slideline').css('transform', 'translate3d(-100%, 0,0)')
	$('.slideline').css('transition-duration', '0s')
	$('.slideline').css('transition-timing-function', '')
	/*Добавляем в конец новый слайд и задаем фон*/
	$('.slideline').prepend('<div class="slide"></div>')
	$('.slide').eq(0).css('background-image', 'url("assets/img/slide'+n 
		+'.webp")')
/*сдвигаем текст в исходное положение*/
	$('.slidetext').css('transform', 'translate3d(-100%, 0,0)')
	$('.slidetext').css('transition-duration', '0s')
	$('.slidetext').css('transition-timing-function', '')
	/*поворачиваем блок текста и сдвигаем текст в исходное положение */
	$('.textcontainer').eq(0).children('.text').css('transform', 'rotateY(90deg) scaleX(0)')
	$('.textcontainer').eq(0).children('.text').css('transform-origin', 'left')
	$('.textcontainer').eq(0).children('.slidetext p').css('transform', 'translateY(350px)')
	$('.textcontainer').eq(0).children('.slidetext p').css('transition-duration', '0s')
	$('.textcontainer').eq(0).children('.slidetext p').css('transition-timing-function', '')
	$('.item').removeClass('active')
		$('.item').eq(n-1).addClass('active')
	setTimeout(function(){
		/*сдвигаем слайд*/
	$('.slideline').css('transform', 'translate3d(0%, 0,0)')
	$('.slideline').css('transition-duration', '1s')
	$('.slideline').css('transition-timing-function', 'cubic-bezier(0.6, 0.1, 0.15, 0.8)')
	/*Сдвигаем блок текста*/
	$('.slidetext').css('transform', 'translate3d(0, 0,0)')
	$('.slidetext').css('transition-duration', '1s')
	$('.slidetext').css('transition-timing-function', 'cubic-bezier(0.6, 0.1, 0.15, 0.8)')
	
	},100)
	setTimeout(function(){
	$('.left, .right').css('pointer-events', 'auto')
	/*удаляем старый слайд*/
	$('.slide').eq(1).remove()
	//удаляем старый блок текста
	$('.textcontainer').eq(1).remove()
	//сдвигаем слайды в 0
	$('.slideline').css('transition-duration', '0s')
	$('.slideline').css('transition-timing-function', '')
	$('.slideline').css('transform', 'translate3d(0, 0,0)')
	//сдвигаем блок текста в 0
	$('.slidetext').css('transition-duration', '0s')
	$('.slidetext').css('transition-timing-function', '')
	$('.slidetext').css('transform', 'translate3d(0%, 0,0)')
	/*включаем поворот блока текста*/
	$('.text').css('transition-duration', '1s')
	$('.text').css('transform', 'rotateY(0deg) scaleX(1)')
	$('.text').css('transform-origin', 'left')
	//выезд текста
	$('.slidetext p').css('transform', 'translateY(0)')
	$('.slidetext p').css('transition-duration', '1s')
	$('.slidetext p').css('transition-timing-function', 'cubic-bezier(0.6, 0.1, 0.15, 0.8)')
},1100)
}
$('.right').click(function(){
	if (n==8) {
		n=1
	} else {
	n++;
	}
	moveright(n)
	
})
$('.left').click(function(){
	if (n==1) {
		n=8
	} else {
	n--;
	}
	moveleft(n)
	
})
function move(){
	if (!$('.slider').is(':hover')) {
	if (n==8) {
		n=1
	} else {
	n++;
	}
	moveright(n)
	
        setTimeout(move, 4000)
     } else {
    	function check() {
    		if (!$('.slider').is(':hover')) {
    			
        	setTimeout(move, 2000)
        	return
    		} else {
    			setTimeout(check, 1000)
    		}
    	}
    	check() 
    	return
    }

}
$('.item').click(function(){
	if ($('.item').index(this)>n){
		moveright($('.item').index(this)+1)
		
	} else {
		moveleft($('.item').index(this)+1)
	}
		n=$('.item').index(this)
		$('.item').removeClass('active')
		$('.item').eq(n).addClass('active')
	})

$('.btn').click(function(){
	$.ajax({
          url: '../req.php',    
          type: 'POST',
          data: $('form').serializeArray(),       
          success:function (data) {
			console.log(data) 
			document.querySelector("form").reset();
    	}

     });
})
})