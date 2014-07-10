(function() {
  var loadApplication, svgInjector;

  loadApplication = function() {
    console.log('Application Loaded');
    return $(svgInjector);
  };

  svgInjector = function() {
    var mySVGsToInject;
    console.log('svg injector loaded');
    mySVGsToInject = document.querySelectorAll("img.inject-me");
    return SVGInjector(mySVGsToInject);
  };

  $(loadApplication);

}).call(this);
