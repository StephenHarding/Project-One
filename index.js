var player = document.getElementById('player')

var position = {
  pLeft:400,
  pTop:100,
  aLeft: 0,
  aTop: 0,
  sLeft: 0,
  sTop: 0
}
var level = 1

var area = document.getElementById('area')

document.addEventListener("keydown", function(e){
  if (e.keyCode === 39) {
    if (position.pLeft >= 2060){
      return
    }
    if (position.pLeft - ((-1)*position.aLeft) + 20 > 820 && (position.pLeft < 2080 && position.pLeft > 600 )) {
      area.style.left = position.aLeft - 20 + 'px'
      position.aLeft -= 20
      player.style.left = position.pLeft + 20 + 'px'
      position.pLeft += 20
    }
    else {
      player.style.left = position.pLeft + 20 + 'px'
      position.pLeft += 20
    }
  }
   if (e.keyCode === 37) {
    if (position.pLeft <= 0) {
      return
    }
    if (position.pLeft - ((-1)*position.aLeft) < 140 && (position.pLeft > 80 && position.pLeft < 1620)) {
      area.style.left = position.aLeft + 20 + 'px'
      position.aLeft += 20
          player.style.left = position.pLeft - 20 + 'px'
          position.pLeft -= 20
    }
    else {
      player.style.left = position.pLeft - 20 + 'px'
      position.pLeft -= 20
    }
  }
  if (e.keyCode === 38) {
    if (position.pTop <= 0) {
      return
    }
    if (position.pTop - ((-1)*position.aTop) < 140 && (position.pTop > 80 && position.pTop < 1620)) {
      area.style.top = position.aTop + 20 + 'px'
      position.aTop += 20
          player.style.top = position.pTop - 20 + 'px'
          position.pTop -= 20
    }
    else {
      player.style.top = position.pTop - 20 + 'px'
      position.pTop -= 20
    }
  }
  if (e.keyCode === 40) {
    if (position.pTop >= 2060){
      return
    }
    if (position.pTop - ((-1)*position.aTop) + 20 > 480 && (position.pTop < 2000 && position.pTop > 440 )) {
      area.style.top = position.aTop - 20 + 'px'
      position.aTop -= 20
      player.style.top = position.pTop + 20 + 'px'
      position.pTop += 20
    }
    else {
      player.style.top = position.pTop + 20 + 'px'
      position.pTop += 20
    }
  }
})
    var random = function() {
      if(Math.floor(Math.random() * 2) === 1) {
        return (-1)
      }
      else {
        return 1
      }
    }
if (level === 1) {
  var baddies = ['baddie0','baddie1','baddie2']
  baddies.forEach(function(b) {
    $("#area").append(`<div id=${b} class ='baddie'></div>`)
  })
  $('.baddie').css({"background-color" : "black" , "width" : "40px", "height" : "40px",
   "position" : "absolute"})
  $('.baddie').each(function(b){
      $(this).css({"left" : `${Math.floor(Math.random()*2060)}px`, "top" : `${Math.floor(Math.random()*2060)}px`})
      var x = Math.random()*(21 - (-20)) + (-20)
      if (x > 20) {
        x = 20
      }
      var y = (random())*Math.floor(Math.sqrt(400 - (x**2)))
      x = Math.floor(x)
      $(this).append( `<p id='${b}x' class="bx">${x}</p>`)
      $(this).append( `<p id='${b}y' class="by">${y}</p>`)
      console.log(x)
      console.log(y)
  })
}

const timer = function() {
  $('.baddie').each(function(){
    $p = $(this).position()
    console.log($(this)[0].html())
    $(this).css({'left' : `4px`})
  })

}
window.setInterval(timer, 1000)


