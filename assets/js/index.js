function openNav() {
    document.getElementById('btnNav').classList.add('is-active');
    document.getElementById("btnNav").setAttribute('onclick', 'closeNav()');
    document.getElementById("header").style.transition = '0.5s';
    document.getElementById("header").style.transitionTimingFunction = 'ease-in-out';
    document.getElementById("header").style.height = '410px';
    document.getElementById("overlay").style.display = 'block';
    document.getElementById("overlay").style.top = 0;
    document.getElementById("overlay").style.right = 0;
    document.getElementById("overlay").style.left = 0;

    /* Add closing menu */
    document.getElementById("linkMenu1").setAttribute('onclick', 'closeNav()');
    document.getElementById("linkMenu2").setAttribute('onclick', 'closeNav()');
    document.getElementById("linkMenu3").setAttribute('onclick', 'closeNav()');
    document.getElementById("linkMenu4").setAttribute('onclick', 'closeNav()');
    document.getElementById("linkMenu5").setAttribute('onclick', 'closeNav()');
}

function closeNav() {
    document.getElementById('btnNav').classList.remove('is-active');
    document.getElementById("btnNav").setAttribute('onclick', 'openNav()');
    document.getElementById("header").style.transition = '0.3s';
    document.getElementById("header").style.transitionTimingFunction = 'ease-in-out';
    document.getElementById("header").style.height = '80px';
    document.getElementById("overlay").style.display = 'none';
}
