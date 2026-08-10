let navbar = document.querySelector('#navbar');
let links = document.querySelectorAll('.nav-link');
let logoNavbar = document.querySelector('#logoNavbar');
console.dir(logoNavbar);
window.addEventListener('scroll',()=>{
    let scrolled =window.scrollY;

    if(scrolled > 0){
        navbar.classList.remove('bg-yellow');
        navbar.classList.add('bg-red');
        navbar.style.height= '140px';
        links.forEach((link)=>{
            link.style.color= 'var(--white)'
        });
        logoNavbar.src='http://127.0.0.1:5500/Media/logoWhite512px.png';
    }else{
        navbar.classList.add('bg-yellow');
        navbar.classList.remove('bg-red');
        navbar.style.height= '70px';
        links.forEach((link)=>{
            link.style.color= 'var(--white)'
        });
       logoNavbar.src='http://127.0.0.1:5500/Media/logoBlack512px.png'
    }
})