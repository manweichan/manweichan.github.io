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

// external js: masonry.pkgd.js, imagesloaded.pkgd.js

// init Masonry
// var $grid = $('.grid').masonry({
//   itemSelector: '.grid-item',
//   percentPosition: true,
//   columnWidth: '.grid-sizer'
// });
// // layout Masonry after each image loads
// $grid.imagesLoaded().progress( function() {
//   $grid.masonry();
// });  

// var freeMasonry = $('.masonry');

// freeMasonry.imagesLoaded()
//   .done(function(){
//     freeMasonry.masonry({
//       itemSelector: 'img'
//     });
//   });

$(document).ready(function () {
    var $container = $("#container");

    $container.imagesLoaded(function () {
        $container.masonry();
    });
});

// // jQuery
// $grid.masonry()
// // vanilla JS
// msnry.layout()