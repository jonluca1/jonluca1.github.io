function refreshcss() {
    for (let link of Array.from(document.querySelectorAll("link[rel=stylesheet][href]"))) {
		var href = new URL(link.href, location);
		href.searchParams.set("forceReload", Date.now());
		link.href = href;
    }
}



window.onorientationchange = function() {
    var orientation = window.orientation;
        switch(orientation) {
            case 0: refreshcss();
            case 90: refreshcss();
            case -90: refreshcss();
            break; }
};

function test_MobileOrientatonReload() {
    alert("mobile-ori-reload.js is loaded");
}

console.log("\u2705 mobile-ori-reload.js 1.4 is loaded");