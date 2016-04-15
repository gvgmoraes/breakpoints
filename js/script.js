$(document).ready(function(){

var windowWidth = $(window).innerWidth() // current width 

function display(width){
  if (width >= 1024){
  	$('span').text('The display size is 1024 or above')
  } else if (width<1024 && width>=768){
  	$('span').text('The display size is between 1024 and 768')
  } else if (width<768 && width>=480){
  	$('span').text('The display size is between 768 and 480')
  } else if (width<480 && width>=320){
  	$('span').text('The display size is between 480 and 320')
  } else if (width<320){
  	$('span').text('The display size is less than or equal to 320')
  }
}

display(windowWidth);// for the very first reload
$(window).resize(function(){
	windowWidth = $(window).innerWidth() //everytime resize page automatically runs function
	display(windowWidth);
})

})




