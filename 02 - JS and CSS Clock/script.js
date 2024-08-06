const hourHand = document.querySelector('.hour-hand');
    const minutesHand = document.querySelector('.min-hand');
    const secondsHand = document.querySelector('.second-hand');


    function setTime() {
      const time = new Date();

      const seconds = time.getSeconds();
      const secondsDegree = ((seconds / 60) * 360) + 90 ;
      secondsHand.style.transform = `rotate(${secondsDegree}deg)`;

      const minutes = time.getMinutes();
      const minutesDegree = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
      minutesHand.style.transform = `rotate(${minutesDegree}deg)`;

      const hour = time.getHours();
      const hourDegrees = ((hour / 12) * 360) + ((minutes / 60) * 30) + 90;
      hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    }

    setInterval(setTime, 1000);
  
    setTime();