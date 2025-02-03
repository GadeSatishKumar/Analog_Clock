function updateClock() {
    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');
    const digitalClock = document.getElementById('digital-clock');
    const smallDigitalClock = document.getElementById('small-digital-clock');
  
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const hoursDeg = (hours % 12) * 30 + (minutes / 2);
    const minutesDeg = minutes * 6;
    const secondsDeg = seconds * 6;
  
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;
    minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
    secondHand.style.transform = `rotate(${secondsDeg}deg)`;
  
    const digitalTime = now.toLocaleTimeString();
    digitalClock.textContent = digitalTime;
    smallDigitalClock.textContent = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  }
  
  setInterval(updateClock, 1000);
  updateClock(); // Call initially to set the clock immediately
  