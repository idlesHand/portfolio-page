
var index = 0;
// animation to switch between in the skill set slideshow
var skillSlides = ["#skill-slide-one", "#skill-slide-two"]; // {, "#skill-slide-three"} , {, "#skill-slide-four"}

// transition betwen the animations via another animation
function skillsetAnimation() {
    setTimeout(function () {
      // start folding in reverse
      $("#fold-frame").attr("class", "fold-frameReverse");
      //second timeout to prevent errors during transition which ended up displaying nothing
      setTimeout(function () {
        // transition to next animation
        $(skillSlides[index]).hide(100, function () {
          // loop index, using the remainder of skillSlides.length divided by the current index
          index = (index+1)%(skillSlides.length);
          $(skillSlides[index]).show(100, function() {
            $("#fold-frame").attr("class", "fold-frame");
          });
        });
      }, 300);
    }, 8000);
}

document.addEventListener('DOMContentLoaded', function() {

  // Wait a half sec to avoid stutter (need to check if that actually works) and catches a wondering eye
  setTimeout(function() {
    // reaveal idlshand svg
    $("#name").show('fast');
    // remove danger/fall sign
    $("#fall-sign").hide('slow');
    //  set svg1 to new walkway object with params to perform walkway animation
    var svg1 = new Walkway({
      selector: '#name',
      duration: 7000
      // perform the final animation
    }).draw();
    $(skillSlides[index]).show(function() {
      $("#fold-frame").addClass("fold-frame");
    });
  }, 3000)
  // begin working skillset animation loop, hopefully without causing stutter to initial animation due to too much going on
  setTimeout(setInterval(skillsetAnimation, 10000), 9000);

});
