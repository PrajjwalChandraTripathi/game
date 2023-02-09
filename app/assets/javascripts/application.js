let turn= "X"
let gameover=false;

const changeturn = ()=> {
	// console.log(turn, 'abv')
    // return turn === "x" ? "0":"X";

    if(turn == 'X'){
   	 return '0'
    }
    else{
    return 'X'
   }

}

const checkwin=()=>{
    let gridtext =document.getElementsByClassName('gridtext')
    console.log(gridtext)
    let wins =[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    // console.log(gridtext, 'grid')&&(gridtext[e[0]].innerText != " "
    wins.forEach(e => {
    	 // console.log(e[0], 'harsh')
    	 console.log((gridtext[e[0]].innerText == gridtext[e[1]].innerText) && (gridtext[e[2]].innerText== gridtext[e[1]].innerText) && (gridtext[e[2]].innerText== gridtext[e[0]].innerText))
        if((gridtext[e[0]].innerText == gridtext[e[1]].innerText) && (gridtext[e[2]].innerText== gridtext[e[1]].innerText) && (gridtext[e[2]].innerText== gridtext[e[0]].innerText)&&(gridtext[e[0]].innerText != "")&&(gridtext[e[1]].innerText != "")&&(gridtext[e[2]].innerText != "")){
        	// console.log(gridtext[e[0]].innerText, 'mm')
        	        	// console.log(gridtext[e[0]].innerText, 'nn')
            document.querySelector('.details').innerText= gridtext[e[0]].innerText +" Won"
            gameover = true 
        }   
    })
}

let griding = document.getElementsByClassName("grids");
Array.from(griding).forEach(element =>{
    let gridtext = element.querySelector('.gridtext');
    element.addEventListener('click', ()=>{
        if(gridtext.innerText ===''){
            gridtext.innerText=turn;
                        	// console.log(turn, 'aaaa')
            turn = changeturn();

            	// console.log(gameover, 'az')
            checkwin();
                        	
            if(gameover == false){
            	            	
            document.getElementsByClassName("details")[0].innerText = "Turn for "  + turn;
        
        }
    }
    })
})

restart.addEventListener('click',()=>{
    let gridtext = document.querySelectorAll('.gridtext');
    Array.from(gridtext).forEach(element=>{
        element.innerText=""
    });
    turn = "X";
    gameover = false ;
            document.getElementsByClassName("details")[0].innerText = "Turn for "  + turn;


})// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .
