$(document).ready(function() {
  $( ".flashcard-question" ).click(function() {
      $( this ).children().toggleClass("show");
    });
});
