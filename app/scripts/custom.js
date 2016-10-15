jQuery(function() {
  let slider = $('.controller[data-slider-id="services"]');
  let backgrounds = $('.slide[name="services"] .background');

  slider.find('li').click(e => {
    let index = $(e.currentTarget).index();
    backgrounds.removeClass('shown')
    $(backgrounds[index]).addClass('shown')
  });

  let productsSlideshowId = null;

  $(window).on('slideChange', function(event, number, element){
    if(element.attr('name') == 'products') {
      if(productsSlideshowId) return;

      productsSlideshowId = setInterval(function(){
        if($('.slideshow').hasClass('selected')){
          let previousBackground = $('.slideshow.selected .background.shown');
          let nextBackground = $('.slideshow.selected .background.shown').nextOrFirst('.background');

          nextBackground.addClass('shown');
          previousBackground.removeClass('shown');
        }
      }, 7000);
    } else {
      clearInterval(productsSlideshowId);
      productsSlideshowId = null;
    }
  });
})

