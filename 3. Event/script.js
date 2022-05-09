$(document).ready(function () {
  // event click
  $("#click").click(function () {
    alert("Saya belajar JQUERY event");
  });

  // event dbclick()
  $("#dbclick").dblclick(function () {
    $(this).css({ "background-color": "red", padding: "5px" });
  });

  // event mouseleave
  $(".mouseleave").mouseleave(function () {
    $(this).css({ color: "skyblue", "background-color": "red", "font-size": "20px" });
  });

  // event mouseenter
  $("#mouseenter").mouseenter(function () {
    $(this).css({ color: "red", "background-color": "green", "font-size": "40px" });
  });

  // event keydown
  $("#keydown").keydown(function () {
    $("#pesan_keydown").text($(this).val());
  });

  // event keyup
  $("#keyup").keyup(function () {
    $("#pesan_keyup").text($(this).val());
  });
});
