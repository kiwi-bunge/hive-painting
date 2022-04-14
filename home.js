/**********************/
/** NAVBAR ON SCROLL **/

const disclaimer = document.querySelector("#disclaimer");
const contact = document.querySelector("#contact-info");
const disclaimerTop = nav.offsetTop;

function fixedNavbar () {

    if(window.scrollY >= disclaimerTop) {
        document.body.style.paddingTop = disclaimer.offsetHeight + "px";  
        document.body.classList.add("fixed-nav");
        document.querySelector("#contact-info").classList.add("hidden");

    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove("fixed-nav");
        document.querySelector("#contact-info").classList.remove("hidden");
    }
    window.addEventListener("scroll", fixedNavbar)
}

fixedNavbar();