// TweenMax.to("#testDiv", 4, {opacity: 0});
// TweenMax.fromTo("#testDiv", 4, {opacity: 0}, {opacity:1})
// var global = "Global";

// if (typeof jQuery != 'undefined') {  
//     // jQuery is loaded => print the version
//     alert(jQuery.fn.jquery);
// }
// var controller = new ScrollMagic.Controller();
// var tween = TweenMax.fromTo("#testDiv", 1, {opacity: 0}, {opacity:1});
// var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 0, offset: -50})
// 			.setTween(tween)
// 			.addIndicators({name:"Indicator"})
// 			.addTo(controller)
// 			.loglevel(3);

// controller.addScene(scene);
// scene.loglevel(3);

// function windowH() {
//    var wH = $(window).height();

//    $('pinContainer').css({height: wH});
// }

// windowH();

// $(function () { // wait for document ready
// 	// init
// 	var controller = new ScrollMagic.Controller();

// 	// define movement of panels
// 	var wipeAnimation = new TimelineMax()
// 		// animate to second panel
// 		// .to("#slideContainer", 0.5, {z: -150})		// move back in 3D space
// 		.to("#slideContainer", 1,   {y: "-25%"})	// move in to first panel
// 		// .to("#slideContainer", 0.5, {z: 0})				// move back to origin in 3D space
// 		// animate to third panel
// 		// .to("#slideContainer", 0.5, {z: -150, delay: 1})
// 		.to("#slideContainer", 1,   {y: "-50%"})
// 		// .to("#slideContainer", 0.5, {z: 0})
// 		// animate to forth panel
// 		// .to("#slideContainer", 0.5, {z: -150, delay: 1})
// 		.to("#slideContainer", 1,   {y: "-75%"})
// 		// .to("#slideContainer", 0.5, {z: 0});

// 	// create scene to pin and link animation
// 	new ScrollMagic.Scene({
// 			triggerElement: "#pinContainer",
// 			triggerHook: "onLeave",
// 			duration: "500%"
// 		})
// 		.setPin("#pinContainer")
// 		.setTween(wipeAnimation)
// 		.addIndicators() // add indicators (requires plugin)
// 		.addTo(controller);
// });



	$(function () { // wait for document ready
		// init
		var controller = new ScrollMagic.Controller();

		// define movement of panels
		var wipeAnimation = new TimelineMax()
			.fromTo("section.panel.turqoise", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone})  // in from left
			.fromTo("section.panel.green",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
			.fromTo("section.panel.bordeaux", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}); // in from top

		// create scene to pin and link animation
		new ScrollMagic.Scene({
				triggerElement: "#pinContainer",
				triggerHook: "onLeave",
				duration: "300%"
			})
			.setPin("#pinContainer")
			.setTween(wipeAnimation)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
		})

