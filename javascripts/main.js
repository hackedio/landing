$(document).ready(function(){
  // Use fitText() to scale HACKED text
  $('h1').fitText(0.8, {maxFontSize: '160px'});

  // Retro Loading Animation
  var loading = setInterval(function() {
    var y = Math.ceil(Math.random() * 512);
    $('html').css('background-position-y', y);
  },100);

  // Flash #action
  var action = setInterval(function() {
    $('#action').toggleClass('flash');
  }, 1000);

  // Cancel the 'loading' effect after 5000ms
  setTimeout(function() {
    clearInterval(loading);
    $('html').css('background-image', 'none');
  }, 5000);
});
