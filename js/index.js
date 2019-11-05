
const nav = document.querySelectorAll('.nav a');

nav.forEach(ele => {
    ele.addEventListener("mouseover", event => {
        event.target.style.transform = "scale(1.6)";
        event.target.style.transition = "all 0.3s";
    })
    ele.addEventListener("mouseleave", event => {
        event.target.style.transform = "scale(1)";
    })
})
  

const changeImg = document.querySelector('.intro img');

changeImg.addEventListener('dblclick', () => {
    changeImg.src = "img/destination.jpg";
});
changeImg.addEventListener('mouseleave', () => {
    changeImg.src = "img/fun-bus.jpg";
});


const logoH = document.querySelector('.logo-heading');

document.addEventListener('keydown', () => {
    logoH.style.backgroundColor = 'red';
})


window.addEventListener("load", () => {
    alert("Welcome to the Fun Bus!");
});


window.addEventListener('resize', event => {
    alert(`Did you try to resize the Web browser?`);
})


const content = document.querySelector('.content-section');

content.addEventListener('click', event => {
    event.target.style.display = "none";
});


// Nest
const btn = document.querySelectorAll('.btn')

btn.forEach(ele => {
    ele.addEventListener('click', event => {
        event.target.style.fontSize = '5rem';
    event.stopPropagation();
    });
})

const pick = document.querySelector('.content-pick')

pick.addEventListener("click", () => {
    pick.style.backgroundColor = "purple";
});


//Stop 
const navLink = document.querySelectorAll('.nav-link');

navLink.forEach(ele => {
    ele.addEventListener('click',  event => {
        alert('stopped!');
        event.preventDefault();
    });
});
