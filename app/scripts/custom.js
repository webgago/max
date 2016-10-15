jQuery(function() {
  let slider = $('.controller[data-slider-id="services"]');
  let backgrounds = $('.slide[name="services"] .background');

  slider.find('li').click(e => {
    let index = $(e.currentTarget).index();
    backgrounds.removeClass('shown')
    $(backgrounds[index]).addClass('shown')
  });

  $(window).on('slideChange', function(event, number, element){
    setInterval(function(){
      if($('.slideshow').hasClass('selected')){
        let events = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';

        let previousBackground = $('.slideshow.selected .background.shown');
        let nextBackground = $('.slideshow.selected .background.shown').nextOrFirst('.background');
        nextBackground.addClass('shown');
        previousBackground.removeClass('shown');
      }
    }, 5000);
  });
})

