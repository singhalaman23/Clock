const secondsHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');
function setDate(){
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  secondsHand.style.transform = `rotate(${seconds*6 + 90}deg)`;
  minutesHand.style.transform = `rotate(${minutes*6 + 90}deg)`;
  hoursHand.style.transform = `rotate(${hours*30 + 90}deg)`;
}
setInterval(setDate,1000);