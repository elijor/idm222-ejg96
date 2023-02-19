const menu = document.getElementById('menunav');
const openmenu = document.getElementById('toggleopen');
const menuexx = document.getElementById('toggleclose')
// const menuopen = document.getElementById("toggleopen");
// const menu = document.getElementsByTagName("nav");


function togglenavmenu() {
    menu.classList.add("visible");
    console.log("opened");
};

function closenavmenu(){
    menu.classList.remove('visible');
    console.log("closed");
}
;
openmenu.addEventListener('click', togglenavmenu, false );
menuexx.addEventListener('click', closenavmenu, false );

