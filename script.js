function onMouseMove(event) {
  tool.fixedDistance = Math.floor(Math.floor(Math.random() * 2) +1)
  var path = new Path.Circle({
    center: event.middlePoint,
    radius: Math.round(Math.random() * 25) + 5
  })
  path.fillColor = {
    hue: event.count * 3,
    saturation: 1,
    brightness: 1
  }
}