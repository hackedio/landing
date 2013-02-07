$(document).ready(function(){
  // Use fitText() to scale HACKED text
  $('h1').fitText(0.8, {maxFontSize: '160px'});

  // Retro Loading Animation
  var loading = setInterval(function() {
    var y = Math.ceil(Math.random() * 512);
    $('html').css('background-position-y', y);
  },100);

  // Cancel the 'loading' effect after 5000ms
  setTimeout(function() {
    clearInterval(loading);
    $('html').css('background-image', 'none');
  }, 5000);
  
  var t1 = new Date(2013, 07, 20, 0, 0, 0, 0)
  var t2 = new Date()
  var dif = t1.getTime() - t2.getTime()

  var Seconds_from_T1_to_T2 = dif / 1000;
  var time_until = Math.abs(Seconds_from_T1_to_T2);
  
  var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
  $(document).keydown(function(e) {
    kkeys.push( e.keyCode );
    if ( kkeys.toString().indexOf( konami ) >= 0 ){
      $(document).unbind('keydown',arguments.callee);
      $("h1").addClass("upside_down");
      $('.location').text('51.5028° N, 0.0031° E');
      $('.date').text(time_until+' seconds')
      
    }
  });
});
