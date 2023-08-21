
/* const body = document.querySelector('body')
const toggle = document.querySelector('.toggle')
const header = document.querySelector('header')
const footer = document.querySelector('footer')

toggle.addEventListener('click', ()=> {
    body.classList.toggle('dark')
})

toggle.addEventListener('click', ()=> {
    toggle.classList.toggle('active')
})

toggle.addEventListener('click', ()=>{
    header.classList.toggle('text-header', 'a')
})

toggle.addEventListener('click', ()=> {
    footer.classList.toggle('text-footer')
}) */


const body = document.querySelector('body');
const toggle = document.querySelector('.toggle');
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const headerLinks = document.querySelectorAll('header a'); // Selectăm toate link-urile din header

toggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    toggle.classList.toggle('active');
    header.classList.toggle('text-header'); // Înlăturăm 'a' din clasă, nu trebuie specificat aici
    footer.classList.toggle('text-footer');
    
    // Schimbăm culoarea link-urilor în funcție de starea butonului
    if (toggle.classList.contains('active')) {
        headerLinks.forEach(link => link.style.color = 'aqua');
    } else {
        headerLinks.forEach(link => link.style.color = 'black');
    }
});