function easter(){
    let div = document.getElementeById("easter")
    div.style.display = "block"
  }

  function nome(input){
    let div = document.getElementeById("easter")
    let titulo = document.getElementById("principal")
    let input = document.querySelector("input")
    
    let nome = input.value;
    
    titulo.textContent = ("Bem-Vindo" + nome)
    div.style.display = "none"
  }