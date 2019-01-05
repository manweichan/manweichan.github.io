function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}



// external js: masonry.pkgd.js, imagesloaded.pkgd.js

// init Masonry after all images have loaded
// var $grid = $('.grid').imagesLoaded( function() {
//   $grid.masonry({
//     itemSelector: '.grid-item',
//     percentPosition: true,
//     columnWidth: '.grid-sizer'
//   }); 
// });

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
}else
{

  $(function () { // wait for document ready
    // init
    var controller = new ScrollMagic.Controller();

    // define movement of panels
    var wipeAnimationTravel = new TimelineMax()
      // .fromTo("section.panelTravel.SPDA",    1, {y: "100%"}, {y: "0%", ease: Linear.easeNone, delay: 1})  // in from right
      // .fromTo("#milk_kayak", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone, delay: 1}) // in from top
      .fromTo("#bjorn", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone, delay: 4}) // in from top
      // .fromTo("#main_rise", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone, delay: 1}) // in from top
      .fromTo("#maine_bee", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone, delay: 4})  // in from left
      .fromTo("#luna_moon", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone, delay: 4}) // in from top
      .fromTo("#ojos_trails", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone, delay: 4}) // in from top
      .fromTo("#space_way", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone, delay: 4}) // in from top
      .fromTo("#ojos_point", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone, delay: 4})  // in from left
      .fromTo("#space60", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone, delay: 4}) // in from top
      .fromTo("#class_way", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone, delay: 4}) // in from top
      .fromTo("#space72", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone, delay: 4}) // in from top
      .fromTo("#llama_face", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone, delay: 4})  // in from left
      .fromTo("#truck", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone, delay: 4}); // in from top

    // create scene to pin and link animation
    new ScrollMagic.Scene({
        triggerElement: "#pinContainer",
        triggerHook: "onLeave",
        duration: "700%"
      })
      .setPin("#pinContainer")
      .setTween(wipeAnimationTravel)
      // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);
  });

}