const  Counter = require('./Counter') 
const button = document.getElementById('red')
const app = document.querySelector('.App')
const showCount = document.createElement('h1')


button.addEventListener('click', () => {
  Counter.increment()
  showCount.innerHTML = `${Counter.getCount}`
  console.log('Increased counter')
})

app.appendChild(showCount)