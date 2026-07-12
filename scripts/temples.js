const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');
hamButton.addEventListener('click', () =>{
    mainnav.classList.toggle('show');
    hamButton.classList.toggle('show');
});