nuevoMenu();

function nuevoMenu() {
    const hamBtn = document.querySelectorAll('.hamburgerBtn');
    const lineBtn = document.querySelectorAll('.hamburgerBtn__line');
    if (hamBtn.length > 0) {
        [...hamBtn].map(el => {
            el.addEventListener('click', e => {
                e.preventDefault();
                e.currentTarget.classList.toggle('active');
                document.querySelector('.nav').classList.toggle('active');
                document.querySelector('.linea1').classList.toggle('blackLine');
                document.querySelector('.linea2').classList.toggle('blackLine');
                desplegable();
            });
        });
    }
}

function desplegable() {

    const navList = document.querySelectorAll('.nav__list__link')
    const navListInicio = document.querySelector('.inicio');
    const navListDepresion = document.querySelector('.depresion');
    const navListEsquizofrenia = document.querySelector('.esquizofrenia');
    const navListCifra = document.querySelector('.cifra');
    const navListNoEstasSolo = document.querySelector('.noEstasSolo');


    navListInicio.addEventListener('click', e => {
        e.preventDefault()
        const padre = e.target.parentElement.children[1];
        desplegar(padre);
    });
    navListDepresion.addEventListener('click', e => {
        e.preventDefault();
        const padre = e.target.parentElement.children[1];
        desplegar(padre)
    });
    navListEsquizofrenia.addEventListener('click', e => {
        e.preventDefault();
        const padre = e.target.parentElement.children[1];
        desplegar(padre)
    });
    navListCifra.addEventListener('click', e => {
        e.preventDefault();
        const padre = e.target.parentElement.children[1];
        desplegar(padre)
    });
    navListNoEstasSolo.addEventListener('click', e => {
        e.preventDefault();
        const padre = e.target.parentElement.children[1];
        desplegar(padre)
    });
}

function desplegar(padre) {
    const menuDesplegable = document.querySelector('.menuDesplegable');
    if (!menuDesplegable) {
        padre.classList.add('menuDesplegable');
    } else {
        padre.classList.remove('menuDesplegable');
    }
}


window.addEventListener('load', () =>{
    var getLenguajeIcon = document.querySelector('.language');
    var createImgLenguaje = document.createElement('img');
    createImgLenguaje.classList.add('img__lenguaje');
    getLenguajeIcon.appendChild(createImgLenguaje);


    if(getLenguajeIcon.textContent == "🇪🇸"){
        createImgLenguaje.setAttribute('src', '../img/en.png');
    }else{
        createImgLenguaje.setAttribute('src', '../img/es.png');
    }
})

