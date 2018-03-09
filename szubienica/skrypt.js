var Counter = 5;
var Sentence ="";
var CorrectAnswers =0;


function CreateAlphabet() {
    const AlphabetBlock = document.querySelector('.Alphabet');
    const aplhabet = ["a", "ą", "b", "c", "ć", "d", "e", "ę", "f", "g", "h", "i", "j", "k", "l", "ł", "m", "n", "ń", "o", "ó", "p", "r", "s", "ś", "t", "u", "w", "y", "z", "ź", "ż"];

    aplhabet.forEach(function (letter) {
        const lett = document.createElement('button');
        lett.type = "button";
        lett.classList.add("button");
        lett.innerText = letter.toUpperCase();
        AlphabetBlock.appendChild(lett);
    });
}
function CreateGameBlocks() {
    const GameHeaderBlock = document.querySelector('.GameHeader');
    const GameSentenceBlock = document.querySelector('.GameSentence');

    for (i = 0; i < Sentence.length; i++) {
        const SentenceBlock = document.createElement('div');
        GameSentenceBlock.appendChild(SentenceBlock);

        if (Sentence.charAt(i) == " ") {
            SentenceBlock.classList.add('endline');
        }
        else {
            SentenceBlock.classList.add('SentenceBlock');
        }

    }
    const Cntr = document.createElement('div');
    Cntr.classList.add('Counter');
    Cntr.innerText = Counter;
    GameHeaderBlock.appendChild(Cntr);
}

function RefreshCounter() {
    const CounterBlock = document.querySelector('.Counter');
    
    Counter--;
    CounterBlock.innerText = Counter;
    if (Counter == 0) {
        alert("Koniec gry. Wymagane hasło to \""+Sentence+"\"");
        RestartGame();
    }
}

function StartGame() {
    const Btns = document.querySelectorAll('.button');

    [].forEach.call(Btns, function (btn) {
        btn.classList.add('btn-active');
    })
}

function RestartGame() {
    const Btns = document.querySelectorAll('.button');
    const GameHeader = document.querySelector('.GameHeader');
    const GameSentence = document.querySelector('.GameSentence');
    const StartBtn = document.querySelector('.game-start');
    Counter = 5;
    CorrectAnswers=0;

    [].forEach.call(Btns, function (btn) {
        if (btn.classList.contains('btn-active')) {
            btn.classList.remove('btn-active');
        }
    });
    GameHeader.removeChild(GameHeader.firstChild);
    while(GameSentence.firstChild)
    {
        GameSentence.removeChild(GameSentence.firstChild);
    }
    RandomSentence();
    StartBtn.style.display = "block";
}

const showBtn = function (btn) {
    const GameSentenceBlock = document.querySelector('.GameSentence');
    var IsCorrect = false;
    
    if (btn.target.classList.contains('btn-active')) {
        btn.target.classList.remove('btn-active');
        console.log(Sentence.length);
        for (let i = 0; i < Sentence.length; i++) {
            if (Sentence.charAt(i) == btn.target.innerText) {
                GameSentenceBlock.children[i].innerText = Sentence.charAt(i);
                GameSentenceBlock.children[i].style.border = "2px solid #00cc1b";
                CorrectAnswers++;
                IsCorrect = true;
            }
        }
        if (!IsCorrect) {
            RefreshCounter();
        }
        if(CorrectAnswers == Sentence.length)
        {
            alert("Brawo! Zgadłeś hasło! Jesteś zajebisty");
            RestartGame();
        }
    }

};

function RandomSentence() {
    const sentence = [ //hasła z których losujemy
        "Samochód",
        "Elewacja",
        "Hasło",
        "Mysz",
        "Super bohaterowie",
        "Super pies",
        "Przyjaciel",
        "Terminator",
        "Superman",
        "Herkules",
        "Batman",
        "Spiderman",
        "Kapitan Ameryka",
        "HTML",
        "React",
    ];
    const max = sentence.length - 1;
    const min = 0;
    const rand = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(sentence[rand]);
    Sentence = sentence[rand].toUpperCase();
    CreateGameBlocks();
}

document.addEventListener("DOMContentLoaded", function () {
    const AlphabetBlock = document.querySelector('.Alphabet');
    const StartBtn = document.querySelector('.game-start');

    CreateAlphabet();
    RandomSentence();
    

    AlphabetBlock.addEventListener('click', showBtn);
    StartBtn.addEventListener('click', function (e) {
        StartGame();
        e.target.style.display = "none";
    });



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