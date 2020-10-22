const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc= document.querySelector('#sc');

setInterval(() => {

    let day = new Date();
    let angleHh = day.getHours() * 30;
    let angleMm = day.getMinutes() * deg;
    let angleSs = day.getSeconds() * deg;
    hr.style.transform = 'rotateZ(' + (angleHh + (angleMm/12)) +'deg)';
    mn.style.transform = 'rotateZ(' + angleMm + 'deg)';
    sc.style.transform = 'rotateZ(' + angleSs + 'deg)';
});