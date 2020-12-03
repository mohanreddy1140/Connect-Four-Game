var player1=prompt("PlayerOne: Enter Your Name, You will be blue");
var player1color="rgb(86,151,255)";
var player2=prompt("PlayerTwo: Enter Your Name, You will be red");
var player2color="rgb(237,45,73)";
// var game_on = true;
//
var table= $("table tr")
 function changecolor(rowindex,columnindex,color){
   return table.eq(rowindex).find("td").eq(columnindex).find("button").css("background-color",color);
}

function findcolor(rowindex,columnindex) {
return table.eq(rowindex).find("td").eq(columnindex).find("button").css("background-color");
}

 function checkbottom(col) {
 var checkcolor=findcolor(5,col);
 for (var row = 5; row>-1; row--) {
   checkcolor= findcolor(row,col)
   console.log(checkcolor );
   if(checkcolor==="rgb(128, 128, 128)"){
     return row
   }
 }
}
 function checkmatch(one,two,three,four) {
 if (one===two&&one===three&&one===four&&one!=="rgb(128, 128, 128)"&&one!==undefined){
   return true
 }
}
function horizon() {
for (var row = 0; row <6; row++) {
  for (var col = 0; col<3; col++) {
    if(checkmatch(findcolor(row,col),findcolor(row,col+1),findcolor(row,col+2),findcolor(row,col+3))){
      return true;
    }else {
      continue;
    }

}
}
}
//
function vertical() {
for (var col = 0; col <6; col++) {
  for (var row = 0;row<6; row++) {
    if(checkmatch(findcolor(row,col),findcolor(row+1,col),findcolor(row+2,col),findcolor(row+3,col))){
      return true
    }else {
      continue;
    }

}
}
}
//
function diagonal() {
 for (var row = 0; row <6;row++) {
   for (var col = 0; col < 6; col++) {
     if (checkmatch(findcolor(row,col),findcolor(row+1,col+1),findcolor(row+2,col+2),findcolor(row+3,col+3))) {
       return true;
     }else if (checkmatch(findcolor(row,col),findcolor(row-1,col+1),findcolor(row-2,col+2),findcolor(row-3,col+3))) {
       return true;
     }else {
       continue;
     }
}
}
}

 function gameend(winningPlayer) {
   for (var row = 0; row<6;row++) {
     for (col=0;col<6;col++){
       $("h2").text(" ");
       $("#start").css("visibility","hidden")

       $("h1").text(winningPlayer+" has won! Refresh your browser to play again!");
}
}
}
currentpalyer=1
currentname=player1
currentcolor=player1color
$('#start').text(player1+": it is your turn, please pick a column to drop your blue chip.");

$(".board button").click(function(){
  var col=$(this).closest("td").index();
  console.log(col)
  var row=checkbottom(col)
  console.log(row);
  changecolor(row,col,currentcolor);
  if (horizon()||vertical()||diagonal()) {
    console.log(gameend(currentname));

  }
  currentpalyer=currentpalyer*-1
  if (currentpalyer==1){
    currentname=player1
    $("#start").text(currentname+": it is your turn, please pick a column to drop your blue chip.");
    currentcolor=player1color
  }else {
    currentname=player2
    $("#start").text(currentname+": it is your turn, please pick a column to drop your red chip.");
    currentcolor=player2color
  }

}
)
