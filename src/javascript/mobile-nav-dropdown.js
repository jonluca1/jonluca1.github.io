const navItems = document.querySelector('.nav__items');
const openNavBtn = document.querySelector('#open__nav-btn');
const closeNavBtn = document.querySelector('#close__nav-btn');

var NoMblNavDetect = 0

const openNav = () => {
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = "inline-block";
}

const closeNav = () => {
    navItems.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = "none";
}


try {
    openNavBtn.addEventListener('click', openNav);
    closeNavBtn.addEventListener('click', closeNav);
}
catch (err) {
    var NoMblNavDetect = 1;
}




function test_MobileNavDropdown() {
    alert("mobile-nav-dropdown.js is loaded");
}

console.log("\u2705 mobile-nav-dropdown.js 1.6 is loaded");
if (NoMblNavDetect == 1) {
    console.log("^^ No Mobile Nav Dropdown Detected ^^")
}