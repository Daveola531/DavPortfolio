function triggger(e){
   e.preventDefault()



//document.getElementById("put").addEventListener("input",dav)
}


let animatedEls = document.querySelectorAll('.animate');

let observer = new IntersectionObserver(function (entries) {
  for (let i = 0; i < entries.length; i++) {
    if (entries[i].isIntersecting) {
      entries[i].target.classList.add('in-view');
    }
  }
}, { threshold: 0.03 });

for (let j = 0; j < animatedEls.length; j++) {
  observer.observe(animatedEls[j]);
}


let num=0
let target=10 
let counter=document.getElementById('count');
 let interval=setInterval(Dav,1000);

 function Dav(){
  num++;
  counter.innerHTML=num + "+";
  if(num>=target){
clearInterval(interval)
  }
 }


 let numm=0
let targett=10 
let counterr=document.getElementById('countt');
 let intervals=setInterval(Davv,1000);

 function Davv(){
  numm++;
  counterr.innerHTML=numm + "y" + "+";
  if(numm>=2){
clearInterval(intervals)
  }
 }
  

const sections = document.querySelectorAll("#services, #about, #work, #contact");
const navLinks = document.querySelectorAll("#navbar .nav-link");

window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 150;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(function (link) {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});










