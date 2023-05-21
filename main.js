function saveChanges() {
  var parameterInputs = document.querySelectorAll('input[type="text"]')

  var parameterValues = {}

  parameterInputs.forEach(function (input) {
    var parameterName = input.getAttribute('name')
    var parameterValue = input.value
    parameterValues[parameterName] = parameterValue
  })

  var displayElement = document.getElementById('section-display')
  displayElement.innerHTML = JSON.stringify(parameterValues, null, 2)
}
