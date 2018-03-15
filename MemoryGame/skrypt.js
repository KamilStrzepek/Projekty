const imgs = [
    "0.png", "1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png"
]
var FirstTile = null;
var SecondTile = null;
var CanClick = true;
var GameStatus = false; //true = gra w toku
var TileNumber = 1;
var Points = 0;

function RandomizeImgs() {
    const Tiles = [];
    for (let i = 0; i < 20; i++) {
        // console.log(Math.floor(i/2));
        Tiles[i] = Math.floor(i / 2);
    }
    for (let i = 0; i < 20; i++) {
        const swap = Math.floor(Math.random() * i);
        const tmp = Tiles[i];
        Tiles[i] = Tiles[swap];
        Tiles[swap] = tmp;
    }
    CreateTiles(Tiles);
}

function HideTiles() {
    FirstTile.innerHTML = "<i class='fas fa-question'></i>";
    SecondTile.innerHTML = "<i class='fas fa-question'></i>";
    CanClick = true;
}

function RestartGame() {
    const GameBoard = document.querySelector('.GameBoard');
    const StartBtn = document.querySelector(".game-start");
    // list.removeChild(list.childNodes[i]);
    while (GameBoard.firstChild) {
        GameBoard.removeChild(GameBoard.firstChild);
    }
    StartBtn.innerHTML = "Rozpocznij grę";
    RandomizeImgs();
    Points = 0;
    GameStatus=false;
}

function CreateTiles(Tiles) {
    const GameBoard = document.querySelector('.GameBoard');
    for (let i = 0; i < 20; i++) {
        const tile = document.createElement('div');
        tile.classList.add('GameTile');
        GameBoard.appendChild(tile);
        tile.dataset.ImgType = Tiles[i];
        tile.dataset.index = i;
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const StartBtn = document.querySelector(".game-start");
    const GameBoard = document.querySelector('.GameBoard');
    RandomizeImgs();

    StartBtn.addEventListener('click', function () {
        const GameTiles = document.querySelectorAll('.GameTile');

        if (GameStatus == true) {
            RestartGame();
        }
        else {
            [].forEach.call(GameTiles, function (Tile) {
                Tile.innerHTML = "<i class='fas fa-question'></i>";
                Tile.classList.add('TileActive');
            })
            this.innerText = "Restartuj grę";
            GameStatus = true;
        }
    });

    GameBoard.addEventListener('click', function (e) {
        if (e.target.classList.contains('TileActive') && CanClick == true) {
            const innerImg = "<img src='img/" + e.target.dataset.ImgType + ".png' >";
            e.target.innerHTML = innerImg;

            // if (TileNumber == 2) {
            //     SecondTile = e.target;
            //     if (FirstTile.dataset.ImgType == SecondTile.dataset.ImgType) {
                    
            //         Points++;
            //         if (Points == 10) {
            //             alert("Wygrałeś!");
            //             RestartGame();
            //         }
            //     }
            //     else {

            //         CanClick = false;
            //         setTimeout(HideTiles, 500);
            //     }
            //     TileNumber++;
            // }
            // if (TileNumber == 1) {
            //     FirstTile = e.target;
            //     TileNumber++;
            // }
            // if (TileNumber == 3) {
            //     TileNumber = 1;
            // }
            if(TileNumber == 1){
                FirstTile = e.target;
                TileNumber++;
            }
            else if(TileNumber == 2){
                SecondTile = e.target;
                if(FirstTile.dataset.ImgType == SecondTile.dataset.ImgType){
                    Points ++;
                    if(Points == 10){
                        alert("Wygrałeś!");
                        RestartGame();
                    }
                }
                else
                {
                    CanClick = false;
                    setTimeout(HideTiles,500);
                }
                TileNumber = 1;
            }

        }

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