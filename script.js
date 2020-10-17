var hole=document.getElementById("hole");
var character=document.getElementById("character");
var block=document.getElementById("block");
var jumping=0;
var counter=0;

hole.addEventListener("animationiteration",()=>{
    let random =-(Math.random()*300+150);
    hole.style.top=random+"px";
    counter++;
})

setInterval(function(){
    var characterTop=parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping===0){
        character.style.top=characterTop+3+"px";
    }
    var blocLeft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop=parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var cTop=-(500-characterTop);
    if((characterTop>480)||((blocLeft<20)&&(blocLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+130)))){
        alert("game over. Score:"+counter);
        character.style.top=100+"px";
        counter=0;
    }
},10)

jump=()=>{
    jumping=1;
    let jumpCount=0;
    let jumpInterval=setInterval(function(){
        var characterTop=parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop>6)&&(jumpCount<15)){
            character.style.top=characterTop-5+"px";
        }
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    },10)
}