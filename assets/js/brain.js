$(document).ready( function() {
	
	//	main script
	
	var saveX, saveY;
	
	$('#dock .ui-widget-content').draggable({
		helper : "clone",
		//revert : true,
		containment : "#dashboard",
		drag: function(event, ui) {
			saveX = event.pageX -25;
			saveY = event.pageY -25;
		},
		stop : function(event, ui) {
			
			var $parent = $("<div class='container ui-content-widget'></div>").draggable();	//	create a draggable parent
			var $newElement = null;
			var id = $(this).prop('id');
			
			$parent.css({
				left : saveX,
				top : saveY,
				"position" : "absolute",
				"border" : "10px #ddd solid"
			});
			
			if (id === 'elText') {
				
				$newElement = $("<input type='text' style='width : 100%; height : 100%;' placeholder='write text here..' readonly />");
				$parent.css({
					width : '150px',
					height : '35px'
				}).resizable();

			} else if (id === 'elVideo') {
				
				var str = 	"<video width='100%' height='100%' controls>" + 
							"	<source src='/media/buck.ogg' type='video/ogg'>" +	
							"</video>";
				$newElement = $(str);
				$parent.css({
					width : '300px',
					height : '250px',
					"padding" : '5px',
					'overflow': 'hidden'
				}).resizable();
				
			} else if (id === "elImage") {
				
				$newElement = $("<image src='/media/logo.svg' title='a logo ...' style='width : 100%; height : 100%; background : white;' />");
				$parent.css({
					width : '300px',
					height : '250px'
				}).resizable();
				
			} else if (id === 'elPost') {
				
			}
			
			$parent.bind('dblclick', function() {
				$(this).remove();
			});
			
			$parent.append($newElement);
			
			$("#dashboard").append($parent);
			
		}
	});	//	draggable element


		/*$("body").dblclick( function() {
		
		$.ajax({
			type: 'put',
			url: '',
			data: '',
			success: function(data, textStatus, jqXHR) {
				//	put receive
			}, error: function(jqXHR, textStatus, errorThrown) {
				//	error
			}
		});
		
		
		
	});*/

});
