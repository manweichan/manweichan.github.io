// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//         x.className += " responsive";
//     } else {
//         x.className = "topnav";
//     }
// }

// $('.grid').masonry({
//   // set itemSelector so .grid-sizer is not used in layout
//   itemSelector: '.grid-item',
//   // use element for option
//   columnWidth: '.grid-sizer',
//   percentPosition: true
// })
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
TweenMax.fromTo("#growText", 20, {opacity: 0}, {opacity: 1, ease:Power2.easeOut});
TweenMax.fromTo(".siteContents", 20, {opacity: 0}, {opacity: 1, ease:Power2.easeOut});
TweenMax.fromTo("#shortDescrip", 20, {opacity: 0}, {opacity: 1, ease:Power2.easeOut});
}else
{
TweenMax.fromTo("#growText", 20, {opacity: 0}, {opacity: 1, ease:Power2.easeOut});
var controller = new ScrollMagic.Controller();

// build tween
var tween = TweenMax.fromTo(".siteContents", 5, {opacity: 0}, {opacity:1});

// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger1",  duration: 0, offset: -50})
        .setTween(tween)
        .addIndicators({name: "indicator"}) // add indicators (requires plugin)
        .addTo(controller);

var tween2 = TweenMax.fromTo("#shortDescrip", 5, {opacity: 0}, {opacity:1});
var scene = new ScrollMagic.Scene({triggerElement: "#triggerh2",  duration: 0, offset: -50})
        .setTween(tween2)
        .addIndicators({name: "indicatorh2"}) // add indicators (requires plugin)
        .addTo(controller);

  $(function () { // wait for document ready
    // init
    // var controller = new ScrollMagic.Controller();

    // define movement of panels
    var wipeAnimation = new TimelineMax()
      .fromTo("section.panel.CLASS", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone, delay: 1})  // in from left
      .fromTo(".CERN",    1, {y: "100%"}, {y: "0%", ease: Linear.easeNone, delay: 1})  // in from right
      .fromTo(".APL", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone, delay: 1}); // in from top

    // create scene to pin and link animation
    new ScrollMagic.Scene({
        triggerElement: "#pinContainer",
        triggerHook: "onLeave",
        duration: "400%"
      })
      .setPin("#pinContainer")
      .setTween(wipeAnimation)
      .addIndicators() // add indicators (requires plugin)
      .addTo(controller);
  });

  $(function () { // wait for document ready
    // init
    // var controller = new ScrollMagic.Controller();

    // define movement of panels
    var wipeAnimationTravel = new TimelineMax()
      // .fromTo("section.panelTravel.SPDA",    1, {y: "100%"}, {y: "0%", ease: Linear.easeNone, delay: 1})  // in from right
      .fromTo(".Geneva", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone, delay: 1}) // in from top
      .fromTo(".Beijing", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone, delay: 1}) // in from top
      .fromTo(".Annecy", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone, delay: 1}) // in from top
      .fromTo(".Nepal", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone, delay: 1});  // in from left

    // create scene to pin and link animation
    new ScrollMagic.Scene({
        triggerElement: "#pinContainerTravel",
        triggerHook: "onLeave",
        duration: "700%"
      })
      .setPin("#pinContainerTravel")
      .setTween(wipeAnimationTravel)
      .addIndicators() // add indicators (requires plugin)
      .addTo(controller);
  });

}

// init controller