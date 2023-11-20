let a = ["Stone", "Paper", "Scissors"];
let score = {
    Wins : 0,
    Losses : 0,
    Ties : 0,
    display: function (){
        document.getElementById("scores").innerHTML = `Wins : ${this.Wins} , Losses : ${this.Losses} , Ties : ${this.Ties}`;
    },
};

score.display();
function result(userC){
    let index = Math.floor(Math.random() * 3);
    let res = '';
    let compC = a[index];

   if(userC === compC){
       res = "It was a tie.";
       score.Ties++;
   }
   else if(userC === "Stone"){
       if (compC === "Paper"){
           res = "Computer Won.";
           score.Losses++;
       }
       else if(compC === "Scissors"){
           res = "You Won.";
           score.Wins++;
       }
   }
   else if(userC === "Paper"){
       if (compC === "Stone"){
           res = "You Won.";
           score.Wins++;
       }
       else if(compC === "Scissors"){
           res = "Computer Won.";
           score.Losses++;
       }
   }
   else if(userC === "Scissors"){
       if (compC === "Paper"){
           res = "You Won.";
           score.Wins++;
       }
       else if(compC === "Stone"){
           res = "Computer Won.";
           score.Losses++;
       }
   }
   let final = `Your choice was ${userC} , Computer's choice was ${compC}. `
   document.getElementById("result").innerHTML = final + res;
   score.display();
}

function reset(){
    score.Wins = 0;
    score.Losses = 0;
    score.Ties = 0;
    score.display();
}