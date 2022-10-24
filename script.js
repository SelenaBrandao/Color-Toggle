
let toggleNavStatus = false;

let toggleNav = function() {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarTitle = document.querySelector(".nav-sidebar span");
    let getSidebarLinks = document.querySelector(".nav-sidebar a");

    if (toggleNavStatus === false) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "272px";
        getSidebarTitle.style.opacity= "5";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }

        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {
        getSidebar.style.width = "50px";
        getSidebarTitle.style.opacity= "0";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "0";
        }
        
        getSidebarUl.style.visibility = "hidden";
        
        toggleNavStatus = false;
    }

}

let blauw = document.querySelector('#blauw');
let groen = document.querySelector('#groen');
let roze = document.querySelector('#roze');
let geel = document.querySelector('#geel');
let rood = document.querySelector('#rood');
let dropdown = document.querySelector('select');

blauw.addEventListener('click', () => {
    document.body.style.background = 'blue';
})

groen.addEventListener('click', () => {
    document.body.style.background = 'green';
})

roze.addEventListener('click', () => {
    document.body.style.background = 'pink';
})

geel.addEventListener('click', () => {
    document.body.style.background = 'yellow';
})

rood.addEventListener('click', () => {
    document.body.style.background = 'red';
    getNavbarUl.style.visibility = "hidden";
})
