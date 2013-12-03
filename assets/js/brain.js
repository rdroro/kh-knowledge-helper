

function launchEditor(id) {

if (id !== 'ftxt' && id !== 'title' && !$('#' + id).hasClass('postit')) {
		tinymce.init({
			selector : '#' + id,
			menubar : false,
			plugins : 'link image lists textcolor emoticons autoresize',
			toolbar: 'bold italic underline | link image',
			resize : false,
			statusbar : false,
			height : '80%',
			padding : '20px'
		});
	}
}

function getHtml() {
	var clone = $('body').clone();
	
	clone.find('.cross').remove();
	clone.find('.toolbar').remove();
	clone.find('.colorSelector, .colorpickerhtml').remove()
	clone.find('#dock').remove()
	clone.find('input, textarea').attr('readonly', true);
	return clone.html();
}

$(document).ready( function() {
	
	
	$('#fiche img').click( function() {
		console.log (getHtml())
	})
	//	main script
	
	$('#lienFiche').change( function() {
		if ($(this).val != null) {
			$('#fiche img').prop('src', $(this).val())
		} else {
			$('#fiche img').prop('src', "css/insertion-image.svg")
			
		}
	});
	
	$('#dashboard').on('click', '.cross', function() {
		console.log( $(this).parent() )
		if ($(this).parent().hasClass('elP') || $(this).parent().hasClass('txtP')) {
			$(this).parent().remove()
		}
		$(this).parent().parent().remove()
	})
	
	$('#dashboard').on('click', '.containeur', function() {
		var idx = $(this).css('z-index');
		$(this).css('z-index', 100)
		$(this).mouseleave( function() {
			$(this).css('z-index', idx)
		})
	});
	
	$('#dashboard').on('click', function() {
		console.log(true)

		$('.containeur .colorSelector').ColorPicker({
			color : '#0000ff',
			onShow : function(colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide : function(colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onSubmit : function(hsb, hex, rgb, el) {
				console.log()
				if ($(el).find('textarea').hasClass('postit') == false) {
					
					$(el).find('textarea').css('background', '#' + hex)
					$(el).find('.colorSelector div').css('background-color', '#' + hex);
				}
			}
		}); 

	});
	
	$('#dashboard').on('change', ".toolbar", function() {
		

		if ( $(this).hasClass('toolvideo') ) {
			//	video
		} else {
			//	image
			console.log("aaa")
			console.log($(this).parent('.containeur').html())
			$(this).parent('.containeur').find('img').prop('src', $(this).find('input').val());
		}
	});
	
	$('#dashboard').on('click', 'textarea', function() {
		launchEditor( $(this).prop("id") );		
	});
	
	var saveX, saveY, count = 0;
	
	$('#dock .ui-widget-content').draggable({
		helper : "clone",
		//revert : true,
		containment : "#dashboard",
		drag: function(event, ui) {
			saveX = event.pageX -100;
			saveY = event.pageY -100;
		},
		stop : function(event, ui) {
			
			var $parent = $("<div class='containeur ui-content-widget'></div>").draggable();	//	create a draggable parent
			var $newElement = null;
			var id = $(this).prop('id');
			
			$parent.css({
				left : saveX,
				top : saveY,
				"position" : "absolute",
				"border" : "4px #333 solid"
			});
			
			if (id === 'elText') {
				
				var $toolbar = $(
						'<div class="colorSelector" style="width : 30px !important; height : 30px; margin : 5px !important; float : left;">'+
						'<div style="background-color: #0000ff"></div></div>' + 
						'<div class="cross" style="width : 30px; !important; margin : 5px !important" >X</div>'
						);
				$newElement = $("<textarea style=' height : 70%; width : 100%;overflow : hidden; resize : none; margin-left : -3px; margin-top : -3px;' id='txt_" + count + "'</textarea>");
				$newElement.css({
					marginTop : -1,
					marginLeft : -1,
					width : '100%',
					height : '80%'
				})
				$parent.addClass('txtP');
				$parent.css({
					width : '435px',
					height : '200px'
				}).resizable();
				

			} else if (id === 'elVideo') {
				
				var $toolbar = 	$(
							"<div style='height : 20%;'>" + 
								"<input type='text' class='form-control toolbar toolvideo' placeholder='Entrez votre lien...' />" + 
								"<div class='cross' style='color : white !important' >X</div>"+
							"</div>"
					);
					
				$parent.addClass('elV');
				var str = 	"<video width='100%' height='80%' style='height : 80% !important' controls>" + 
							"	<source src='http://techslides.com/demos/sample-videos/small.mp4' type='video/mp4'>" +	
							"</video>";
				$newElement = $(str);
				$parent.css({
					width : '300px',
					height : '250px',
					"padding" : '5px',
					overflow : 'hidden',
					background : "#333"
				}).resizable();
				
			} else if (id === "elImage") {
				
								var $toolbar = 	$(
							"<div style='height : 20%;'>" + 
								"<input type='text' class='form-control toolbar toolvideo' style='margin: 6px !important; width : 70% !important' placeholder='Entrez votre lien...' />" + 
								"<div class='cross' >X</div>"+
							"</div>"
							);
				$newElement = $("<image src='css/insertion-image.svg' title='a logo ...' style='width : 100%; height : 80%; background : white;' />");
				
				$($parent).addClass('elI');
				$parent.css({
					width : '460px',
					overflow  : "hidden",
					height : '260px'
				}).resizable({
				    handles: 'se',
				    
				});
				
			} else if (id === 'elPost') {
								var $toolbar = $('<div class="cross" >X</div>'
						);
				$newElement = $("<textarea class='postit' id='textarea_" + count + "'></textarea>");
				$($parent).addClass('elP');
				count++;
				$newElement.css({
					marginTop : -1,
					marginLeft : -1,
					width : '101%',
					height : '80%'
				})
				$parent.css({
					width : '180px',
					height : '180px'
				}).resizable({
					aspectRatio: 16/9,
				    handles: 'se'
				});
			}
			if (id !== 'elText' && id !== 'elPost') $toolbar.addClass('toolbar')
			$parent.append($newElement).append($toolbar);
			
			$("#dashboard").append($parent);
			
			
		}
		
	});	//	draggable element

	
	$('#fiche textarea').click( function() {
		launchEditor( $(this).prop("id") );
	})
	
	
	

});
