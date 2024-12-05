const button = document.querySelector('#btn')
button.style.cursor = 'pointer';

button.addEventListener('mouseover', () => { 
    document.querySelector('#greeting').textContent = 'Hello Bela!';
});

button.addEventListener('mouseout', () => { 
    document.querySelector('#greeting').textContent = '';
});

