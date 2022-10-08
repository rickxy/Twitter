	$(function(){
	$(document).on('click','.like-btn', function(){
 		var tweet_id  = $(this).data('tweet');
		var user_id   = $(this).data('user');
		var counter   = $(this).find('.likesCounter');
		var count     = counter.text();
		var button    = $(this);

		$.post('http://localhost/twitter/core/ajax/like.php', {like:tweet_id, user_id:user_id}, function(){
 			counter.show();
 			button.addClass('unlike-btn');
			button.removeClass('like-btn');
			count++;
			counter.text(count);
			button.find('.fa-heart-o').addClass('fa-heart');
			button.find('.fa-heart').removeClass('fa-heart-o');
		}); 
	});

	$(document).on('click','.unlike-btn', function(){
 		var tweet_id  = $(this).data('tweet');
		var user_id   = $(this).data('user');
		var counter   = $(this).find('.likesCounter');
		var count     = counter.text();
		var button    = $(this);

		$.post('http://localhost/twitter/core/ajax/like.php', {unlike:tweet_id, user_id:user_id}, function(){
 			counter.show();
 			button.addClass('like-btn');
			button.removeClass('unlike-btn');
			count--;
			if(count === 0){
				counter.hide();
			}else{
			  counter.text(count);
			}
   		    counter.text(count);
			button.find('.fa-heart').addClass('fa-heart-o');
			button.find('.fa-heart-o').removeClass('fa-heart');
		}); 
	});
});