$ (document).ready(function($) {
    
    
$('.slider-wrap').owlCarousel({
    loop: true,
    nav: true,
    lazyLoad: true,
    dots: true,
    navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    responsive: {
        0: {
            items: 1
        },
        
        600: {
            items: 1
        },
        
        1000: {
            items: 1
        }
    }
});
    
  $('.logo-image').owlCarousel({
    loop: true,
    nav: true,
    lazyLoad: true,
    dots: true,
    navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    responsive: {
        0: {
            items: 1
        },
        
          480: {
            items: 2
        },
        
        600: {
            items: 2
        },
        
         768: {
            items: 3
        },
        
        920: {
            items: 3
        },
        
        1000: {
            items: 4
        }
    }
});  
})

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}











