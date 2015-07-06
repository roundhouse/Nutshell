var example, loadApplication;

loadApplication = function() {
  var styles;
  styles = ["display: block", "background: #f7cd81", "color: white", "padding: 20px 20px 20px 20px", "text-align: center", "font-weight: normal", "font-size: 20px", "line-height: 60px"].join(';');
  console.log('%c Nutshell!', styles, 'Has loaded.');
  return $(example);
};

example = function() {
  return console.log('Happy Coding!');
};

$(loadApplication);
