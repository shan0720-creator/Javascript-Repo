const clock = document.querySelector(".clock");

let sec = 0,
min = 0,
hrs= 0,
intervalId;





const startStopWatch = () =>{
   intervalId = setInterval(() => {
      if(sec<59){
        sec++;
      }
      
      else{
        sec = 0;
        min++;
      }
      if(min>=59){
        hrs++;
        min = 0;
      }
      const seconds = String(sec).padStart(2,"0");
      const minutes = String(min).padStart(2,0);
      const hours  = String(hrs).padStart(2,"0");

      clock.innerText = `${hours}:${minutes}:${seconds}`;
   }, 1000);
}




const stopStopwatch = () =>{
  clearInterval(intervalId);
}





