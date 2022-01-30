$(document).ready(function () {
  const over18 = confirm("Are you over 18? Click OK for yes or Cancel for no.");

  // Turinary operator
  // over18 ? $("#over-18").show() : $("#under-18").show();

  // check if user is of age
  if (over18) {
    $("#over-18").show();
  } else {
    $("#under-18").show();
  }

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

  // when user submits quiz
  $("#quiz").submit(function (event) {
    const q1 = parseInt($("#question1").val());
    const q2 = parseInt($("#question2").val());
    const q3 = parseInt($("#question3").val());
    const q4 = parseInt($("#question4").val());
    const q5 = parseInt($("#question5").val());
    const finalScore = q1 + q2 + q3 + q4 + q5;

    event.preventDefault();

    $("#result").html(
      `<h1>congrats you should learn ${whichLanguage(finalScore)}</h1>`
    );
  });

  // reset form back to load state
  $("#clear").click(function () {
    $(".form-control").val(0);
    $("#result").html("");
  });
});

/*
 * Parses finalScore and returns a message.
 * @finalScore {number} calculated user score
 * @return {string} the correct message.
*/
function whichLanguage(finalScore) {
  let message = "";
  if (finalScore <= 5) {
    // console.log("finalScore is greaterthan or equal to 5");
    message = "c#";
  } else if (finalScore <= 10) {
    // console.log("finalScore is greaterthan or equal to 10");
    message = "ruby";
  } else if (finalScore <= 15) {
    // console.log("finalScore is greaterthan or equal to 15");
    message = "python";
  } else if (finalScore <= 20) {
    // console.log("finalScore is greaterthan or equal to 20");
    message = "java";
  } else {
    // console.log("we have reached the else");
    message = "nothing";
  }
  // console.log(message);
  return message;
}
