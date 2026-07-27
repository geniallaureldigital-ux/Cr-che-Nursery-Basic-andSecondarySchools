/*==================================================
 GENIAL LAUREL SCHOOLS
 Main JavaScript File
 Developed with Charlie ❤️
===================================================*/


/*=========================================
 AOS
=========================================*/
AOS.init({
    duration: 1200,
    once: true,
    offset: 120,
    easing: "ease-in-out"
});


/*=========================================
 STICKY NAVBAR
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){
        header.classList.add("sticky");
    }else{
        header.classList.remove("sticky");
    }

});


/*=========================================
 MOBILE MENU
=========================================*/

const menuBtn = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-links");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

navMenu.classList.toggle("active");

});

}


/*=========================================
 ACTIVE NAVIGATION
=========================================*/

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});


/*=========================================
 SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        const href = this.getAttribute("href");

        if (href === "#") return;

        e.preventDefault();

        const target = document.querySelector(href);

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});


/*=========================================
 BACK TO TOP BUTTON
=========================================*/

const topBtn=document.getElementById("backToTop");

if(topBtn){

window.addEventListener("scroll",()=>{

if(window.scrollY>600){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}


/*=========================================
 COUNTER
=========================================*/

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.getAttribute("data-target");

const count=+counter.innerText;

const increment=target/100;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(update,20);

}else{

counter.innerText=target;

}

};

update();

});


/*=========================================
 EMAILJS CONTACT FORM
=========================================*/

const contactForm=document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

emailjs.sendForm(
    "service_r98jqqg",
    "template_wxrt86q",
    this
)

.then(function(){

alert("✅ Message Sent Successfully!");

contactForm.reset();

})

.catch(function(error){

console.error(error);

alert("❌ Unable to send message.");

});

});

}


/*=========================================
 SCHEDULE VISIT BUTTON
=========================================*/

const visitBtn=document.getElementById("visitBtn");

if(visitBtn){

visitBtn.addEventListener("click",()=>{

const contact=document.getElementById("contact");

if(contact){

contact.scrollIntoView({

behavior:"smooth"

});

}

});

}


/*=========================================
 IMAGE HOVER EFFECT
=========================================*/

const cards=document.querySelectorAll(".life-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});




/*=========================================
LOADER
=========================================*/
window.addEventListener("load", function () {

    const loader = document.querySelector(".loader");
    const whatsapp = document.querySelector(".whatsapp-float");

    // Hide WhatsApp initially
    if (whatsapp) {
        whatsapp.style.display = "none";
    }

    setTimeout(function () {

        loader.classList.add("loader-hidden");

        // Show WhatsApp after loader disappears
        if (whatsapp) {
            whatsapp.style.display = "flex";
        }

        setTimeout(function () {

            loader.remove();

        }, 800);

    }, 1500);

});

/*=========================================
WHATSAPP POPUP
=========================================*/
const whatsappPopup = document.getElementById("whatsappPopup");
const closePopup = document.getElementById("closePopup");

if (whatsappPopup && closePopup) {

    setTimeout(function () {

        whatsappPopup.classList.add("show");

    }, 8000);

    closePopup.addEventListener("click", function () {

        whatsappPopup.classList.remove("show");

    });

}
/*=========================================
BACK TO TOP BUTTON
=========================================*/

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", function () {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*=========================================
 CONSOLE
=========================================*/

console.log("Genial Laurel Schools Website Loaded Successfully.");


