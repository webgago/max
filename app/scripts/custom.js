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

  $('.background.lazy').each(function() {
    let background = $(this).prop('style')['background-image'];
    let url = background.replace(/url\("?(.*?)"?\)/, '$1');

    console.log(url)
    $.cacheImage(url, {
      load: e => $(this).removeClass('lazy')
    })
  })
})

WebFont.load({
  google: {
    families: ['Playfair+Display:400,700,400italic,700italic', 'Raleway:300,500,800', 'Source+Sans+Pro:100,300,400,600,700,900']
  }
});

