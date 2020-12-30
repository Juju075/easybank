//Déclaration
const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');

//Action
btnHamburger.addEventListener('click', function(){
    console.log('click hamburger');

    if (header.classList.remove('open')){ //Closed hamburger menu
    }
    else{
        header.classList.add('open');
    }
});

/**
 * const permet de créer une constante nommée accessible uniquement en lecture. 
 * documment returns the Element that is the root element of the document 
 * 
 * document.querySelector  returns the first Element within the document that matches 
 * the specified selector, or group of selectors. If no matches are found, null is returned.
 * 
 * EventTarget.addEventListener() sets up a function that will be called whenever 
 * the specified…event is delivered to the targe
 * 
 * Element.classList is a read-only property that returns a live DOMTokenList collection of 
 * the class attributes of the element. 
 * >>> This can then be used to manipulate the class list. <<<
 * 
 * DOMTokenList interface represents a set of space-separated tokens (selecteurs)
 * 
 * element.classlist.remove()  method removes the element at the specified index from 
 * the options collection for this select element.
 */