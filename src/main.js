//console.log("");
//console.log("---------------------------");
//console.log("██████╗ ████████╗██╗    ██╗");
//console.log("██╔══██╗╚══██╔══╝██║    ██║");
//console.log("██║  ██║   ██║   ██║ █╗ ██║");
//console.log("██║  ██║   ██║   ██║███╗██║");
//console.log("██████╔╝   ██║   ╚███╔███╔╝");
//console.log("╚═════╝    ╚═╝    ╚══╝╚══╝ ");
//console.log("---------------------------");

console.log("---------------------------------------------");
console.log("██╗    ██╗██╗███████╗ █████╗ ██████╗ ██████╗ ");
console.log("██║    ██║██║╚══███╔╝██╔══██╗██╔══██╗██╔══██╗");
console.log("██║ █╗ ██║██║  ███╔╝ ███████║██████╔╝██║  ██║");
console.log("██║███╗██║██║ ███╔╝  ██╔══██║██╔══██╗██║  ██║");
console.log("╚███╔███╔╝██║███████╗██║  ██║██║  ██║██████╔╝");
console.log(" ╚══╝╚══╝ ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ");
console.log("---------------------------------------------");
console.log("");

/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId)

   toggle.addEventListener('click', () =>{
       // Add show-menu class to nav menu
       nav.classList.toggle('show-menu')

       // Add show-icon to show and hide the menu icon
       toggle.classList.toggle('show-icon')
   })
}

showMenu('nav-toggle','nav-menu')
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll === undefined) {
        scrollypx = "0";
    } else {
        scrollypx = scroll;
    }

    /*
    var windowHeight = window.innerHeight;

    scrollheight = ($(document).height() - windowHeight);
    scrollpercent = Math.round(100 * (scrollypx / scrollheight));
    */

    scrollheight = ($(document).height() - $(window).height());
    scrollpercent = Math.round(100 * (scrollypx / scrollheight));


});
scrollypx = "0";
scrollygheight = "0";
scrollpercent = "0";



getScript('/src/javascript/alert.js');

getScript('/src/javascript/getquerystring.js');

getScript('/src/javascript/cookie.js');

getScript('/src/javascript/mobile-ori-reload.js');

getScript('/src/javascript/collapsible.js');

getScript('/src/javascript/mobile-nav-dropdown.js');

getScript('/src/javascript/sleep.js');

console.log("\u2705 main.js v2.3.5 has been loaded")
