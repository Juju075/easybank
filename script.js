//Déclaration
const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');

//Action
btnHamburger.addEventListener('click', function(){
    console.log('click hamburger');
    if (header.classList.remove('open')){
    }
    else{
        header.classList.add('open');
    }
});

/**
 * const
 * document.querySelector
 * addEventListener
 * classList .remove .add
 */