loadApplication = ->
  console.log 'Application Loaded'
  $(svgInjector)

svgInjector = ->
  console.log 'svg injector loaded'
  mySVGsToInject = document.querySelectorAll("img.inject-me")
  SVGInjector mySVGsToInject



  
$(loadApplication)
