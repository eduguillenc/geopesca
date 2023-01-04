          jQuery('#gallery').carousel({
            interval: 5000
            })

            // Modify each slide to contain five columns of images
            jQuery('#gallery.carousel .carousel-item').each(function(){
                var minPerSlide = 4;
                var next = jQuery(this).next();
                if (!next.length) {
                next = jQuery(this).siblings(':first');
                }
                next.children(':first-child').clone().appendTo(jQuery(this));
                
                for (var i=0;i<minPerSlide;i++) {
                    next=next.next();
                    if (!next.length) {
                        next = jQuery(this).siblings(':first');
                    }
                    
                    next.children(':first-child').clone().appendTo(jQuery(this));
                }
            });

            // Initialize carousel
            jQuery( ".carousel-item:first-of-type" ).addClass( "active" );
jQuery( ".carousel-indicators:first-child" ).addClass( "active" );
