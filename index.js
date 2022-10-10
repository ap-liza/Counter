let count =0;
let counter = document.getElementById('counter')
let decreaseBtn= document.getElementById('decrease')
let resetBtn= document.getElementById('reset')
let increaseBtn= document.getElementById('increase')

decreaseBtn.addEventListener('click', function(){
    count--
    counter.textContent = count
    counter.style.color = 'red'
})
resetBtn.addEventListener('click', function(){
    count=0;
    counter.textContent = 0;
    counter.style.color = 'black'
})
 increaseBtn.addEventListener('click', function(){
    count++
    counter.textContent = count
    counter.style.color = 'green'
 })

 