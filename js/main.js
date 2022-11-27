$("#recom").owlCarousel({
  loop: true,
  margin: 30,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      dots: true,
      nav: true,
      loop: false,
    },
    1000: {
      items: 2,
      dots: true,
      loop: false,
      nav: true,
    },
  },
});

$("#newss").owlCarousel({
  loop: true,
  margin: 30,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      dots: true,
      nav: true,
      loop: false,
    },
    1000: {
      items: 3,
      dots: true,
      loop: false,
      nav: true,
    },
  },
});

$(document).ready(function () {
  $(".mobile-media .fa-ellipsis-vertical").click(function () {
    $(".parent-info").css({ left: "0", top: "0", height: "100vh" });
  });
});

$(document).ready(function () {
  $(".parent-info .fa-xmark").click(function () {
    $(".parent-info").css({ left: "-100%" });
  });
});

$(document).ready(function () {
  $(".parent-menu .header-menu i").click(function () {
    $(".parent-menu .list").css({ right: "0" });
  });
});

$(document).ready(function () {
  $(".parent-menu .close i").click(function () {
    $(".parent-menu .list").css({ right: "-100%" });
  });
});
let list = document.querySelector(".parent-menu .list");

$(document).ready(function () {
  $(".parent .mobile-media .fa-bars").click(function () {
    $(".parent-menu .list").css({ right: "0" });
  });
});

// $(document).ready(function () {
//   $(".fa-bars").click(function () {
//     $(".parent-menu .list").css({ opacity: "1" });
//   });
// });

// $(".fa-xmark").click(function () {
//   $(".parent-info").css({
//     left: "-100%",
//   });
// });

// const mediaQuery = window.matchMedia("(min-width: 1033px)");
// if (mediaQuery.matches) {
//   $(".parent-info").css({
//     left: "0px",
//   });
// }
// const mediaQuery = window.matchMedia('(max-width: 1032px)')
// if (mediaQuery.matches) {
//     $(document).ready(function(){
//         $(".fa-ellipsis-vertical").click(function(){
//           $(".parent-info").css({left: '0'});
//           if (secMediaQuery.matches) {
//             $(".parent-info").css({left: '15px'});
//         }
//         });
//       });
//       $(document).ready(function(){
//         $(".fa-xmark").click(function(){
//           $(".parent-info").css({left: '-100%'});
//           if (secMediaQuery.matches) {
//             $(".parent-info").css({left: '15px'});
//         }
//         });
//       });
// }
// else{

// }

/* const secMediaQuery = window.matchMedia("(min-width: 1032px)");
if (secMediaQuery.matches) {
  $(".parent-info").css({ left: "15px" });
} */
/* if ($(".fa-xmark").css({ display: "none" })) {
  $(".parent-info").css({ left: "0" });
} else if($(".fa-xmark").css({ display: "block" })) {
  $(".parent-info").css({ left: "-100%" });
} */

// $(".fa-xmark").click(() => {
//   $(".parent-info").css({ left: "-100%" });
// });
// $(".fa-ellipsis-vertical").click(() => {
//   $(".parent-info").css({ left: "0" });
// });

// console.log(window.matchMedia("(min-width: 1032px)").matches);
// if (window.matchMedia("(min-width: 1032px)") == true) {
//   if ($(".fa-xmark").css({ display: "none" })) {
//     $(".parent-info").css({ left: "0" });
//   } else if ($(".fa-xmark").css({ display: "block" })) {
//     $(".parent-info").css({ left: "-100%" });
//   }
// }

// if (window.matchMedia("(max-width: 1032px)") == true) {
//   $(".parent-info").css({ left: "-100%" });
// }
