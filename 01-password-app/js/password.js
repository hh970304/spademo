$(function(){
  $('#pwNormal').on('input',function(){
    $('.pwDisplay').val($('#pwNormal').val());
  });

  $('#btnTest').mouseover(function(){
    $('#btnTest').attr('src','img/eye.png');
    $('.pwDisplay').css('display','inline-block');
  });

  $('#btnTest').mouseout(function(){
    $('#btnTest').attr('src','img/eye-close.png');
    $('.pwDisplay').css('display','none');
  });
});