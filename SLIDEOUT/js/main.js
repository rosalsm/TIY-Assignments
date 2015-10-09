

$('div.lovely').on('click',function(){
  console.log('probando');
  $(this).addClass('active');
  $('section#lovely').addClass('active').siblings().removeClass('active');
})
$('div.delicious').on('click',function(){
  console.log('probando 2');
  $(this).addClass('active');
  $('section#delicious').addClass('active').siblings().removeClass('active');
})
$('div.fine').on('click',function(){
  console.log('probando 3');
  $(this).addClass('active');
  $('section#fine').addClass('active').siblings().removeClass('active');
})
$('div.mission').on('click',function(){
  console.log('probando mission');
  $(this).addClass('active');
  $('section#mission').addClass('active').siblings().removeClass('active');
})
