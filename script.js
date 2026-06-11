const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
if(window.scrollY > 50){
navbar.classList.add("scrolled");
}else{
navbar.classList.remove("scrolled");
}
});

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
reveals.forEach(reveal => {

const top = reveal.getBoundingClientRect().top;

if(top < window.innerHeight - 100){
reveal.classList.add("active");
}
});
});

const counters = document.querySelectorAll(".counter");

const startCounters = () => {

counters.forEach(counter => {

const update = () => {

const target = +counter.dataset.target;
const current = +counter.innerText;

const increment = target / 100;

if(current < target){
counter.innerText =
Math.ceil(current + increment);
setTimeout(update,20);
}else{

if(target === 100){
counter.innerText = "+100";
}

if(target === 80){
counter.innerText = "+80%";
}

if(target === 60){
counter.innerText = "-60%";
}

if(target === 50){
counter.innerText = "+50%";
}
}
};

update();
});
};

let started = false;

window.addEventListener("scroll", () => {

const stats = document.querySelector(".stats");

const position = stats.getBoundingClientRect().top;

if(position < window.innerHeight && !started){
startCounters();
started = true;
}
});

const accordions =
document.querySelectorAll(".accordion-header");

accordions.forEach(btn => {

btn.addEventListener("click", () => {

const content = btn.nextElementSibling;

if(content.style.maxHeight){
content.style.maxHeight = null;
}else{
content.style.maxHeight =
content.scrollHeight + "px";
}

});
});

