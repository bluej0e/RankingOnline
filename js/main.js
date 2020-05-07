$(document).ready(function () {

	$('#wave').wavify({
		height: 40,
		bones: 6,
		amplitude: 10,
		// color: 'url(#grad)',
		speed: 0.25
	  });

	  $('#wave2').wavify({
		height: 20,
		bones: 5,
		amplitude: 10,
		color: '#6E0270',
		speed: .25
	  });



	  $('#footwave').wavify({
		height: 20,
		bones: 9,
		amplitude: 20,
		color: '#272727',
		speed: .25
	  });

	  $('#footwave2').wavify({
		height: 60,
		bones: 8,
		amplitude: 20,
		color: '#0d0d0d',
		speed: .25
	  });


	$(window).on('scroll', function () {
		var scrollTop = $(window).scrollTop();
		var totalHeight = $(window).height();
		var percentageOfHeight = (((scrollTop / totalHeight) * 100) - 100) * -1;
		
		var animations = $('.animation-div');


		if (percentageOfHeight > 12) {
			$('.mainNav').fadeOut();

		}
		else {
			$('.mainNav').fadeIn(); 		

		}
	});
});




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
