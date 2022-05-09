$(document).ready(function () {
  // selector tag
  $("h1").css("color", "red");
  $("p").css("color", "blue");

  // selector class
  $(".judul").css("background-color", "red");
  $(".text").css("background-color", "salmon");

  // Selector Id
  $("#judul").css("border", "solid 2px blue");
  $("#text").css("border", "solid 2px red");

  // universal *
  $("*").css("background-color", "skyblue");

  //berubah elemen berdasarkan index
  $("li:eq(2)").css("background-color", "red");

  // berubah elemen berdasarkan input
  $("input:submit").css("background-color", "blue");

  //multiple CSS attributes in jQuery
  $("input:button").css({ "background-color": "green", padding: "5px" });
});
