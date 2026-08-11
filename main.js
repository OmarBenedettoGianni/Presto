let navbar = document.querySelector('#navbar');
let links = document.querySelectorAll('.nav-link');
let logoNavbar = document.querySelector('#logoNavbar');
let collapse = document.querySelector('#collapse');
let firstNumber = document.querySelector('#firstNumber');
let secondNumer = document.querySelector('#secondNumber');
let thirdNumber = document.querySelector('#thirdNumber');
let confirm = true


window.addEventListener('scroll',()=>{
    let scrolled =window.scrollY;
    if(scrolled > 0){
        navbar.classList.remove('bg-yellow');
        navbar.classList.add('bg-red');
        collapse.classList.remove('bg-yellow');
        collapse.classList.add('bg-red');
        navbar.style.height= '140px';
        links.forEach((link)=>{
            link.style.color= 'var(--white)'
        });
        logoNavbar.src='http://127.0.0.1:5500/Media/logoWhite512px.png';
    }else{
        navbar.classList.add('bg-yellow');
        navbar.classList.remove('bg-red');
        collapse.classList.add('bg-yellow');
        collapse.classList.remove('bg-red');
        navbar.style.height= '70px';
        links.forEach((link)=>{
            link.style.color= 'var(--white)'
        });
       logoNavbar.src='http://127.0.0.1:5500/Media/logoBlack512px.png'
    }
})

function createInterval (n, element, time){
    let counter = 0;
    let interval = setInterval(()=>{
        if(counter < n){
            counter ++;
            element.innerHTML = counter;
        }else{
            clearInterval(interval);
        }
    },time);
    setTimeout(()=>{
        confirm=true
    },13000);
}

let observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting && confirm){
            createInterval(100,firstNumber,100);
            createInterval(500,secondNumer,20);
            createInterval(50,thirdNumber,200);
            confirm = false;
        }
    });
});

observer.observe(firstNumber);