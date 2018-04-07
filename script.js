var dark = false

var fillamount = 0
var filled = false

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

  document.getElementById('fill-button').addEventListener('click', function (e) {
    if (filled === true) {
      document.getElementById('fill-button').innerHTML = 'Fill'
      document.getElementById('container7').style.visibility = 'hidden'
      document.getElementById('container6').style.visibility = 'hidden'
      document.getElementById('container5').style.visibility = 'hidden'
      document.getElementById('container4').style.visibility = 'hidden'
      document.getElementById('container3').style.visibility = 'hidden'
      document.getElementById('container2').style.visibility = 'hidden'
      document.getElementById('container1').style.visibility = 'hidden'
      filled = false
      return
    }

    if (filled !== true) {
      switch (fillamount) {
        case 0:
          document.getElementById('container7').style.visibility = 'visible'
          fillamount = fillamount + 1
          break
        case 1:
          document.getElementById('container6').style.visibility = 'visible'
          fillamount = fillamount + 1
          break
        case 2:
          document.getElementById('container5').style.visibility = 'visible'
          fillamount = fillamount + 1
          break

        case 3:
          document.getElementById('container4').style.visibility = 'visible'
          fillamount = fillamount + 1
          break
        case 4:
          document.getElementById('container3').style.visibility = 'visible'
          fillamount = fillamount + 1
          break
        case 5:
          document.getElementById('container2').style.visibility = 'visible'
          fillamount = fillamount + 1
          break
        case 6:
          document.getElementById('container1').style.visibility = 'visible'
          fillamount = 0
          filled = true
          document.getElementById('fill-button').innerHTML = 'Empty'
          break
      }
    }
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
