var player = document.getElementById('player')
var points = 3
var position = {
  pLeft:400,
  pTop:100,
  aLeft: 0,
  aTop: 0,
  sLeft: 0,
  sTop: 0
}
var level = 2
var moveCount = 0
var badMove = 0
var area = document.getElementById('area')
var thisForDodge
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
  if (e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 39 || e. keyCode === 40) {
    if(moveCount % 2) {
      $("#player").css({
        "background-image" : "url(player2.png)"
      })
      moveCount += 1
    }
    else {
      $("#player").css({
        "background-image" : "url(player1.png)"
      })
      moveCount += 1
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

}
const switchDirectionY = function($this) {

      var y = Math.random()*(20 - (-20)) + (-20)
      y = Math.round(y)
      $this.find(".by").html(`${y}`)
     /* var x = parseInt($this.find(".bx").html())
      var y = (random())*Math.round(Math.sqrt(400 - (x**2)))
      $this.find(".by").html(`${y}`)
      console.log(y) */

    }
const createBaddies = function() {
   if (level === 1) {
      var baddies = ['baddie0','baddie1','baddie2']
   }
   if (level === 2) {
      var baddies = ['baddie3','baddie4','baddie5', 'baddie6', 'baddie7']
   }
   if (level === 3) {
      var baddies = ['baddie8', 'baddie9', 'baddie10', 'baddie11', 'baddie12']
   }
  baddies.forEach(function(b) {
    $("#area").append(`<div id=${b} class ='baddie'></div>`)
  })
  $('.baddie').css({"background-image" : "url(Enemy1.png)" , "width" : "40px", "height" : "40px",
   "position" : "absolute"})
  $('.baddie').each(function(b){
      var $this = $(this)
      $this.css({"left" : `${Math.floor(Math.random()*2060)}px`, "top" : `${Math.floor(Math.random()*2060)}px`})
      if(level === 2) {
         $this.addClass("level2")
      }
      if (level === 3) {
         $this.addClass('level3')
      }
      $this.append( `<p id='${b}x' class="bx">0</p>`)
      $this.append( `<p id='${b}y' class="by">0</p>`)
      $this.find("p").css({
        "font-size" : "0px"
      })
      switchDirectionX($this)
      switchDirectionY($this)
  })
}


const pictureSwitch = function($this) {
   if (badMove % 2 && level < 3) {
      $this.css({
         "background-image" : "url(Enemy1.png)"
      })
      badMove += 1
   }
   else if (level < 3) {
      $this.css({
        "background-image" : "url(Enemy2.png)"
      })
      badMove += 1
    }
    if (badMove % 2 && level > 2) {
      $this.css({
         "background-image" : "url(EnemyK1.png)"
      })
      badMove += 1
    }
    else if (level > 2) {
      $this.css({
         "background-image" : "url(EnemyK2.png)"
      })
      badMove += 1
    }
}

const level2dodge = function($this, $p) {
   if (Math.abs($p.top - position.pTop) < 100 && Math.abs($p.left - position.pLeft) < 100 && $this.hasClass("dodged") === false) {
        switchDirectionX($this)
        switchDirectionY($this)
        $this.addClass("dodged")
        thisForDodge = $this
        setTimeout(function($this){
            thisForDodge.removeClass('dodged')
            console.log("timer worked")
        }, 1500)
   }

}

const timer = function() {
  $('.baddie').each(function(){

    $p = $(this).position()
    var $this = $(this)
    if (level === 2) {
      level2dodge($this, $p)
    }
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
    pictureSwitch($this)

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
    "height" : "26px",
    "background-image" : "url(SpleenCollector.png)"
  })
  clicked = true

  window.setTimeout(function() {
    $("#weapon").remove()
    clicked = false
  }, 500)
  $(".baddie ").each(function(){
    let wP = $("#weapon").position()
    let bP = $(this).position()

    if (wP.left + 30 >= bP.left && wP.left <= bP.left + 40 && wP.top + 30 >= bP.top && wP.top <= bP.top + 40) {
      if ($(this).hasClass("dead") === false) {
      $(this).find("p").remove()
      $(this).css({
        "background-image" : "url(Enemy3.png)"
      })
      $(this).addClass("dead")
      $(this).removeClass("baddie")
      points += 1
      $('#score').html(`Spleens Collected: ${points}`)
      levelCheck()
      }
    }
  })
}
}
createBaddies()
const levelCheck = function() {
   if (points === 3 && level === 1) {
      level = 2
      $("#level").html(`Level 2`)
      createBaddies()
   }
   if (points === 8 && level === 2){
      $("#level").html("Level 3")
      level = 3
      createBaddies()
   }
}
$('#level').html(`Level ${level}`)
$('#score').html(`Spleens Collected: ${points}`)
window.setInterval(timer, 150)


