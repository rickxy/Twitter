$(function(){
	var win = $(window);
	var offset = 10;

	win.scroll(function(){
		if($(document).height() <= (win.height() + win.scrollTop())){
			offset +=10;
			$('#loader').show();
			$.post('http://localhost/twitter/core/ajax/fetchPosts.php', {fetchPost:offset}, function(data){
				$('.tweets').html(data);
				$('#loader').hide();
			});
		}
	});
});