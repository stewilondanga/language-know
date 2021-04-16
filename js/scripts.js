/*var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();

$(document).ready(function() {
  $('.table thead tr').mouseover(function() {
    $('.table tbody tr').addClass('active');
  }).mouseout(function() {
    $('.table tbody tr').removeClass('active');
  });
  $('.table tbody tr').click(function() {
    $('#message').css('display', 'block');
    var message = $(this).find('td').eq(1).html() + '<br><br>' + $(this).data('description');
    $('#message').animate({
      height: '0px'
    }, 600, function() {
      $('#message').animate({
        height: '200px'
      }, 600);
      $('#message').html(message);
    });
  });
});
