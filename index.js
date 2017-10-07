var player = document.getElementById('player')

var position = {
  pLeft:400,
  pTop:100,
  aLeft: 0,
  aTop: 0,
  sLeft: 0,
  sTop: 0
}
var area = document.getElementById('area')

document.addEventListener("keydown", function(e){
  console.log(e)
  if (e.keyCode === 39) {
    if (position.pLeft >= 2060){
      return
    }
    if (position.pLeft - ((-1)*position.aLeft) + 20 > 820 && (position.pLeft < 2080 && position.pLeft > 600 )) {
      area.style.left = position.aLeft - 20 + 'px'
      position.aLeft -= 20
      player.style.left = position.pLeft + 20 + 'px'
      position.pLeft += 20
      console.log("position pLeft" + position.pLeft)
      console.log("position aLeft" + position.aLeft)
    }
    else {
      player.style.left = position.pLeft + 20 + 'px'
      position.pLeft += 20
      console.log("position pLeft" + position.pLeft)
      console.log("position aLeft" + position.aLeft)
    }
  }
   if (e.keyCode === 37) {
    if (position.pLeft <= 0) {
      return
    }
    console.log('position pLeft' + position.pLeft)
    console.log('position aLeft' + position.aLeft)
    if (position.pLeft - ((-1)*position.aLeft) < 140 && (position.pLeft > 80 && position.pLeft < 1620)) {
      area.style.left = position.aLeft + 20 + 'px'
      position.aLeft += 20
          player.style.left = position.pLeft - 20 + 'px'
          position.pLeft -= 20
    }
    else {
      player.style.left = position.pLeft - 20 + 'px'
      position.pLeft -= 20
          console.log('position pLeft' + position.pLeft)
    console.log('position aLeft' + position.aLeft)
    }
  }
  if (e.keyCode === 38) {
    if (position.pTop <= 0) {
      return
    }
    console.log('position pTop' + position.pTop)
    console.log('position aTop' + position.aTop)
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
      console.log("position pTop" + position.pTop)
      console.log("position aTop" + position.aTop)
    }
    else {
      player.style.top = position.pTop + 20 + 'px'
      position.pTop += 20
      console.log("position pTop" + position.pTop)
      console.log("position aTop" + position.aTop)
    }
  }
})

