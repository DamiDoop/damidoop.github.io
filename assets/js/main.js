window.addEventListener('load', initialize, false);
window.addEventListener('load', loadTheme, false);

function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);
}

function initialize() {
    let XPStyle = document.getElementById("xp-style");
    let ninetyEightStyle = document.getElementById("98-style");
    let sevenStyle = document.getElementById("7-style");

    XPStyle.onclick = function () {
        swapStyleSheet("https://unpkg.com/xp.css");
        localStorage.setItem("theme", "XP");
    }
    ninetyEightStyle.onclick = function () {
        swapStyleSheet("https://unpkg.com/xp.css@0.2.3/dist/98.css");
        localStorage.setItem("theme", "98");
    }
    sevenStyle.onclick = function () {
        swapStyleSheet("https://unpkg.com/7.css")
        localStorage.setItem("theme", "7");
    }
}

function loadTheme() {
    let currentTheme = localStorage.getItem("theme");
    let themeSelect = document.getElementById("theme-selector");

    switch (currentTheme) {
        case "XP":
            swapStyleSheet("https://unpkg.com/xp.css");
            themeSelect.value = "0";
            break
        case "98":
            swapStyleSheet("https://unpkg.com/98.css");
            themeSelect.value = "1";
            break
        case "7":
            swapStyleSheet("https://unpkg.com/7.css");
            themeSelect.value = "2";
            break
    }
}

function hideWindow() {
    var x = document.getElementById("hide");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
