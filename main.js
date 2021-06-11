//DOM Elemnts
const time = document.getElementById('time');
 greeting = document.getElementById('greeting');
 name = document.getElementById('name');
 focus = document.getElementById('focus');

 //Showtime
 function showtime() {
     let today = new Date();
       hour = today.getHours();
       min = today.getMinutes();
       sec = today.getSeconds();

  //Set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';

  //12 Hour format
    hour = hour % 12 || 12;
  //Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showtime, 1000);

 }

 //Add zeros
  function addZero(n) {
      return (parseInt(n, 10) < 10 ? '0' : '') + n;
  }

  //Set Background and greeting
  function setBgGreet() {
      let today = new Date();
        hour = today.getHours();

      if (hour < 12) {
          //Morning
        document.body.style.backgroundImage = "url('./img/morning.jpg')";
        greeting.textContent = 'Good Morning';
      } else if (hour < 18) {
          //Afternoon
          document.body.style.backgroundImage = "url('./img/afternoon.jpg')";
          greeting.textContent = 'Good Afternoon';
      } else {
          //Evening
          document.body.style.backgroundImage = "url('./img/night2.jpg')";
        greeting.textContent = 'Good Night';
        document.body.style.color = 'white';
      }
  }

  //Run
showtime();
setBgGreet();
