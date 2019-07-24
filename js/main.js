$(document).ready(function(){

	if ( $(window).width() < 999) {
	  
	} else {
		/*var art = $(".home .sec-1 .home-carousel article").css('bottom');
		art = art.slice(0,-2);
		var dots = $('.home .sec-1 .home-carousel .owl-dots').css('bottom');
		dots = dots.slice(0,-2);
			
		console.log(art);
		console.log(dots);
	  	$(window).scroll(function(e){
	  		parallaxScroll();
	  	});
		 
		function parallaxScroll(){
			var scrolled = $(window).scrollTop();
			var new_art = scrolled *.3;
			new_art = new_art + art;
			
			$('.home .sec-1 .home-carousel article').css('bottom', ( 8 + (scrolled * .4))+'px');
			$('.home .sec-1 .home-carousel .owl-dots').css('bottom', ( -52 + (scrolled * .4)) + 'px');
			
			
		}*/
	}






	$(window).on('scroll resize', function() {
        $('section').each(function() {
          getVisible($(this));
        })
          $('.benchmarks').each(function() {
          getVisible($(this));
        })
      });
       
      function getVisible(classname){

        var $el = classname,
        scrollTop = $(this).scrollTop(),
        scrollBot = scrollTop + $(this).height(),
        elTop = $el.offset().top,
        elBottom = elTop + $el.outerHeight(),
        visibleTop = elTop < scrollTop ? scrollTop : elTop,
        visibleBottom = elBottom > scrollBot ? scrollBot : elBottom;
        visible_area = visibleBottom - visibleTop;
        trigger_animate_pixel = $(window).innerHeight()*0.3;
        
        if ($el.innerHeight() < trigger_animate_pixel) {
          
         var offtop =  $el.offset().top - $(window).innerHeight();
         if ($(window).scrollTop() - offtop >=  trigger_animate_pixel) {
            $el.addClass('animated');
         }
         

        } 
        else {
             if (trigger_animate_pixel <= visible_area) {
              $el.addClass('animated');
            }
        }


      }

	
 	}); 


	$(window).scroll(function(){

      if($('.home .benchmarks').hasClass('animated') && $('.home .sec-blue-float').hasClass('counted') == false){
        $('.count').each(function () {
          $(this).prop('Counter',0).animate({
          Counter:  + $(this).text()
          }, {
          duration: 3000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
          });
        });
        $('.home .sec-blue-float').addClass('counted')
      }

    });

    

/*$(window).scroll(function() {
	    var scroll = $(window).scrollTop();
	    
	    if(scroll > position) {
	        console.log('scrollDown');
	        $('div').text('Scrolling Down Scripts');
	    } else {
	         console.log('scrollUp');
	         $('div').text('Scrolling Up Scripts');
	    }
	    position = scroll;
	});*/





/*$('div#bg-2-1').css('left',(-119+(scrolled*.5))+'px');
$('div#bg-1-1').css('right',(0+(scrolled*.5))+'px');	
$('.smoke-hldr').css('top',(0+(scrolled*1))+'px');
$('#smoke').css('width',(350+(scrolled*2))+'px');
$('#smoke').css('left', (250-(scrolled*.5))+'px');*/
 	 

/*var window_top = $(window).height();
		console.log(window_top);

		var elHeight = $('.sec-blue-float').outerHeight();
		var elDis = $('.sec-blue-float').offset().top;
		var Eltotal = elHeight + elDis;
		console.log('total' + Eltotal);

		$(window).on('scroll', function(){
		

			scrollTop = $(window).scrollTop() + window_top;
			console.log(scrollTop);

			if(scrollTop > Eltotal) {
				$(window).scroll(function(e){
		  			parallaxScroll();
		  		});
			 
				function parallaxScroll(){
					var scrolled = $(window).scrollTop();

					
					
					
				}
			} else {

			}

		});*/

 
 
 
 
 
 
 
 
 
 
 