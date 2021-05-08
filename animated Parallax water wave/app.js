
const wave1 = document.getElementById('wave1'),
      wave2 = document.getElementById('wave2'),
      wave3 = document.getElementById('wave3'),
      wave4 = document.getElementById('wave4');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    wave1.style.backgroundPositionX = ` ${400 + value * 4}px`; 
    wave2.style.backgroundPositionX = ` ${250 + value * -2}px`; 
    wave3.style.backgroundPositionX = ` ${200 + value * 4}px`; 
    wave4.style.backgroundPositionX = ` ${100 + value * -2}px`; 


})