
$(function () {
    $("#tabs").tabs();
});

$("#dialog1").dialog({
    autoOpen: false,
});

$("#dialog2").dialog({
    autoOpen: false,
});

$("#modeButton").click(function () {
    if ($("body").hasClass("darkMode"))
    {
        $("#dialog1").dialog("open");
    }
    else
    {
        $("#dialog2").dialog("open");
    }
    
});

spawnGeralt = function () {
    var node = document.getElementById("geralts");
    var itm = document.getElementById("geralt");
    var cln = itm.cloneNode(true);

    node.appendChild(cln);

}


window.onload = function () {
    if (sessionStorage.getItem('darkMode') == null) {
        sessionStorage.setItem('darkMode', 'true');
    }
    if (sessionStorage.getItem('darkMode') == 'false')
    {
        document.body.classList.add('darkMode');
        document.querySelector('.wrapper').classList.add('darkModeDiv');
    }
    var pageName = location.pathname.split("/").slice(-1);
    if (pageName[0].slice(0, 5) == 'lista') {
        localStorage.setItem('lastListPage', pageName[0]);
    }
};

openList = function () {
    console.log(localStorage.getItem('lastListPage'));
    if (localStorage.getItem('lastListPage') == null) {
        localStorage.setItem('lastListPage', 'lista-0.html');
        window.location.href = localStorage.getItem('lastListPage');
    }
    else {
        window.location.href = localStorage.getItem('lastListPage');
    }
}

saveCurrentListPage = function () {
    console.log('1');
    var fileName = location.pathname.split("/").slice(-1);
    
}

toggleDarkMode = function (buttonClicked) {
    if (document.body.classList.contains('darkMode')) {
        sessionStorage.setItem('darkMode', 'true');
    }
    else {
        sessionStorage.setItem('darkMode', 'false');
    }
    
    document.body.classList.toggle('darkMode');
    document.querySelector('.wrapper').classList.toggle('darkModeDiv');
}

toggleText = function (toggleTextVis, spoilerbutton) {
    var button = spoilerbutton;
    if (toggleTextVis.style.display === 'none') {
        toggleTextVis.style.display = 'block';
        button.style.backgroundColor = '#3ead94';
    }
    else {
        toggleTextVis.style.display = 'none';
        button.style.backgroundColor = '#26806b';
    }
 
};

toggleNavBar = function () {
    var navBar = document.getElementById("navTogglable");

    $(navBar).toggleClass("showNavBar");
}