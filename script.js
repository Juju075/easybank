//Déclarations
const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay'); // 2 emplacements
const fadeElems = document.querySelectorAll('.has-fade'); // 3 emplacements

//has fade dans overlay et menu mobile
 

//Action au clic
 btnHamburger.addEventListener('click', function(){
        console.log('click hamburger');

        if (header.classList.contains('open')){  //Close hamubrger  

            header.classList.remove('open');

            fadeElems.forEach(function(element){
                element.classList.remove('fade-in');
                element.classList.add('fade-out');          
        });
        }
        else {           
            header.classList.add('open');
            
            fadeElems.forEach(function(element){ //Open hamburger
                element.classList.remove('fade-out');
                element.classList.add('fade-in');
        });
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
 * 
 * querySelectorAll() returns a static (not live) 
 * NodeList representing a list of the document's elements that match the specified 
 * group of selectors.
 * 
 * forEach(function()) permet d'exécuter une fonction donnée sur chaque élément du tableau.
 */