let player = document.getElementById('player')
let points = 0
let position = {
  pLeft:400,
  pTop:100,
  aLeft: 0,
  aTop: 0,
}
let level = 0
let moveCount = 0
let badMove = 0
let area = document.getElementById('area')
let thisForDodge
let dead = false
document.addEventListener("keydown", function(e){
   if (dead){
      return
   }
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
    const random = function() {
      if(Math.floor(Math.random() * 2) === 1) {
        return (-1)
      }
      else {
        return 1
      }
    }

const switchDirectionX = function($this) {
  /*console.log(`this is ${(Math.abs(parseInt($this.find(".bx").html())) + Math.abs(parseInt($this.find(".by").html()))) < 10}`)
      */
      let x = Math.random()*(20 - (-20)) + (-20)
      x = Math.round(x)
      $this.find(".bx").html(`${x}`)

}
const switchDirectionY = function($this) {

      let y = Math.random()*(20 - (-20)) + (-20)
      y = Math.round(y)
      $this.find(".by").html(`${y}`)
     /* let x = parseInt($this.find(".bx").html())
      let y = (random())*Math.round(Math.sqrt(400 - (x**2)))
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
   if (level === 4) {
      var baddies = ['baddie13', 'baddies14', 'baddie15', 'baddie16', 'baddie17', 'baddie18']
   }
  baddies.forEach(function(b) {
    $("#area").append(`<div id=${b} class ='baddie'></div>`)
  })
  $('.baddie').addClass("1")
  $('.baddie').css({"background-image" : "url(Enemy1.png)" , "width" : "40px", "height" : "40px",
   "position" : "absolute"})
  $('.baddie').each(function(b){
      var $this = $(this)
      $this.css({"left" : `${Math.floor(Math.random()*2060)}px`, "top" : `${Math.floor(Math.random()*2060)}px`})
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
   if ($this.hasClass("1") && level < 3) {
      $this.css({
         "background-image" : "url(Enemy1.png)"
      })
      $this.removeClass("1")
      $this.addClass("2")
   }
   else if ($this.hasClass("2") && level < 3) {
      $this.css({
        "background-image" : "url(Enemy2.png)"
      })
      $this.removeClass("2")
      $this.addClass("1")
    }
    if ($this.hasClass("1") && level > 2) {
      $this.css({
         "background-image" : "url(EnemyK1.png)"
      })
      $this.removeClass("1")
      $this.addClass("2")
    }
    else if ($this.hasClass("2") && level > 2) {
      $this.css({
         "background-image" : "url(EnemyK2.png)"
      })
      $this.removeClass("2")
      $this.addClass("1")
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
        }, 1500)
   }

}
const level3Collision = function($this, $b) {
   let $play = $('#player').position()
   if ($play.top > $b.top - 10 && $play.top < $b.top + 50 && $play.left > $b.left - 10 && $play.left < $b.left + 50) {
      if (dead === false) {
         $("#sarea").append("<p>You Are Dead. No Hat For You</p>")
         $("#sarea").find("p").css({
          "font-size" : "32px",
          "text-align" : "center",
         "vertical-align" : "middle"
      })
      dead = true
      }
   }
}


const timer = function() {
  $('.baddie').each(function(){

    $p = $(this).position()
    var $this = $(this)
    if (level >= 3) {
      level3Collision($this, $p)
    }
    if (level === 2 || level === 4) {
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
let clicked = false
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
  $(".baddie").each(function(){
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

const levelCheck = function() {
   if (level === 0) {
      level = 1
      var levelChange = true
   }
   if (points === 3 && level === 1) {
      level = 2
      var levelChange = true
   }
   if (points === 8 && level === 2){
      level = 3
      var levelChange = true
   }
   if (points === 13 && level === 3){
      level = 4
      var levelChange = true
   }
   if (points === 19 && level === 4) {
      level = end
   }
   if (levelChange === true){
      $("#level").html(`Level ${level}`)
      $("#sarea").append(`<p>Level ${level}</p>`)
      $("#sarea").find("p").css({
      "font-size" : "32px",
      "text-align" : "center",
      "vertical-align" : "middle"
      })
      setTimeout(function(){
         $("#sarea").find("p").remove()
      }, 2000)
      createBaddies()
   }
}
const restart = function() {
   area.style.top = "0px"
   position.aTop = 0
   area.style.left = "0px"
   position.aLeft = 0
   player.style.top = "100px"
   position.pTop  = 100
   player.style.left = "400px"
   position.pLeft = 400
   level = 0
   points = 0
   dead = false
   $('#sarea').find("p").remove()
   $('#level').html(`Level ${level}`)
   $('#score').html(`Spleens Collected: ${points}`)
   $(".baddie").remove()
   $(".dead").remove()
   levelCheck()

}
$('#level').html(`Level ${level}`)
$('#score').html(`Spleens Collected: ${points}`)
levelCheck()
window.setInterval(timer, 150)



