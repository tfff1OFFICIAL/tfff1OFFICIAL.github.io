$(document).ready(function tabSetter() {
    if($('#loaded').is(':visible')){
        console.log("Setting Active Tab...");
        var mystring = location.pathname.split(".").slice(0, -1);
        document.getElementById(mystring).setAttribute("class", "active"); 
    } else {
        setTimeout(tabSetter, 50); //wait 50 ms, then try again
    }
});