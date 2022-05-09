$(document).ready(function () {
  // efek hide
  $("#hide").click(function () {
    $(".kontak").hide(1000); // hide(1000) => waktu hidenya 1000ms
  });

  // efek show
  $("#show").click(function () {
    $(".kontak").show(1000); // hide(1000) => waktu hidenya 1000ms
  });

  // efek fadeOut
  $("#fadeOut").click(function () {
    $(".box1").fadeOut();
    $(".box2").fadeOut(1000);
    $(".box3").fadeOut(3000);
  });

  // efek fadeIn
  $("#fadeIn").click(function () {
    $(".box1").fadeIn();
    $(".box2").fadeIn(2000);
    $(".box3").fadeIn(4000);
  });

  // efek fadeToggel
  $("#fadeToggle").click(function () {
    $(".box1").fadeToggle();
    $(".box2").fadeToggle(2000);
    $(".box3").fadeToggle(4000);
  });

  // efek fadeTo
  $("#fadeTo").click(function () {
    $(".box1").fadeTo("slow", 0.2);
    $(".box2").fadeTo("slow", 0.4);
    $(".box3").fadeTo("slow", 0.6);
  });

  // efek SlideUp
  $("#slideUp").click(function () {
    $("#slide").slideUp("slow");
  });

  // efek SlideDown
  $("#slideDown").click(function () {
    $("#slide").slideDown(1000);
  });

  // efek SlideToggle
  $("#slideToggle").click(function () {
    $("#slide").slideToggle("fast");
  });

  // efek animate
  $("#kiri").click(function () {
    $("#animate").animate({ left: "-50px" }, "slow");
  });

  // efek animate
  $("#kanan").click(function () {
    $("#animate").animate({ right: "-50px" }, "slow");
  });

  // efek clearQueue
  $("#start").click(function () {
    $("#clearQueue").animate({ left: "+=200" }, 1000);
    $("#clearQueue").queue(function () {});
  });

  $("#stop").click(function () {
    $("#clearQueue").clearQueue();
    $("#clearQueue").stop();
  });

  // efek delay
  $("#delay").click(function () {
    $("#kotak1").slideUp(4000).delay(3000).fadeIn(6000);
    $("#kotak2").slideUp(4000).fadeIn(6000);
  });
});
