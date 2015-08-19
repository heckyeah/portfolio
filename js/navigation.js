$('document').ready(function(){
  $("#short").click( hide );
  $("#long").click( show );
});

function hide() {
  $('.links').hide();
  $('.maximize').css('display','block');
  $('.minimize').css('display','none');
  $('.padding-right').css('padding-right','10px');
  $('.container').css('border-left', '60px solid transparent');
}

function show() {
  $('.links').show();
  $('.maximize').css('display','none');
  $('.minimize').css('display','block');
  $('.padding-right').css('padding', '5px 30px 5px 10px');
  $('.container').css('border-left', '170px solid transparent');
}