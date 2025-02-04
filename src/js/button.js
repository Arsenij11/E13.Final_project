const button = document.querySelector('button');

button.addEventListener('mouseover', (event) => {
    event.target.style.cursor = 'pointer';
})
button.addEventListener('mouseout', (event)=>{
    event.target.style.cursor = 'none';
})