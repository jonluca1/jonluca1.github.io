

try {
    function createCookie(name, value, days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toGMTString();
        }
        else var expires = "";
        document.cookie = name + "=" + value + expires + "; path=/; SameSite=Strict; Secure";
    }

    const getCookieValue = (name) => (
        document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
    )

    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function eraseCookie(name) {
        createCookie(name, "", -1);
    }

    function test_Cookie() {
        alert("Cookie.js is loaded");
    }

    console.log("\u2705 Cookie.js 2.1 is loaded");

} catch (err) {
    console.log("\u274C Cookie.js 2.1 Could not be loaded");
    console.log(err);
    console.log("---")
}



try {

    // Set cookie consent
    function acceptCookieConsent() {
        eraseCookie('user_cookie_consent');
        createCookie('user_cookie_consent', 1, 30);
        document.getElementById("cookieNotice").style.display = "none";
    }

    let cookie_consent = readCookie("user_cookie_consent");
    if (cookie_consent != null) {
        document.getElementById("cookieNotice").style.display = "none";
    } else {
        document.getElementById("cookieNotice").style.display = "block";
    }


    function test_Cookie_notice() {
        alert("cookie_notice.js is loaded");
    }

    console.log("\u2705 cookie-notice 1.3 embeded in Cookie.js is loaded");


} catch (err) {
    console.log("\u274C cookie-notice 1.3 embeded in Cookie.js Could not be loaded");
    console.log(err);
    console.log("---")
}