/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "150px";
    document.getElementById("main").style.paddingLeft = "150px";
    $('.openbtn').css("opacity","0");
    $('html').css("width","100vm");
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0"; 
    document.getElementById("main").style.paddingLeft = "0";
    $('.openbtn').css("opacity","0.9");
}