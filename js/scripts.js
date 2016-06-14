$(document).ready(function() {
  // $(".flashcard-question").click(function() {
  //   $(".flashcard-answer").show();
  // });
  $( ".flashcard-question" ).click(function() {
      $( this ).show();
      $( this ).children().show();
    });
});
