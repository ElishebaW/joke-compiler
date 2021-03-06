$('#login').click(function() {
  var loginGrtr = G$('Jokester');
  var setIntro = J$();
  var setInstructions = J$();
  var setSetup = J$();
  var setClimax = J$();
  var setPunchline = J$();
  var setJokeOutput = J$();

  $('#logindiv').hide();
  $('#logoutdiv').css("visibility","visible");
  $('.jumbotron').css("visibility","visible");
  $('.form-inline').css("visibility","visible");
  setIntro.setLang($('#lang').val()).HTMLIntro('#jokeintro', true);
  setInstructions.setLang($('#lang').val()).HTMLInstructions('#jokeinstructions',true);
  setSetup.setLang($('#lang').val()).HTMLSetup('#jokesetup',true);
  setClimax.setLang($('#lang').val()).HTMLClimax('#jokeclimax',true);
  setPunchline.setLang($('#lang').val()).HTMLPunchline('#jokepunchline',true);
  setJokeOutput.setLang($('#lang').val()).HTMLJokeOutput('#jokeoutputlabel',true);
  loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting',true).logIn();
  setTimeout(function(){
    $("#greeting").hide()}, 1000)
    $('#greeting').css("display","block");
  })

$('#logout').click(function() {
  var logOut = G$('Jokester')
  $('#logindiv').show();
  $('#logoutdiv').css("visibility","hidden");
  $('.jumbotron').css("visibility","hidden");
  $('.form-inline').css("visibility","hidden");
  $('#greeting').hide();
  logOut.setLang($('#lang').val()).logOut();
})

$('#submit').click(function() {
  document.getElementById('jokeoutputcontent').innerText = document.getElementById('jokesetupinput').value + ' ' + document.getElementById('jokeclimaxinput').value+ ' ' + document.getElementById('jokepunchlineinput').value;
})
