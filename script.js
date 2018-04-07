var dark = false

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
  alert(hours + " : " + minutes)
}
