// ajouter local storge
// localStorage.setItem('name','rami')
// localStorage.setItem('age','21')
// // Session stirge
// sessionStorage.setItem('name',"souùa")
// // get element by local storage

// const namee=localStorage.getItem("name")
// console.log(namee);
let home=document.querySelector(".home");
let game=document.querySelector(".game");
let startPlay =document.getElementById("startPlay");
let cells=document.querySelectorAll(".cell");
cells=Array.from(cells);
let playernow=document.getElementById("plyerNow");
let restart=document.getElementById("RestratPlay");
let currentplayer="X";
 let options=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8],
 ]



startPlay.addEventListener("click", function() {
    if (getComputedStyle(home).display !="none" && getComputedStyle(game).opacity =="0") {
        home.style.display="none";
        game.style.opacity="1";
    } else {
        home.style.display="block";
        game.style.opacity="0";

    }
  });
  
  function checkWinner(){
    options.forEach(function (opt) {
        let chek= opt.every(idx => cells[idx].innerText.trim() == currentplayer)
        if (chek) {
            chagecolor(opt);
            localStorage.setItem("worn",currentplayer);
         
        }
    })

  }

  function  chagecolor(opt){
    opt.forEach(function(idx){
        cells[idx].classList.add("winner");
    })
  }
  
   
   cells.forEach(function (cell) {
    cell.addEventListener('click',function(){
       
        if (cell.innerHTML.trim() != "") return
            cell.innerHTML=currentplayer;
            playernow.innerHTML=currentplayer;
            checkWinner();
          currentplayer = currentplayer == "X" ? "O" :"X"  
        
    })
  })
  
  function Restart(){
    location.reload();
   }
  


