function q1yekipa(){
  let menu = document.getElementById('gowno').classList;
  let ekipa = document.getElementById('ekipa').classList; 
  menu.add('hidden')
  ekipa.remove('hidden');
  let filmik = document.getElementById('q1yekipa');
  filmik.play()
  

}

function openMovingWindow() {

    let newWindow = window.open('animuland.html', '_blank', 'width=600,height=300');
  

    let xPos = 0;
    let yPos = 0;
    let corner = 0; // 0: top-left, 1: top-right, 2: bottom-right, 3: bottom-left
  

    function moveWindow() {
      switch (corner) {
        case 0:
          if (xPos < window.innerWidth - 600 && yPos < window.innerHeight - 300) {
            xPos += 40;
            yPos += 40;
          } else {
            corner = 1;
            xPos = window.innerWidth - 600;
            yPos = 0;
          }
          break;
        case 1:
          if (xPos > 0 && yPos < window.innerHeight - 300) {
            xPos -= 40;
            yPos += 40;
          } else {
            corner = 2;
            xPos = 0;
            yPos = window.innerHeight - 300;
          }
          break;
        case 2:
          if (xPos < window.innerWidth - 600 && yPos > 0) {
            xPos += 40;
            yPos -= 40;
          } else {
            corner = 3;
            xPos = window.innerWidth - 600;
            yPos = window.innerHeight - 300;
          }
          break;
        case 3:
          if (xPos > 0 && yPos > 0) {
            xPos -= 40;
            yPos -= 40;
          } else {
            corner = 0;
            xPos = 0;
            yPos = 0;
          }
          break;
      }
  
      newWindow.moveTo(xPos, yPos);
      setTimeout(moveWindow, 100); 
    }
  
    moveWindow();

  }

  const startTime = new Date().getTime();
  const endTime = startTime + (3 * 60 * 1000); 



  
  function darmowehacki() {
    const audio = document.getElementById('klamotas');
    let main = document.getElementById('takichuj');
    audio.play();

    function updateTimer() {
      const currentTime = new Date().getTime();
      const remainingTime = endTime - currentTime;
  
      if (remainingTime > 0) {
        const minutes = Math.floor(remainingTime / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
        main.innerHTML = `Link pokaże sie za: ${minutes}m ${seconds}s`;
        setTimeout(updateTimer, 1000); 
      } else {
        main.innerHTML = 'Coś poszło nie tak. Upewnij się, że słyszałeś piosenkę';
      }
    }
  
    updateTimer();
  

  }