$(document).ready(function($) {
  
	// Клик по диву камеры
	$('.modal-open').click(function() {
		$('.modal-fade').fadeIn();
		return false;
	});	
	
    // Клик по ссылке "Закрыть".
	$('.modal-close').click(function() {
		$(this).parents('.modal-fade').fadeOut();
		return false;
	});		
    
    // Закрытие по клавише Esc.
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.modal-fade').fadeOut();
		}
	});
	
    // Клик по фону, но не по окну.
	$('.modal-fade').click(function(e) {
		if ($(e.target).closest('.modal').length == 0) {
			$(this).fadeOut();					
		}
	});

	// При клике по элементу плеер меняет свой источник на тот, на который кликнули
	$('.element').click(function(){
		pleer.setAttribute('src', (this.getAttribute('id') + ));
	});
});