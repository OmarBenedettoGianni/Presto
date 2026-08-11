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
        // navbar.classList.remove('bg-yellow');
        // navbar.classList.add('bg-red');
        // collapse.classList.remove('bg-yellow');
        collapse.classList.add('bg-yellow');
        navbar.style.height= '140px';
        links.forEach((link)=>{
            link.style.color= 'var(--white)'
        });
        //logoNavbar.src='http://127.0.0.1:5500/Media/logoWhite512px.png';
    }else{
        // navbar.classList.add('bg-yellow');
        // navbar.classList.remove('bg-red');
        // collapse.classList.add('bg-yellow');
        // collapse.classList.remove('bg-red');
        navbar.style.height= '70px';
        links.forEach((link)=>{
            link.style.color= 'var(--white)'
        });
       //logoNavbar.src='http://127.0.0.1:5500/Media/logoBlack512px.png'
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


let reviews = [
    {user:'Altaïr', description:`Sito bellissimo e utilissimo`,rank: 5},
    {user:'Connor', description:`Si potrebbe fare di meglio`,rank: 3},
    {user:'Edward', description:`Pubblicità ingannevole, se potessi darei 0 stelle`,rank: 1},
    {user:'Yasuke', description:`L'importante è che funzioni`,rank: 4},
]

let swiperWrapper = document.querySelector('.swiper-wrapper')
reviews.forEach((recensione)=>{
    let div = document.createElement('div');
    div.classList.add('swiper-slide');
    div.innerHTML=`
        <div class="card-review">
            <p class="lead text-center">${recensione.description}</p>
            <p class="h-4 text-center">${recensione.user}</p>
            <div class="d-flex justify-content-center star">        
            </div>  
        </div>
    `;
    swiperWrapper.appendChild(div);
});

// piena  <i class="fa-solid fa-star"></i>
// vuota  <i class="fa-regular fa-star"></i>

let stars = document.querySelectorAll('.star')
stars.forEach((star,index)=>{
    for(let i = 1; i <= reviews[index].rank; i++ ){
        let icon = document.createElement('i');
        icon.classList.add('fa-solid', 'fa-star');
        star.appendChild(icon);
    }
    let difference = 5 - reviews[index].rank
    for(let i = 1; i <= difference; i++ ){
        let icon = document.createElement('i');
        icon.classList.add('fa-regular', 'fa-star');
        star.appendChild(icon);
    }

});

// Swiper JS
const swiper = new Swiper('.swiper', {
  // Optional parameters
    effect: 'flip',
    grabCursor: true,  
    loop: true,
  // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay : {
        delay: 5000,
    },
});