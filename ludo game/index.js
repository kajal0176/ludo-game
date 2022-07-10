ludogame= () =>{
  var randomnumber1=Math.floor(Math.random()*6)+1;
  var randomdice="dice"+ randomnumber1 +".png";
  var randomimagesource="images/"+randomdice ;
  var img1=document.querySelectorAll("img")[0];
  img1.setAttribute("src",randomimagesource);
  var randomnumber2=Math.floor(Math.random()*6)+1;
  //var randomdice1="dice"+ randomnumber2 +".png";
  var randomimagesource1="images/dice"+randomnumber2 +".png";
  var img2=document.querySelectorAll("img")[1];
  img2.setAttribute("src",randomimagesource1);
  if(randomnumber1>randomnumber2){
    
    document.querySelector("h1").innerHTML="player 1 wins";
  }
  else if(randomnumber1<randomnumber2){
      document.querySelector("h1").innerHTML="player 2 wins";
  }
  else{
      document.querySelector("h1").innerHTML="draw";
  }
}
