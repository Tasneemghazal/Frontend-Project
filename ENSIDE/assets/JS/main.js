const navBar= document.querySelector('.navbar');
const navLink= document.querySelectorAll('.nav-link');
const navImg=document.querySelector('.navImg');
const loading=document.querySelector('.loading');
const about=document.querySelector('.about');
const scrollTop=document.querySelector('.scroll-to-top');
const lastLink=document.querySelector('.last-link');
const title=document.querySelectorAll('.title-animate');
const title2=document.querySelector('.title-animate-2');
const features=document.querySelector('.fetures');
const creative=document.querySelectorAll('.creative-link');
const space = document.querySelector('.title-space');
const cases=document.querySelectorAll('.case');
const portTitle=document.querySelector('.portfolio .title');
const capTitle=document.querySelector('.capabilities .title');
const capabilities=document.querySelector('.capabilities');
const strategy=document.querySelector('.strategy');
const approach=document.querySelector('.our-approach .title');
const approaches=document.querySelectorAll('.approach');
const services=document.querySelectorAll('.service');
const techTitle=document.querySelector('.technology .title');
const info1=document.querySelector('.our-services');
const info2=document.querySelector('.contact-us');
const teamTitle=document.querySelector('.team .title');
const people=document.querySelectorAll('.people');
const ourConceptTilte= document.querySelector('.our-concept .title-2');
const productOne=document.querySelector('.product-1');
const productTwo=document.querySelector('.product-2');
const getInTitle=document.querySelector('.get-in-touch .creative-description');
const articleTitle=document.querySelector('.articles .title');
const reviewTitle=document.querySelector('.reviews .title');
const friendsTitle=document.querySelector('.friends .title');
const partners=document.querySelector('.partners');
const contact=document.querySelectorAll('.con-1');
// changing the background color of the navbar
window.addEventListener('scroll', function(){
    if(window.scrollY>80){
    navBar.style.backgroundColor='#fff';
    navBar.style.transitionDuration='0.4s';
    navImg.setAttribute('src','assets/img/logo.png');
    for(let i=0;i<navLink.length;i++){
        navLink[i].classList.remove('text-white');
        navLink[i].classList.add('text-black');
        
    }
    lastLink.classList.remove('text-black');
    lastLink.classList.add('text-white');
    }
    else{
        navBar.style.backgroundColor='transparent';
        navImg.setAttribute('src','assets/img/logo-white.png');
        for(let i=0;i<navLink.length;i++){
            navLink[i].classList.remove('text-black');
            navLink[i].classList.add('text-white');
        
        }
    }
    if(window.scrollY>about.offsetTop){
        scrollTop.classList.remove('opacity-0','invisible');
     }
     else{
         scrollTop.classList.add('opacity-0','invisible');
     }
    
   
})

//loading screen
window.addEventListener('load',function(){
    this.setTimeout(function(){
        loading.classList.add('opacity-0','invisible');
        document.body.style.overflow = 'auto';
    },2000)   
})
//scroll to top
scrollTop.addEventListener('click', function(){
    window.scroll({
        top:0,
        behavior:'smooth'
    })
})

//animate on about section
window.addEventListener('scroll',function(){
    if(window.scrollY>about.offsetTop-300){
    for(let i=0;i<title.length;i++){
    title[i].classList.remove('animate');
    title[i].classList.add('no-animate')
    }
}

});
//
window.addEventListener('scroll',function(){
    if(window.scrollY>features.offsetTop+100){
    
    title2.classList.remove('animate');
    title2.classList.add('no-animate')
    
}

});
// 
window.addEventListener('scroll',function(){
    if(window.scrollY>features.offsetTop+100){
    for(let i=0;i<creative.length;i++){
    creative[i].classList.remove('animate-2');
    creative[i].classList.add('no-animate-2');
    }
}
});

//
window.addEventListener('scroll',function(){
    if(window.scrollY>features.offsetTop+200){
        
        space.classList.remove('animate');
        space.classList.add('no-animate');
    }
});
// number counter 
const valueDisplays=document.querySelectorAll('.num');
const tech=document.querySelector('.our-approach');
let started=false; // function started?no
window.onscroll=function(){
    if(window.scrollY>tech.offsetTop+200){
        if(!started){
        valueDisplays.forEach((num)=>startCount(num));
        }
        started=true;
    }
}


function startCount(el){
    let goal=parseInt(el.getAttribute("data-val"));
    let count =setInterval(() =>{
        el.textContent++;
        if(el.textContent==goal){
            clearInterval(count);
        }
    },2000/goal)
}

// animate on portfoloio section
window.addEventListener("scroll",function(){
    if(window.scrollY>space.offsetTop+200){
        portTitle.classList.remove('animate');
        portTitle.classList.add('no-animate');
    }
});
window.addEventListener('scroll',function(){
    if(window.scrollY>space.offsetTop+200){
    for(let i=0;i<cases.length;i++){
    cases[i].classList.remove('animate');
    cases[i].classList.add('no-animate')
    }
}
});

// animate on capabilities section
window.addEventListener('scroll',function(){
    if(window.scrollY>strategy.offsetTop+50){
        capTitle.classList.remove('animate');
        capTitle.classList.add('no-animate');
    }
});

// animate on our-approache section
window.addEventListener('scroll',function(){
    if(window.scrollY>capTitle.offsetTop){
        approach.classList.remove('animate');
        approach.classList.add('no-animate');
    }
});
window.addEventListener('scroll',function(){
    if(window.scrollY>capTitle.offsetTop+200){
    for(let i=0;i<approaches.length;i++){
    approaches[i].classList.remove('animate');
    approaches[i].classList.add('no-animate')
    }
}
});

//animate on services section

window.addEventListener('scroll',function(){
    if(window.scrollY>capTitle.offsetTop+400){
        services[0].classList.remove('animate');
        services[0].classList.add('no-animate');
    }
});
window.addEventListener('scroll',function(){
    if(window.scrollY>capTitle.offsetTop+400){
        services[1].classList.remove('animate-4');
        services[1].classList.add('no-animate-4');
    }
});
window.addEventListener('scroll',function(){
    if(window.scrollY>capTitle.offsetTop+500){
        services[2].classList.remove('animate-3');
        services[2].classList.add('no-animate');
    }
});

//technology section
window.addEventListener('scroll',function(){
    if(window.scrollY>approach.offsetTop+300){
        techTitle.classList.remove('animate-3');
        techTitle.classList.add('no-animate');
    }
});

//information section
window.addEventListener('scroll',function(){
    if(window.scrollY>techTitle.offsetTop+100){
        info1.classList.remove('animate');
        info1.classList.add('no-animate');
        info2.classList.remove('animate-3');
        info2.classList.add('no-animate');
    }
});
// team section
window.addEventListener('scroll',function(){
    if(window.scrollY>techTitle.offsetTop+400){
        teamTitle.classList.remove('animate');
        teamTitle.classList.add('no-animate');
    }
});

window.addEventListener('scroll',function(){
    if(window.scrollY>teamTitle.offsetTop-250){
        for(let i=0;i<people.length;i++){
            if(people[i].classList.contains('animate-4')){
                people[i].classList.remove('animate-4');
                people[i].classList.add('no-animate-4');
            }
            else if(people[i].classList.contains('animate-5')){
                people[i].classList.remove('animate-5');
                people[i].classList.add('no-animate-4');
            }
        }
    }
});
//our concept section
window.addEventListener('scroll',function(){
    if(window.scrollY>ourConceptTilte.offsetTop-600){
        ourConceptTilte.classList.remove('animate-3');
        ourConceptTilte.classList.add('no-animate');
    }
});

window.addEventListener('scroll',function(){
    if(window.scrollY>ourConceptTilte.offsetTop-600){
        productOne.classList.remove('animate');
       productOne.classList.add('no-animate');
    }
});

window.addEventListener('scroll',function(){
    if(window.scrollY>ourConceptTilte.offsetTop-600){
        productTwo.classList.remove('animate');
       productTwo.classList.add('no-animate');
    }
});
//get in touch section
window.addEventListener('scroll',function(){
    if(window.scrollY>productOne.offsetTop-300){
      getInTitle.classList.remove('animate');
      getInTitle.classList.add('no-animate');
    }
});
//articles section
window.addEventListener('scroll',function(){
    if(window.scrollY>productOne.offsetTop){
      articleTitle.classList.remove('animate-5');
      articleTitle.classList.add('no-animate-4');
    }
});
//review section
window.addEventListener('scroll',function(){
    if(window.scrollY>reviewTitle.offsetTop-400){
      reviewTitle.classList.remove('animate');
      reviewTitle.classList.add('no-animate');
    }
});
//friends section
window.addEventListener('scroll',function(){
    if(window.scrollY>reviewTitle.offsetTop-100){
      friendsTitle.classList.remove('animate-5');
      friendsTitle.classList.add('no-animate-4');
    }
});
window.addEventListener('scroll',function(){
    if(window.scrollY>friendsTitle.offsetTop){
      partners.classList.remove('animate-4');
      partners.classList.add('no-animate-4');
    }
});

//contact section
window.addEventListener('scroll',function(){
    if(window.scrollY>partners.offsetTop-200){
      contact[0].classList.remove('animate');
      contact[0].classList.add('no-animate');
      contact[1].classList.remove('animate-3');
      contact[1].classList.add('no-animate'); 
    }
});