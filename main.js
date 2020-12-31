let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('mins');
let seconds = document.getElementById('sec');
let par = document.querySelector('p');
let div = document.querySelector('#particles-js');

setInterval(() => {
    const newYear = new Date(2021,00,01);
    const current = new Date();
    // let remTime = newYear.getTime() - current.getTime();
    let remTime = 0;

    let s = Math.floor(remTime / 1000);
    let m = Math.floor(s / 60);
    let h = Math.floor(m / 60);
    let d = Math.floor(h / 24);

    h%=24;
    m%=60;
    s%=60;

    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;

    if (remTime === 0){
        par.textContent = 'HAPPY NEW YEAR!!!';
        par.style.textAlign = 'center';
    }else {
        div.style.display = 'none';
        days.textContent = d;
        hours.textContent = h;
        minutes.textContent = m;
        seconds.textContent = s; 
    }
}, 1000);
