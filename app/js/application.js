(function() {
  var example, loadApplication;

  loadApplication = function() {
    console.log('Application Loaded');
    return $(example);
  };

  example = function() {
    return console.log('example loaded');
  };

  $(loadApplication);

}).call(this);
