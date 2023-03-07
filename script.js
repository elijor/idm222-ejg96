const menu = document.getElementById('menunav');
const openmenu = document.getElementById('toggleopen');
const menuexx = document.getElementById('toggleclose');

function opennavmenu() {
    openmenu.classList.add("invisible");
    menu.classList.add("visible");
    console.log("opened");
};

function closenavmenu() {
    openmenu.classList.remove("invisible");
    menu.classList.remove('visible');
    console.log("closed");
};

openmenu.addEventListener('click', opennavmenu, false );
menuexx.addEventListener('click', closenavmenu, false );

function openeltaco() {
    window.location.href = "casestud/eltaco.html";
}

function openstarscholars() {
    window.location.href = "casestud/starscholars.html";
}