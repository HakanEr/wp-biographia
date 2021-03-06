(function($) {
	$().ready(function() {  
		$('#wp-biographia-user-role-add').click(function() {  
	  		return !$('#wp-biographia-enabled-user-roles option:selected').remove().appendTo('#wp-biographia-excluded-user-roles');  
	 	});  
	 	$('#wp-biographia-user-role-rem').click(function() {
	  		return !$('#wp-biographia-excluded-user-roles option:selected').remove().appendTo('#wp-biographia-enabled-user-roles');
	 	});  

		$('#wp-biographia-user-profile-add').click(function() {  
	  		return !$('#wp-biographia-visible-profiles option:selected').remove().appendTo('#wp-biographia-hidden-profiles');  
	 	});  
	 	$('#wp-biographia-user-profile-rem').click(function() {
	  		return !$('#wp-biographia-hidden-profiles option:selected').remove().appendTo('#wp-biographia-visible-profiles');
	 	});  

		$('#wp-biographia-user-post-add').click(function() {  
	  		return !$('#wp-biographia-enabled-post-users option:selected').remove().appendTo('#wp-biographia-suppressed-post-users');  
	 	});  

	 	$('#wp-biographia-user-post-rem').click(function() {  
	  		return !$('#wp-biographia-suppressed-post-users option:selected').remove().appendTo('#wp-biographia-enabled-post-users');  
	 	});  

	 	$('#wp-biographia-user-page-add').click(function() {  
	  		return !$('#wp-biographia-enabled-page-users option:selected').remove().appendTo('#wp-biographia-suppressed-page-users');  
	 	});  

	 	$('#wp-biographia-user-page-rem').click(function() {  
	  		return !$('#wp-biographia-suppressed-page-users option:selected').remove().appendTo('#wp-biographia-enabled-page-users');  
	 	});  

		$('#wp-biographia-category-add').click(function() {
			return !$('#wp-biographia-enabled-categories option:selected').remove().appendTo('#wp-biographia-excluded-categories');
		});

		$('#wp-biographia-category-rem').click(function() {
			return !$('#wp-biographia-excluded-categories option:selected').remove().appendTo('#wp-biographia-enabled-categories');
		});
		
		$('#wp-biographia-content-icons').click(function() {
			$('#wp-biographia-icon-container').toggle(this.checked);
		});

		$('#wp-biographia-content-alt-icons').click(function () {
			if (this.checked) {
				$('#wp-biographia-content-icon-url').removeAttr('disabled');
			}
			else {
				$('#wp-biographia-content-icon-url').attr('disabled', true);
			}
		});
		
		$('form').submit(function() {
			$('#wp-biographia-enabled-user-roles option').each(function(i) {  
				$(this).attr("selected", "selected");  
			});  
			$('#wp-biographia-excluded-user-roles option').each(function(i) {  
				$(this).attr("selected", "selected");  
			});  

			$('#wp-biographia-visible-profiles option').each(function(i) {  
				$(this).attr("selected", "selected");  
			});  
			$('#wp-biographia-hidden-profiles option').each(function(i) {  
				$(this).attr("selected", "selected");  
			});  

			$('#wp-biographia-enabled-post-users option').each(function(i) {  
				$(this).attr("selected", "selected");  
			});  
			$('#wp-biographia-suppressed-post-users option').each(function(i) {  
				$(this).attr("selected", "selected");  
			});  

			$('#wp-biographia-enabled-page-users option').each(function(i) {  
				$(this).attr("selected", "selected");  
			});  
			$('#wp-biographia-suppressed-page-users option').each(function(i) {  
				$(this).attr("selected", "selected");
			});  
			
			$('#wp-biographia-enabled-categories option').each(function(i) {
				$(this).attr("selected", "selected");
			})
			$('#wp-biographia-excluded-categories option').each(function(i) {
				$(this).attr("selected", "selected");
			})
		});

	});	
})(jQuery);

