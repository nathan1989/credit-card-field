// -------------------------------------------------------------------------------------

// Credit card number field
$.fn.credCardField = function(){
	var $this = $(this),
		$label = $('[for="cardNum"]'),
		$parentRow = $('.credCardRow')
	;

	$label.hover(function(){
		$parentRow.find($this).each(function(){
			$(this).toggleClass('hover');
		});
	});

	$this
		.on('focus', function(){
			$parentRow.find($this).each(function(){
				$(this).addClass('focus');
			});
		})

		.on('blur', function(){
			$parentRow.find($this).each(function(){
				$(this).removeClass('focus');
			});
		})

		.hover(function(){
			$parentRow.find($this).each(function(){
				$(this).toggleClass('hover');
			});
		})

		.on('input paste',function () {
			if($(this).val().length == $(this).attr('maxlength')) {
				$(this)
					.next()
						.focus();
			}
		})

		.autotab('number')
	;
};

$('[name="cardNum"]').credCardField();

// -------------------------------------------------------------------------------------
