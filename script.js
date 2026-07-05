/* ==========================================
   BIRTHDAY WEBSITE V3
   script.js
========================================== */

// ===============================
// SWIPER
// ===============================

const swiper = new Swiper(".birthdaySwiper", {
    loop: true,
    speed: 1000,

    autoplay: {
        delay: 3500,
        disableOnInteraction: false
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },

    effect: "slide"
});


// ===============================
// MUSIC
// ===============================

const music = document.getElementById("music");
const button = document.getElementById("toggleMusic");

let playing = false;

button.addEventListener("click", async () => {

    if (!playing) {

        try {

            await music.play();

            playing = true;

            button.innerHTML = "❚❚";

            button.classList.add("playing");

            launchCelebration();

        } catch (err) {

            alert("Browser memblokir autoplay.\nSilakan klik tombol sekali lagi.");

            console.log(err);

        }

    } else {

        music.pause();

        playing = false;

        button.innerHTML = "▶";

        button.classList.remove("playing");

    }

});


// ===============================
// REVEAL ON SCROLL
// ===============================

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},

{

threshold:0.2

}

);

reveals.forEach(item=>{

revealObserver.observe(item);

});


// ===============================
// CONFETTI
// ===============================

const confettiColors = [

"#3B82F6",
"#60A5FA",
"#93C5FD",
"#DBEAFE",
"#FFFFFF"

];


// Ledakan utama

function launchCelebration(){

confetti({

particleCount:180,

spread:120,

origin:{y:.6},

colors:confettiColors

});

}


// Confetti kecil

function miniConfetti(){

confetti({

particleCount:8,

spread:60,

startVelocity:18,

origin:{

x:Math.random(),

y:0

},

colors:confettiColors

});

}

setInterval(miniConfetti,6000);


// ===============================
// CONFETTI SAAT SURAT MUNCUL
// ===============================

const letter = document.querySelector(".letter");

let fired = false;

const letterObserver = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting && !fired){

fired=true;

confetti({

particleCount:120,

spread:90,

origin:{y:.7},

colors:confettiColors

});

}

});

},

{

threshold:.5

}

);

letterObserver.observe(letter);


// ===============================
// FLOATING TITLE
// ===============================

const hero = document.querySelector(".hero");

window.addEventListener("scroll",()=>{

const offset = window.scrollY;

hero.style.transform = `translateY(${offset*0.15}px)`;

});


// ===============================
// IMAGE EFFECT
// ===============================

const images=document.querySelectorAll(".swiper-slide img");

images.forEach(img=>{

img.addEventListener("touchstart",()=>{

img.style.transform="scale(1.03)";

});

img.addEventListener("touchend",()=>{

img.style.transform="scale(1)";

});

});


// ===============================
// WELCOME CONFETTI
// ===============================

setTimeout(()=>{

confetti({

particleCount:90,

spread:90,

origin:{y:.5},

colors:confettiColors

});

},1000);


// ===============================
// AUTO PAUSE MUSIC
// ===============================

document.addEventListener("visibilitychange",()=>{

if(document.hidden && playing){

music.pause();

}

else if(!document.hidden && playing){

music.play();

}

});


// ===============================
// CONSOLE MESSAGE
// ===============================

console.log("%c❤️ Happy Birthday Napa ❤️",
"color:#2563eb;font-size:22px;font-weight:bold;");

console.log("%cMade with Love by Dhimas",
"color:#1e40af;font-size:14px;");
