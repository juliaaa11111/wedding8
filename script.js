/* ==========================================
   Wedding Invitation
   Юлия & Виталий
========================================== */

// ===========================
// Персональное обращение
// ===========================

const params = new URLSearchParams(window.location.search);

const guest = params.get("guest");

const guestTitle = document.getElementById("guestName");

if (guest && guest.trim() !== "") {

    guestTitle.textContent = "Дорогой " + decodeURIComponent(guest) + "!";

} else {

    guestTitle.textContent = "Дорогой Владислав!";

}

// ===========================
// Музыка
// ===========================

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click", () => {

    if (!playing) {

        music.play();

        playing = true;

        musicBtn.innerHTML = "❚❚";

    } else {

        music.pause();

        playing = false;

        musicBtn.innerHTML = "♫";

    }

});

// ===========================
// Плавное появление блоков
// ===========================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold:0.2

});

document.querySelectorAll(".section,.timeline-item,.wish-card,footer")
.forEach(el=>{

    el.classList.add("fade");

    observer.observe(el);

});

// ===========================
// Плавная прокрутка
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});

// ===========================
// Пульсация кнопки музыки
// ===========================

setInterval(()=>{

    musicBtn.animate([

        {transform:"scale(1)"},

        {transform:"scale(1.08)"},

        {transform:"scale(1)"}

    ],{

        duration:1800

    });

},2500);

// ===========================
// Появление Hero
// ===========================

const hero = document.querySelector(".hero-content");

hero.animate([

    {

        opacity:0,

        transform:"translateY(40px)"

    },

    {

        opacity:1,

        transform:"translateY(0)"

    }

],{

    duration:1800,

    fill:"forwards"

});

// ===========================
// Анимация золотых линий
// ===========================

document.querySelectorAll(".gold-line,.hero-line").forEach(line=>{

    line.animate([

        {

            width:"0px"

        },

        {

            width:"180px"

        }

    ],{

        duration:1800,

        fill:"forwards"

    });

});
