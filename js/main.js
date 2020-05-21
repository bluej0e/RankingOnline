$(document).ready(function () {
	var totalHeight = $(window).height();
	var totalWidth = $(window).width();
	var animations = $('.animations');
	var mainNav = $('.mainNav');
	var mainNavUl = $('.mainNav ul');
	var container = $('.container');
	var hamburger = $('.icon-three');
	var navLink = $('.mainNav ul li');
	var body = $('#servicios');
	var gooButt = $('.goobutt');

	// mainNav.css({'display' : 'none'});

	body.click(function(){
		if(container.hasClass('container-tall') === true && totalWidth < 1024){
			mainNavUl.fadeToggle(400);
			container.toggleClass('container-tall');
			hamburger.toggleClass('active-three');
			container.toggleClass('apagado');
		} else {
		}
	});

	gooButt.click(function(){
		if(container.hasClass('container-tall') === true && totalWidth < 1024){
			mainNavUl.fadeToggle(400);
			container.toggleClass('container-tall');
			hamburger.toggleClass('active-three');
		} else {
		}
	});

	hamburger.click(function() {
		mainNavUl.fadeToggle(400);
		hamburger.toggleClass('active-three');
		container.toggleClass('container-tall');
		container.toggleClass('apagado');
	});

	navLink.click(function(){
		if(totalWidth < 1024){
			mainNavUl.fadeToggle(400);
			hamburger.toggleClass('active-three');
			container.removeClass('container-tall');
			container.toggleClass('apagado');
		}else if(totalWidth > 1023){
			null;
		}
	});

	$('#wave').wavify({
		height: 40,
		bones: 6,
		amplitude: 10,
		color: '#6E0270',
		speed: 0.25
	});

	$('#wave2').wavify({
		height: 20,
		bones: 5,
		amplitude: 10,
		color: '#973697',
		speed: .25
	});

	$('#wave3').wavify({
		height: 1,
		bones: 4,
		amplitude: 10,
		color: '#6E0270',
		speed: .45
	});

	$('#footwave').wavify({
		height: 20,
		bones: 5,
		amplitude: 20,
		color: '#272727',
		speed: .25
	});

	$('#footwave2').wavify({
		height: 60,
		bones: 3,
		amplitude: 20,
		color: '#0d0d0d',
		speed: .25
	});


	// $(window).on('scroll', function () {	
	// 	var scrollTop = $(window).scrollTop();
	// 	var percentageOfHeight = (((scrollTop / totalHeight) * 100) - 100) * -1;

	// 	$('#scroll').css("opacity" , ((percentageOfHeight / 100) - 0.5) );


	// 	if (percentageOfHeight > 11) {
	// 		mainNav.fadeOut(400);
	// 		animations.css("animation-play-state", "running");

	// 		if(container.hasClass('container-tall') === false){
	// 			container.removeClass('container-tall');
	// 		}else if(container.hasClass('container-tall') === true ){
	// 			mainNavUl.fadeOut(400);
	// 			container.removeClass('container-tall');
	// 			hamburger.toggleClass('active-three');
	// 		}else{
	// 			container.removeClass('container-tall');
	// 		}

	// 	} else {
	// 		animations.css("animation-play-state", "paused");
	// 		mainNav.fadeIn(400); 
	// 	}
	// });


});
	



// $('.icon-three').on('click', function(){
		// $('.container').fadeToggle(top, 400).css('height', '170vh');
		// $('.mainNav ul').toggle(400);
		
		// $('.container').toggleClass('container-tall');
		
		
		// 	$('#menuico').toggleClass(
		// 	function(){
		// 		$('.container').css({"height": "170vh"});
		// 	},
		// 	function(){
		// 		$('.container').css({"height": "100vh"});
		// 	}
		// );
	// });






// // this is the code that controlls the popup
// function onMouseOut(event) {
//   if (
//       event.clientY < 50 &&
//       event.relatedTarget == null &&
//       event.target.nodeName.toLowerCase() !== 'select') {
//           document.removeEventListener("mouseout", onMouseOut);
//           document.getElementById("popup").style.display = "flex";
//       }
//     }

//     document.addEventListener("mouseout", onMouseOut);

//     var modal = document.getElementById('popup');
//     var close = document.getElementById("close");
//     var boton = document.getElementById("popup__btn");

//     close.onclick = function() {
//         modal.style.display = "none";
//     }
//     boton.onclick = function() {
//         modal.style.display = "none";
//         window.location.href='#contacto';
//     }
//     window.onclick = function(event) {
//         if (event.target === modal) {
//             modal.style.display = "none";
//         }
//     }

//     // popup ends
