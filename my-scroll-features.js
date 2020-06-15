(() => {
  const loadScrollFeatures = function() {
    // init controller
    const controller = new ScrollMagic.Controller();
    console.log(controller);

    // create scenes and add them to controller
    new ScrollMagic.Scene({
      offset: 100,
    })
      .setClassToggle(document.querySelector('#header'), 'scrolled')
      .addTo(controller);
  };
  
  window.addEventListener('load', loadScrollFeatures);
})();