$(document).ready(function () {
  const over18 = confirm("Are you over 18? Click OK for yes or Cancel for no.");

  if (over18) {
    $("#over-18").show();
  } else {
    $("#under-18").show();
  } });
  
  // show quiz on click
  $(".clickable").click(() => {
    $("#quiz-showing").slideDown();
    $("#name1").fadeOut();
  });

  // when user submits name
  $("#formOne").submit(function (event) {
    const nameInput = $("input#name").val();
    const answer5 = $("input:radio[name=answer5]:checked").val();

    event.preventDefault();

    $("#name1").fadeIn();
    $("#formOne").slideUp();
    $(".name").text(nameInput);
    $(".name").append(" the great");
    $(".name").show();
  });
