/*smooth scroll for nav bar*/
document.querySelectorAll('nav a').forEach(link =>{link.addEventListener('click', function(e){e.preventDefault();
    const target=document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
        behavior:'smooth'});
} );
});
/*scroll to top button*/
//create button
const topBtn=document.createElement("button");
topBtn.innerHTML="↑";
topBtn.id="topBtn";

document.body.appendChild(topBtn);
//show/hide
window.addEventListener("scroll",()=>{if(window.scrollY> 300)
{topBtn.style.display="block";}
else{topBtn.style.display="none";}
});
//scroll top
topBtn.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});
//active navbar link 
const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav ul li a");
window.addEventListener("scroll",()=>{
    let current = "";
    sections.forEach(section=>{
        const sectionTop = section.offsetTop-100;
        const sectionHeight=section.clientHeight;
        if(pageYOffset>=sectionTop){
            current=section.getAttribute("id");
        }
    });
    navLinks.forEach(link=>{
        link.classList.remove("active");
        if(link.getAttribute("href")=="#"+current)
        {link.classList.add("active");}
    });
});
//reveal animation
const revealElements=document.querySelectorAll(".hero,#about,#skills,#projects,#contact");
function reveal(){
    const windowHeight = window.innerHeight;
    revealElements.forEach(el=>
        {const top = el.getBoundingClientRect().top;
            if(top< windowHeight-100){
                el.style.opacity="1";
                el.style.transform="translateY(0px)";
            } 
})   ;
}
revealElements.forEach(el=>
{el.style.opacity="0"
    el.style.transform="translateY(50px)";
    el.style.transition="1s";
}
);
window.addEventListener("scroll",reveal);

reveal();
//welcome message
window.onload=()=>{
    console.log("Welcome to Nazifa's Portfolio");
}
const themeBtn=document.getElementById("theme-toggle");
themeBtn.onclick=()=>{
    document.body.classList.toggle("light-mode");
    if(document.body.classList.contains("light-mode"))
    {themeBtn.innerHTML="☀️";}

else{themeBtn.innerHTML="🌙";}
}
console.log("Script loaded")