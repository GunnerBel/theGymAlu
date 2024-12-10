const h1 = document.createElement('h1'); 
h1.textContent = 'Hello, Mitali!';          
document.body.appendChild(h1);           

const but = document.createElement('button');
but.textContent = 'Click Me';
but.addEventListener('click', () => {
    console.log('You clicked the button!');
})
document.body.appendChild(but);


const ul = document.createElement('ul');
document.body.appendChild(ul);


for(let i = 0; i < 10; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${i} `;
    const button = document.createElement('button');
    button.textContent = 'X';
    button.addEventListener('click', () => {
        li.remove();
    })
    
    
    li.appendChild(button);
    ul.appendChild(li);
}

ul.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI') {
        console.log('you clicked' + e.target.textContent);
    }
})
