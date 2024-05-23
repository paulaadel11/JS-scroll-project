let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountain3 = document.getElementById('mpountain3')
let mountain4 = document.getElementById('mpountain4')
let mountain7 = document.getElementById('mpountain7')
let river = document.getElementById('river')
let boat = document.getElementById('boat')
let nouvil = document.querySelector('.nouvil');

window.onscroll = function(){
    let value = scrollY;            /* "scrollY" dah el value bta3 lma te3ml scroll */
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountain3.style.top = value * 2 + 'px';
    mountain4.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value * 3 + 'px';
    nouvil.style.fontSize = value + 'px'
    if(scrollY >= 90)
    {
        nouvil.style.fontSize = 90 + 'px'
        nouvil.style.position = 'fixed';
        if(scrollY >= 370)
        {
            nouvil.style.display = 'none'
        }
        else{
            nouvil.style.display = 'block'
        }
        if(scrollY >= 110)
        {
            river.style.top = 110 + 'px';
            boat.style.top = 110 + 'px';
            mountain3.style.top = 220 + 'px';
            mountain4.style.top = 155 + 'px';
            moon.style.top = 440 + 'px';
            document.querySelector('.main').style.background = 'linear-gradient(#0d1858,#0a587c)';
        }
        else if(scrollY < 110){
            document.querySelector('.main').style.background = 'llinear-gradient(#0b0222,#150446)';
        }
    }
}
