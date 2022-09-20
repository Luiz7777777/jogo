    player1=localStorage.getItem("player1Name")
    player2=localStorage.getItem("player2Name")

    document.getElementById("player1Name").innerHTML=player1
    document.getElementById("player2Name").innerHTML=player2

    var player1Score=0
    var player2Score=0

    document.getElementById("player1Score").innerHTML=player1Score
    document.getElementById("player2Score").innerHTML=player2Score
  
    var perguntaturn=player1
    var respostaturn=player2

    document.getElementById("playerQuestion").innerHTML=perguntaturn
    document.getElementById("playerAnswer").innerHTML=respostaturn

    function send()
    {
        player1send=document.getElementById("word").value;
        palavra=player1send.toLowerCase()
         charAT1=palavra.charAt(1);
    }