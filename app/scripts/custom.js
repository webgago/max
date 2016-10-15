jQuery(function() {
  let slider = $('.controller[data-slider-id="services"]');
  let backgrounds = $('.slide[name="services"] .background');

  slider.find('li').click(e => {
    let index = $(e.currentTarget).index();
    backgrounds.removeClass('shown')
    $(backgrounds[index]).addClass('shown')
  })
})

