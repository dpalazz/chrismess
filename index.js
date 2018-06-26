const form = document.querySelector('form')
const changeHeader = function(ev) {
  ev.preventDefault()
  const headerToChange = document.querySelector('h3')
  const inputValue = document.querySelector('#chris').value 
  headerToChange.textContent = inputValue
  form.reset()
}

form.addEventListener('submit', changeHeader)
