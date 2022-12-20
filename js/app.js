window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', '${vh}px');
});

jQuery(document).ready(function( $ ) { 

        // GRID
        $('.grid li').on("click", function(){
                if($(this).hasClass('active')){
                        $(this).toggleClass('active');
                } else{
                        $('.grid li').removeClass('active');
                        $(this).addClass('active');
                }
        });

        // Tabs
        // Show the first tab and hide the rest
        $('#tabs-nav li:first-child').addClass('active');
        $('.tab-content').hide();
        $('.tab-content:first').show();

        // Click function
        $('#tabs-nav li').click(function(){
          $('#tabs-nav li').removeClass('active');
          $(this).addClass('active');
          $('.tab-content').hide();
          
          var activeTab = $(this).find('a').attr('href');
          $(activeTab).scrollTop(0);
          $(activeTab).fadeIn();
          return false;
        }); 
});