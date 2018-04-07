var dark = false

window.onload = function () {
  document.getElementById('fancy').addEventListener('mouseover', function (e) {
    document.getElementById('fancy').style.borderBottom = 'blue solid 2px'
    document.getElementById('fancy').style.borderTop = '#DCDCDC solid  2px'
    document.getElementById('fancy').style.color = 'blue'
    document.getElementById('nav-icon').style.visibility = 'visible'
  })

  document.getElementById('fancy').addEventListener('mouseout', function (e) {
    document.getElementById('fancy').style.border = 'white'
    document.getElementById('fancy').style.color = 'grey'
    document.getElementById('nav-icon').style.visibility = 'hidden'
  })
}

function changeBackground() {
  var color = document.getElementById('background-color-input').value
  document.getElementById('button-background').style.background = color
}

function toggleColors() {

  if (dark === true) {
    document.getElementById('button-background').style.background = 'white'
    dark = false
  } else {
    document.getElementById('button-background').style.background = 'grey'
    dark = true
  }
}

function showTime() {
  var now = new Date()
  var hours = now.getHours()
  if (hours > 12) {
    hours = hours - 12
  }
  var minutes = now.getMinutes()
  alert(hours + ' : ' + minutes)
}

document.addEventListener('keydown', function (e) {
  if (e.keyCode === 37) {
    document.getElementById('left-arrow').style.background = 'yellow'
  }
  if (e.keyCode === 38) {
    document.getElementById('up-arrow').style.background = 'yellow'
  }
  if (e.keyCode === 39) {
    document.getElementById('right-arrow').style.background = 'yellow'
  }
  if (e.keyCode === 40) {
    document.getElementById('down-arrow').style.background = 'yellow'
  }
})

document.addEventListener('keyup', function (e) {
  if (e.keyCode === 37) {
    document.getElementById('left-arrow').style.background = 'white'
  }
  if (e.keyCode === 38) {
    document.getElementById('up-arrow').style.background = 'white'
  }
  if (e.keyCode === 39) {
    document.getElementById('right-arrow').style.background = 'white'
  }
  if (e.keyCode === 40) {
    document.getElementById('down-arrow').style.background = 'white'
  }
})
