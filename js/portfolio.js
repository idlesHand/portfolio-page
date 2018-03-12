document.addEventListener('DOMContentLoaded', function() {

  // Wait a half sec to avoid stutter (need to check if that actually works) and catch a wondering eye
  setTimeout(function() {
    $("#name").show('fast');
    $("#fall-sign").hide('slow');
    // Set walkway object to svg1
    var svg1 = new Walkway({
      selector: '#name',
      duration: 5500
    }).draw();
  }, 2700)
});
