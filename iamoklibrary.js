function hardest(q1,q2){
     //collision algorithm
    if(Math.abs(q1.x-q2.x)<=(q1.width/2+q2.width/2)){
        q1.velocityX=q1.velocityX*-1;
    } 
   
   
  if (Math.abs(q1.y-q2.y)<=(q1.height/2+q2.height/2)){
    q1.velocityY=q1.velocityY*-1;}
}
function anticipation(w1,w2){
//collision algorithm
    if(Math.abs(w1.x-w2.x)<=(w1.width/2+w2.width/2) && (Math.abs(w1.y-w2.y)<=(w1.height/2+w2.height/2))){
        return true;
    }
    else
    {
       return false ;
    }
}