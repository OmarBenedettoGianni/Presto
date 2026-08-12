let opener = document.querySelector('.opener');
let circle = document.querySelector('.circle');
let teachers = [
    {name:'Ezio', description:'Gran Maestro della confraternita di Roma', url:'https://liveintheworldofgames.wordpress.com/wp-content/uploads/2014/10/assassins-cred-revelations-ezio-leave-your-legacy-trailer.jpg'},
    {name:'Arno', description:'Giovane nobile in cerca di vendetta durante la Rivoluzione francese', url:'https://images3.alphacoders.com/555/thumb-1920-555802.jpg'},
    {name:'Bayek', description:'Medjay egiziano e cofondatore del primissimo Ordine', url:'https://sm.ign.com/t/ign_it/screenshot/default/inline-bayek_tktn.1280.jpg'},
    {name:'Basim', description:'Svelto ladro di Baghdad divenuto un Maestro occulto', url:'https://images.everyeye.it/img-notizie/assassin-s-creed-mirage-basim-come-altair-ubisoft-spiega-protagonista-v4-668774-1280x960.webp'},
    {name:'Naoe', description:'Letale shinobi giapponese esperta di furtività e parkour', url:'https://cdn.dlcompare.com/others_jpg/upload/news/image/ecco-naoe-l-assassino-piu-rapido-8a06798a-image-492107979.jpg.webp'},
    {name:'Evie', description:'Astuta e meticolosa maestra del credo a Londra', url:'https://i.pinimg.com/736x/30/71/10/3071109ec439c1839652b397893219e4.jpg'},
];

teachers.forEach((docente)=>{
    let div = document.createElement('div');
    div.classList.add('moved');
    div.style.backgroundImage =`url(${docente.url})`;
    circle.appendChild(div);
});

let movedDivs = document.querySelectorAll('.moved');
let check = false
let flipCard = document.querySelector('.flip-card');
opener.addEventListener('click',()=>{
    if(check==false){
        opener.style.transform=`rotate(45deg)`;
        movedDivs.forEach((moved,i)=>{
        let angle = (360*i)/movedDivs.length
        moved.style.transform=`rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`;
        check=true
        })
    }else{
        opener.style.transform=`rotate(0deg)`;
        movedDivs.forEach((moved,i)=>{
        moved.style.transform=`rotate(0deg) translate(0px)`;
        check=false;
        });
        flipCard.classList.add('d-none');
    }
});
let innerFace = document.querySelector('.inner-face');
let cardName = document.querySelector('#cardName');
let cardDescription = document.querySelector('#cardDescription');

movedDivs.forEach((moved, i)=>{
    moved.addEventListener('click', ()=>{
        flipCard.classList.remove('d-none');
        let docente = teachers[i];
        innerFace.style.backgroundImage = `url(${docente.url})`;
        cardName.innerHTML = docente.name;
        cardDescription.innerHTML = docente.description;
    });
});
