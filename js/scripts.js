$(document).ready(function () {
  const over18 = confirm("Are you over 18? Click OK for yes or Cancel for no.");

  if (over18) {
    $("#over-18").show();
  } else {
    $("#under-18").show();
  } });
