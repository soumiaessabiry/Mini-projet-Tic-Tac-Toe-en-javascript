
let home=document.querySelector(".home");
let game=document.querySelector(".game");
let startPlay =document.getElementById("startPlay");
let cells=document.querySelectorAll(".cell");
cells=Array.from(cells);
console.log();
// let player1=document.getElementById("plyer1");
// let player2=document.getElementById("plyer2");
let restart=document.getElementById("RestratPlay");
let winner=document.getElementById("statue");
let nameplyer1=document.getElementById("Ply1");
let nameplyer2=document.getElementById("Ply2");
let scorworn=0;
let win=0;
let worn=false;

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
//  let sp = document.getElementById("startPlay").value;



//     startPlay.addEventListener("click", function() {
//     if (getComputedStyle(home).display !="none" && getComputedStyle(game).opacity =="0") {
//         home.style.display="none";
//         game.style.opacity="1";
//     } else {
//         home.style.display="block";
//         game.style.opacity="0";

//     }
//   });
function play() {
    var x = document.getElementById("startPlay").value;
    if (document.getElementById("ply1").value !="" && document.getElementById("ply2").value !="" ) {
        if (getComputedStyle(home).display !="none" && getComputedStyle(game).opacity =="0") {
                    home.style.display="none";
                    game.style.opacity="1";
                } else {
                    home.style.display="block";
                    game.style.opacity="0";
            
                }
        localStorage.setItem("plyerX",document.getElementById("ply1").value);        
        localStorage.setItem("plyerO",document.getElementById("ply2").value);        

    }
    }
  
  function checkWinner(){
    options.forEach(checkcell);
    function checkcell(opt){
        let chek;
        chek= opt.every(idx => cells[idx].innerText.trim() == currentplayer);

        if (chek) {
            if (currentplayer=="X") {
                document.getElementById("ply1").setAttribute("style", "background-color:#ff9933;");
                worn==true;
            }if (currentplayer=="O") {
              
                document.getElementById("ply2").setAttribute("style", "background-color:#33ccff;");

                worn==true;

            }
            
            
            chagecolor(opt);

            
        } 
        if(win==9 && worn==false ){
            winner.innerHTML=`<strong class="text-danger">Drooow</strong>`;

        }
        
       
       
        
       
    }

  }
// function checkWinner() {
    // if (localStorage.getItem("1")=="X" && localStorage.getItem("1")==localStorage.getItem("2") && localStorage.getItem("2")==localStorage.getItem("3")||localStorage.getItem("1")==localStorage.getItem("4") && localStorage.getItem("4")==localStorage.getItem("7")||localStorage.getItem("1")==localStorage.getItem("5") && localStorage.getItem("5")==localStorage.getItem("9"))
    // {
    // console.log("x is winner");
    // }
    // else if (localStorage.getItem("1")=="O" && localStorage.getItem("1")==localStorage.getItem("2") && localStorage.getItem("2")==localStorage.getItem("3")||localStorage.getItem("1")==localStorage.getItem("4") && localStorage.getItem("4")==localStorage.getItem("7")||localStorage.getItem("1")==localStorage.getItem("5") && localStorage.getItem("5")==localStorage.getItem("9"))
    // {
    // console.log("O is winner");
    // }
    // let idc=localStorage.getItem(idcell);
    // console.log(idc);
// }



  function  chagecolor(opt){
    opt.forEach(function(idx){
        cells[idx].classList.add("winner");
        console.log(cells);
    })
  }

  
   
   cells.forEach(function (cell) {
    cell.addEventListener('click',function(){
        win++;
        // let idcell = this.getAttribute('id');
        // console.log(idcell);

        if (cell.innerHTML.trim() !="") return
            cell.innerHTML=currentplayer;
            console.log(currentplayer);  
             
             
            // localStorage.setItem(idcell,currentplayer);
            checkWinner();

          currentplayer = currentplayer == "X" ? "O" :"X"  


    })
  })
  
  function Restart(){
    localStorage.clear();
    location.reload();
}
  

  
