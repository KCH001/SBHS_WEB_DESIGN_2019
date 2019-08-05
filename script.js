function imgSwitch(x) {
    if (x.matches) {
        document.getElementById("myImage").src = '3._Images/EM-LOGO3.png';
    } else {
        document.getElementById("myImage").src = '3._Images/EM-LOGO-BANNER-T.png';
    }
}

var x = window.matchMedia("(max-width: 650px)")
imgSwitch(x) /*// Call listener function at run time*/
x.addListener(imgSwitch) /*// Attach listener function on state changes*/

function Topnav() {
    var t = document.getElementById("myTopnav");
    if (t.className === "topnav") {
        t.className += "responsive";
    } else {
        t.className = "topnav";
    }
}
