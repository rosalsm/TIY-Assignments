

$('div#lovely').on('click',function(){
  console.log('probando');
  $(this).addClass('active');
  $('section#lovely').toggleClass('active').siblings().removeClass('active');
})
$('div#delicious').on('click',function(){
  console.log('probando 2');
  $(this).addClass('active');
  $('section#delicious').toggleClass('active').siblings().removeClass('active');
})
$('div#fine').on('click',function(){
  console.log('probando 3');
  $(this).addClass('active');
  $('section#fine').toggleClass('active').siblings().removeClass('active');
})
$('div#mission').on('click',function(){
  console.log('probando mission');
  $(this).addClass('active');
  $('section#mission').toggleClass('active').siblings().removeClass('active');
})
$('div#contact').on('click',function(){
  console.log('probando contact');
  $(this).addClass('active');
  $('section#contact').toggleClass('active').siblings().removeClass('active');
})
