$(document).ready(function tabSetter() {
    try {
        var mystring = location.pathname.split(".").slice(0, -1);
        document.getElementById(mystring).setAttribute("class", "active");
        console.log("Set Active Tab...");
    }
    catch (err) {
        setTimeout(tabSetter, 50); //wait 50 ms, then try again
        }
    
});