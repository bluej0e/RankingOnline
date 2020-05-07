$(document).ready(function () {
	$(window).on('scroll', function () {
		var scrollTop = $(window).scrollTop();
		var waves = $('.container svg');
		var totalHeight = $(window).height();

		var percentageOfHeight = (((scrollTop / totalHeight) * 100) - 100) * -1;
		// waves.css({height: percentageOfHeight + 'vh'})
	
		// $('.container svg').css({height: "100vh" - scrollTop});

		if (percentageOfHeight > 12) {
			$('.mainNav').fadeOut();
			waves.css({height: percentageOfHeight + 'vh'})
		}
		else {
			$('.mainNav').fadeIn(); 		
			waves.css({height: '10vh'})

		}
		// console.log(percentageOfHeight);

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
