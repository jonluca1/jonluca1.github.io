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