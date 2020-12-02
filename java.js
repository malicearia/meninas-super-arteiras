      let tempo = 65000;  
      setTimeout(() => {
        document.querySelector('.video-css').classList.add('sumir');
        document.querySelector('main').classList.remove('sumir');
      }, tempo);


  window.onscroll = function(){
    scroll();
  }    
    function scroll(){
      let topo = document.getElementById("topo");
      if(document.documentElement.scrollTop > 50){
        topo.style.display = "block"
      }
      else {
        topo.style.display = "none"
      }
    }
    function subir(){
      document.documentElement.scrollTop = 0
    }
  

