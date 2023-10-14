try {
    var ALERT_TITLE = "Alert:";
    var ALERT_BUTTON_TEXT = "Ok";

    if(document.getElementById) {
        window.alert = function(txt,title) {
            createCustomAlert(txt,title);
        }
    }

    function createCustomAlert(txt,title) {
        d = document;

        if (title === undefined) {
            var title = "Alert";

        }

        title = title + ":";


        if (txt === undefined) {
            var txt = "";

        }


        if(d.getElementById("modalContainer")) return;

        document.getElementsByTagName("body")[0].style.setProperty("overflow-y", "hidden"); 



        mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
        mObj.id = "modalContainer";
        //Originall// mObj.style.height = d.documentElement.scrollHeight + "px";


        alertObj = mObj.appendChild(d.createElement("div"));
        alertObj.id = "alertBox";
        //Originall// if(d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
        //Originall// alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth)/2 + "px";
        //Originall// alertObj.style.visiblity = "visible";


        h1 = alertObj.appendChild(d.createElement("h1"));
        h1.appendChild(d.createTextNode(title));

        msg = alertObj.appendChild(d.createElement("p"));
        //Originall//msg.appendChild(d.createTextNode(txt));
        msg.innerHTML = txt;

        btn = alertObj.appendChild(d.createElement("a"));
        btn.id = "closeBtn";
        btn.appendChild(d.createTextNode(ALERT_BUTTON_TEXT));
        btn.href = "#";
        btn.focus();
        btn.onclick = function() { removeCustomAlert(); return false; }

        alertObj.style.top = ($(window).height() - alertObj.offsetHeight) / 2 + "px";

        window.addEventListener("resize", function() {
            alertObj.style.top = ($(window).height() - alertObj.offsetHeight) / 2 + "px";
        });

        window.alertBoxRefreshLocation = function () {
            document.getElementById("alertBox").style.top = ($(window).height() - alertObj.offsetHeight) / 2 + "px";
        }

        alertBoxRefreshLocation()

    }

    function removeCustomAlert() {
        document.getElementsByTagName("body")[0].style.setProperty("overflow-y", "unset"); 
        document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
    }

    function test_Alert() {
        alert("Alert.js is loaded");
    }
    console.log("\u2705 Alert.js 1.3.13 is loaded");

} catch (err) {
    console.log("\u274C Alert.js 1.3.13 Could not be loaded");
    console.log(err);
    console.log("---")
}