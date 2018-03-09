document.addEventListener("DOMContentLoaded", function () {

    var select_h = document.querySelector("#godzina");
    var select_m = document.querySelector("#minuta");
    var select_s = document.querySelector("#sekunda");
    var sounds = document.querySelector("#sounds");
    const time = document.querySelectorAll(".time");
    const set_btn = document.querySelector(".set_btn");
    const reset_btn = document.querySelector(".reset_btn");
    const alarm_clock = new Audio();

    const digits = new Array(6);
    var hours_left = 0;
    var minutes_left = 0;
    var seconds_left = 0;
    var tr;
    var alarm_on = false;




    for (let i = 1; i <= 6; i++) {
        const el = document.createElement('img'); //wczytanie img do pamieci-przyspiesza wczytywanie

        el.width = 70;
        el.height = 100;
        el.src = "digits/" + i + ".png";
        digits[i] = el;
    }
    //
    time[0].firstElementChild.appendChild(digits[1]);
    time[0].lastElementChild.appendChild(digits[2]);

    time[1].firstElementChild.appendChild(digits[3]);
    time[1].lastElementChild.appendChild(digits[4]);

    time[2].firstElementChild.appendChild(digits[5]);
    time[2].lastElementChild.appendChild(digits[6]);
    //

    function select_hours() { // tworzy opcje w selectach
        for (let i = 1; i < 24; i++) {
            i = (i < 10) ? ("0" + i) : i;
            const option = document.createElement('option');
            option.value = i;
            option.text = "\xa0\xa0\xa0" + i;
            select_h.appendChild(option);
        }
        for (let i = 0; i < 60; i++) {
            i = (i < 10) ? ("0" + i) : i;
            const option = document.createElement('option');
            option.value = i;
            option.text = "\xa0\xa0" + i;
            select_m.appendChild(option);
        }
        for (let i = 0; i < 60; i++) {
            i = (i < 10) ? ("0" + i) : i;
            const option = document.createElement('option');
            option.value = i;
            option.text = "\xa0\xa0" + i;
            select_s.appendChild(option);
        }
    }

    function show_counter() {
        time[0].parentElement.classList.add('zegar_show'); //.zegar
    }

    function hide_set_btn() {
        set_btn.classList.add("btn_set_hide");
        reset_btn.style.display = "block";
        show_counter();
        alarm_on = true;

    }
    function turnOffAlarm() {

        alarm_on = false;
        time[0].parentElement.classList.remove('zegar_show');
        set_btn.classList.remove("btn_set_hide");
        reset_btn.style.display = "none";
        alarm_clock.pause();
    }

    function showTime() //pokazuje aktualny czas
    {
        var time = new Date();
        var hours = time.getHours();
        var minutes = time.getMinutes();
        var seconds = time.getSeconds();
        var milis = time.getMilliseconds();
        hours = (hours < 10) ? ("0" + hours) : hours;
        minutes = (minutes < 10) ? ("0" + minutes) : minutes;
        seconds = (seconds < 10) ? ("0" + seconds) : seconds;

        const clock = document.querySelector(".budzik");
        var czas = hours + ":" + minutes + ":" + seconds;
        clock.innerText = czas;

        if (alarm_on)
            time_remain();

        AlarmTime();
        setTimeout(showTime, 1000);
        //setTimeout(AlarmTime,1000);//odswieza czas wtedy kiedy zegar,inaczej nie jest rowno

    }
    function time_remain() //oblicza pozostaly czas
    {
        const alarm_time = new Date();
        var timer = new Date();
        var SecondsInADay;

        alarm_time.setHours(select_h.value);
        alarm_time.setMinutes(select_m.value);
        alarm_time.setSeconds(select_s.value);
        var timeDifference = alarm_time.getTime() - timer.getTime();

        if (timeDifference < 0) {
            alarm_time.setDate(timer.getDate() + 1);
            timeDifference = alarm_time.getTime() - timer.getTime();
        }
        if (timeDifference == 0) {
            const time_reached = new CustomEvent('time_reached', { bubbles: false });
            time[0].parentElement.dispatchEvent(time_reached);
        }

        SecondsInADay = timeDifference / 1000;
        hours_left = Math.floor(SecondsInADay / 60 / 60);
        minutes_left = Math.floor(SecondsInADay / 60 - hours_left * 60);
        seconds_left = SecondsInADay - hours_left * 60 * 60 - minutes_left * 60;


        //  tr = setTimeout(time_remain,1000);  
    }
    function AlarmTime() { //zmienia cyfry na wyswietlaczu
        var hour_t = Math.floor(hours_left / 10);
        var hour_u = Math.round(hours_left % 10);
        var minutes_t = Math.floor(minutes_left / 10);
        var minutes_u = Math.round(minutes_left % 10);
        var seconds_t = Math.floor(seconds_left / 10);
        var seconds_u = Math.round(seconds_left % 10);

        digits[1].src = "digits/" + hour_t + ".png";
        digits[2].src = "digits/" + hour_u + ".png";
        digits[3].src = "digits/" + minutes_t + ".png";
        digits[4].src = "digits/" + minutes_u + ".png";
        digits[5].src = "digits/" + seconds_t + ".png";
        digits[6].src = "digits/" + seconds_u + ".png";
    }

    showTime();
    select_hours();

    set_btn.addEventListener('click', time_remain);
    set_btn.addEventListener('click', hide_set_btn);
    reset_btn.addEventListener('click', turnOffAlarm);

    time[0].parentElement.addEventListener('time_reached', function () {
        alarm_clock.src = "sounds/" + sounds.value + ".mp3";
        alarm_clock.play();
    })


})





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