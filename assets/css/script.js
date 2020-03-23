$('.nav-link').click (function(){
  $('body #myNavbar').hide();
  console.log('marche')
});
$('.navbar-toggler').click (function(){
  $('body #myNavbar').slideDown();
  console.log('marche')
});
