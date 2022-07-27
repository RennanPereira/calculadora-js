const buttons = document.querySelectorAll('.numbers')
let display = document.querySelector('#display')
const equal = document.querySelector('.equal')

buttons.forEach(btn => {
  btn.addEventListener('click', e => {
    const value = e.target.value

    if(value === 'DEL'){
      display.innerText = display.innerText.slice(0, -1)
      return;
    }

    display.innerHTML = `${display.innerHTML}${value}`

    if (value === 'C') {
      display.innerText = ''
    }
    
  })
})
equal.addEventListener('click', e => {
  display.innerText = eval(display.innerText)
})
