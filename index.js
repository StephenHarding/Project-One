var player = document.getElementById('player')
var points = 0
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
  if (e.keyCode === 32) {
    spaceBar()
  }
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

const switchDirectionX = function($this) {
  console.log(`this is ${(Math.abs(parseInt($this.find(".bx").html())) + Math.abs(parseInt($this.find(".by").html()))) < 10}`)

      var x = Math.random()*(20 - (-20)) + (-20)
      x = Math.round(x)
      $this.find(".bx").html(`${x}`)
      console.log(x)

}
const switchDirectionY = function($this) {

      console.log("hello2")
      var y = Math.random()*(20 - (-20)) + (-20)
      y = Math.round(y)
      $this.find(".by").html(`${y}`)
      console.log(y)
     /* var x = parseInt($this.find(".bx").html())
      var y = (random())*Math.round(Math.sqrt(400 - (x**2)))
      $this.find(".by").html(`${y}`)
      console.log(y) */

    }
if (level === 1) {
  var baddies = ['baddie0','baddie1','baddie2']
  baddies.forEach(function(b) {
    $("#area").append(`<div id=${b} class ='baddie'></div>`)
  })
  $('.baddie').css({"background-color" : "black" , "width" : "40px", "height" : "40px",
   "position" : "absolute"})
  $('.baddie').each(function(b){
      var $this = $(this)
      $this.css({"left" : `${Math.floor(Math.random()*2060)}px`, "top" : `${Math.floor(Math.random()*2060)}px`})
      $this.append( `<p id='${b}x' class="bx">0</p>`)
      $this.append( `<p id='${b}y' class="by">0</p>`)
      switchDirectionX($this)
      switchDirectionY($this)
  })
}


const timer = function() {
  $('.baddie').each(function(){

    $p = $(this).position()
    var $this = $(this)
    if ($p.top + 20 > 2060) {
      while (parseInt($this.find(".by").html()) > 0) {
        switchDirectionY($this)
        switchDirectionX($this)
      }
    }
    else if ($p.top - 20 < 0) {
      while (parseInt($this.find(".by").html()) < 0) {
        switchDirectionY($this)
        switchDirectionX($this)
      }
    }
    if ($p.left + 20 > 2060) {
      while (parseInt($this.find(".bx").html()) > 0) {
        switchDirectionX($this)
        switchDirectionY($this)
      }
    }
    else if ($p.left - 20 < 0) {
      while (parseInt($this.find(".bx").html()) < 0) {
        switchDirectionX($this)
        switchDirectionY($this)
      }
    }

    $this.css({'left' : `${$p.left + parseInt($this.children(".bx").html()) + "px"}`,
      "top" : `${$p.top + parseInt($this.children(".by").html()) + "px"}`
      })

  })
}
var clicked = false
const spaceBar = function() {

  if (clicked === false){
  $('#area').append('<div id="weapon"></div>')
  $('#weapon').css({
    'left' : `${position.pLeft + 30}px`,
    "top" : `${position.pTop + 5}px`,
    "position" : "absolute",
    "width" : "30px",
    "height" : "30px",
    "background-color" : "blue"
  })
  clicked = true
  }
  window.setTimeout(function() {
    $("#weapon").remove()
    clicked = false
  }, 300)
  $(".baddie ").each(function(){
    let wP = $("#weapon").position()
    let bP = $(this).position()

    if (wP.left + 30 >= bP.left && wP.left <= bP.left + 40 && wP.top + 30 >= bP.top && wP.top <= bP.top + 40) {
      console.log("AAAAAAAAAAAAAA")
      $(this).find("p").remove()
      $(this).css({
        "background-color" : "blue"
      })
      points += 1
    }
  })
}
window.setInterval(timer, 150)


