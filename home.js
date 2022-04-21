/**********************/
/** NAVBAR ON SCROLL **/

document.addEventListener("DOMContentLoaded", function(){

topNavbar = document.querySelector("#nav");
// const homeContainer = document.querySelector("#home");
websiteTop = document.querySelector("#nav").offsetHeight;

if(topNavbar){

    let lastScrollTop = 0;

    window.addEventListener("scroll", function() {

        let scrollTop = window.scrollY;

        if(scrollTop <lastScrollTop) {

            topNavbar.classList.remove("horizontalNav");
            topNavbar.classList.add("verticalNav")

        } else {

            topNavbar.classList.remove("verticalNav");
            topNavbar.classList.add("horizontalNav");
        }
        lastScrollTop = scrollTop;
        });
    }
});