
toggleText = function (toggleTextVis, spoilerbutton) {
    var button = spoilerbutton;
    if (toggleTextVis.style.display === 'none') {
        toggleTextVis.style.display = 'block';
        button.style.backgroundColor = '#3ead94';
        //button.style.color = '#ffffff';
    }
    else {
        toggleTextVis.style.display = 'none';
        button.style.backgroundColor = '#26806b';
        //button.style.color = '#8a8a8a';
    }
 
};

toggleNavBar = function () {
    var navBar = document.getElementById("navTogglable");

    navBar.classList.toggle('showNavBar');
}