// init controller
var controller = new ScrollMagic.Controller();

// build tween
var tween = TweenMax.staggerFromTo(".nav-link", 2, {left: 700}, {left: 0, ease: Back.easeOut}, 0.15);

// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#nav-trigger", duration: 300})
				.setTween(tween)
				.addIndicators({name: "staggering"}) // add indicators (requires plugin)
				.addTo(controller);

