const btnHamburger = document.querySelector('#btnHamburger');

//Action
btnHamburger.addEventListener('click', function(){
    console.log('click hamburger');
    if (btnHamburger.classList.contains('open')){
        //ne rien faire
    }
    else{
        btnHamburger.classList.add('open');
    }
}