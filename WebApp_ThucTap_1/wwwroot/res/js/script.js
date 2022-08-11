
function settingsMenuToggle() {
        var settingsMenu = document.querySelector(".settings-menu");
        settingsMenu.classList.toggle("settings-menu-height");
    }

    function darkBtnToggle() {
        var darkBtn = document.getElementById("dark-btn");
        darkBtn.classList.toggle("dark-btn-on");
        document.body.classList.toggle("dark-theme");

        if (localStorage.getItem("theme") == "light") {
            localStorage.setItem("theme", "dark");
        }
        else {
            localStorage.setItem("theme", "light");
        }
    }



