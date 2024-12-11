/* 
Implement a click counter that: 
Tracks clicks on a button
Disables the button after 5 clicks
Resets the counter after 10 seconds of inactivity

*/

const button = document.getElementById('bu')
const cou = document.getElementById('cou')
let count = 0

button.addEventListener('click', (clicked) => {
    count++
    cou.textContent = count
    if(count === 5){
        button.disabled = true
    }
})
//reset button after 10 seconds using set timeout
setTimeout(() => {
    count = 0
    cou.textContent = count
    button.disabled = false
}, 10000)

