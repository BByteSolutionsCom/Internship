
function settingsMenuToggle() {
    var settingsMenu = document.querySelector(".settings-menu");
    settingsMenu.classList.toggle("settings-menu-height");
}

function darkBtnToggle() {
    var darkBtn = document.getElementById("dark-btn");
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme","dark"); 
    }
    else {
        localStorage.setItem("theme","light"); 
    }
}
var darkBtn2 = document.getElementById("dark-btn");
if(localStorage.getItem("theme") == "light") {
   
    darkBtn2.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if (localStorage.getItem("theme") == "dark") {
   
    darkBtn2.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else {
    localStorage.setItem("theme","light"); 
}

