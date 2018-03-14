function CreateTiles(text) {
    const UserOutput = document.querySelector('.UserOutput');

    for (let i = 0; i < text.length; i++) {
        const NewTile = document.createElement('div');
        NewTile.classList.add('LetterTiles');
        NewTile.innerText = text.charAt(i);
        UserOutput.appendChild(NewTile);
    }
}
function RemoveTiles() {
    const UserOutput = document.querySelector('.UserOutput');
    while (UserOutput.firstChild) {
        UserOutput.removeChild(UserOutput.firstChild);
    }
}
function CreateInputText() {
    const LetterTiles = document.querySelectorAll('.LetterTiles');
    const UserInput = document.querySelector('.UserInput');
    var text = "";

    [].forEach.call(LetterTiles, function (el) {
        text = text + el.innerText;
    })
    UserInput.value = text;
}

document.addEventListener("DOMContentLoaded", function () {
    const UserInput = document.querySelector('.UserInput');
    const UserOutput = document.querySelector('.UserOutput');
    const Info = document.querySelector('.Info');


    UserInput.addEventListener('input', function (e) {
        if (e.target.value.length < 5) {
            Info.innerText = "Za mało";
        }
        else {
            Info.innerText = "Teraz ok";
        }
        const text = e.target.value;
        RemoveTiles();
        CreateTiles(text);
    })
    UserOutput.addEventListener('click', function (el) {
        UserOutput.removeChild(el.target);
        CreateInputText();
    })

})




//indexof - czy zawiera fraze
//szukanie po input form
/*todoSearch.addEventListener('input', function() {
    const val = this.value;
    const elems = todoList.querySelectorAll('.todo-element');

    [].forEach.call(elems, function(el) {
        const text = el.querySelector('.todo-element-text').innerText;

        if (text.indexOf(val) !== -1) {
            el.style.setProperty('display', '');
        } else {
            el.style.setProperty('display', 'none');
        }
    });
});*/

// e.target.closest('.todo-element').remove();

// list.addEventListener('click', function(e) {
//     //e.target - ten który kliknął
//     //e.currentTarget - ten który nasłuchuje           

//     if (e.target.classList.contains('delete')) { //tutaj nie tylko klasę możemy spradzać
//         const element = e.target.parentElement;
//         element.parentElement.removeChild(element);
//         console.log(e.currentTarget);
//     }
// });
/*
const nevent = new CustomEvent('irownasiepiec');//tworzy event i przypisuje
            cont.dispatchEvent(nevent);
/*
fabryka obiektów

    function auto(marka,model,cena)
    {
        this.cena = cena;
        this.model = model;
        this.marka = marka;
        this.print = function(){
            console.log(this.cena);
        }
        const samochod = {
            marka :  marka,
            moda : model,
            cena : cena
        }
        return samochod;

    }
    var volvo = new auto("Volvo","C30",30000);
    var bora =  auto("volkswagen","bora",123123);
    console.log(volvo);
    console.log(bora);
  
  
    //console.log(volvo.cena);
    
})
*/
/*
foreach dla kolekcji
const divs = document.querySelectorAll('div.module');

[].forEach.call(divs, function(el) {
    //działamy na elementach
    el.style.color = "red";
});
*/
/*
Dog.prototype = Object.create(Animal.prototype); = przypisywanie prototypów
*/
/*
    auto.prototype.showInfo = function() { prototyp z wywołaniem
        console.log("Cena: "+volvo.cena);
    }
   volvo.showInfo();
*/
/*
this.print = function(){ wypisuje wartosc z klasy
            console.log(this.cena);
*/
/*
 for(let i=0;i<butts.length;i++) //nie wykonuje zdarzenia poza tym
    {
        butts[i].addEventListener('click',function(e) {
            e.stopPropagation();
            console.log(i);
        })
    }
*/
/*
    for(let i=0;i<butts.length;i++) //zdarzenie klawisz
    {
        butts[i].addEventListener('keydown',function(e) {
            console.log(String.fromCharCode(e.keyCode));
        })
    }
*/
/*
function changeColor() {
    this.style.setProperty('color', 'red'); //this wskazuje na kliknięty element
}

document.addEventListener("DOMContentLoaded", function() {

    const el1 = document.querySelector('.btn1');
    el1.element.addEventListener('click', changeColor);

});
*/
/*
document.addEventListener("DOMContentLoaded",function(event){
    console.log("DOM wczytany");  -- skrypt odpala sie po wczytaniu DOMu
})
*/
//list.removeChild(list.childNodes[i]); usuwa dzieci :D aborcja kierwa
//const el = document.createElement('div');// tworzy element
//div.appendChild(el); //wstawiamy element do drzewa dokumentu
/*
const btn = document.querySelector('.module .btn-primary');

//pobieramy pierwszy .btn w pierwszym li listy ul
const btnInFirstLi = document.querySelector('ul li:fist-of-type .btn');
*/

/*
document.addEventListener("DOMContentLoaded", function() {

    ...tutaj trafia nasz skrypt operujący na elementach ze strony

});
*/
//charAt(3) - zwraca 4 litere tekstu
// slice(3) - wycina tekst przed 3 znakiem
//if(tekst.indexOf("buda") > -1) -- sprawdza czy w teksie jest wyraz
//Metoda split(znak, długość) dzieli tekst na części, w wyniku
// zwracając tablicę z wyrazami oddzielonymi podanym znakiem
// /  console.log(nowytekst.replace("AlA","OlA")); zamienia ala na ola w teksie

//po wywolaniu funkcji mozemy sprawdzic ile przekazano argumentow
// w funkcji uzyc np arguments.length

//if (typeof txt === 'undefined') {
 //   txt = "lorem";               sprawdzanie czy wartosc zdefiniowana
//}