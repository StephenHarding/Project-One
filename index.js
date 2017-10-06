var player = document.getElementById('player')
var position = {
  pLeft:400,
  pTop:400,
  aLeft: 0,
  aTop: 0
}
var area = document.getElementById('area')

document.addEventListener("keydown", function(e){
  if (e.keyCode === 39) {
    if (position.pLeft + 20 <= 850) {
      player.style.left = position.pLeft + 20 + 'px'
      position.pLeft += 20
    }
    else {
      area.style.left = position.aLeft - 20 + 'px'
      position.aLeft -= 20

    }
  }
  else if (e.keyCode === 37) {
    player.style.left = position.pLeft - 20 + 'px'
    position.pLeft -= 20
  }   if (position.pLeft >= 850) {
      moveLevel(e)
   }
   else {
      movePlayer(e)
   }
})
const movePlayer = function(e) {
  if (e.keyCode === 39) {
    player.style.left = position.pLeft + 20 + 'px'
    position.pLeft += 20
  }
  else if (e.keyCode === 37) {
    player.style.left = position.pLeft - 20 + 'px'
    position.pLeft -= 20
  }
}
const moveLevel = function(e) {
  console.log(e)
}
