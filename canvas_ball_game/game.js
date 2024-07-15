//let section
let canvas=document.querySelector("canvas");
canvas.height=innerHeight;
canvas.width=innerWidth/2;
let c=canvas.getContext("2d");
canvas.style.backgroundColor="lightseagreen";
let mouse={
    x:undefined,
    y:undefined
}
let score=document.querySelector("#score");
let button=document.querySelector("button");
let over=document.querySelector(".over")
let tagline=document.querySelector(".over p")
bujji_intro=document.querySelector(".bujji_intro")
let text=document.querySelector(".text")
let dx=2;
dy=3;
let e=Math.random()*innerHeight
let d=Math.random()*innerWidth/3
let a=200,b=200
let collide=0;

// if(window.innerWidth<1450){
//     alert("Sorry this game is not optimised for your window size. It only opens in 16 inch laptops")
//     window.close()
// }
if(window.innerWidth<700){
    canvas.width=window.innerWidth
    canvas.height=innerHeight
    bujji_intro.style.display="none"
    text.style.display="none"
           //our circles
let ball={
    radius:25,
    color:"red",
    draw(){
        c.beginPath();
        c.arc(d,e,25,0,360,false);
    c.fillStyle=this.color
    c.fill();
    c.stroke()
    }
}

    //getting mouse position
canvas.addEventListener("mousemove",(event)=>{
    mouse.x=event.x;
    mouse.y=event.y;
})
    
    function animate(){
        // console.log(distance(d,e,mouse.x,mouse.y))
        c.clearRect(0,0,innerWidth,innerHeight)
        //collide condition
        if(distance(d,e,mouse.x,mouse.y)<50){
            ball.color="black"
            dx=-(dx)
            dy=-(dy+2)
            collide=collide+10;
            score.innerHTML="Score : "+collide
            
            
        }
    
        else{
            ball.color="red";
        }
      
        d+=dx;
        e+=dy
        //game over condition
    
        if(d-25>innerWidth){
            d=-100
           dx=0;
           dy=0;
           console.log(collide);
           over.style.display="flex"
    
           if(collide<300){
            tagline.innerHTML=tagline.innerHTML+"hat saale noob"+"(YOUR score : "+collide+")"
            console.log(collide)
            }
            else if(300<collide && collide<=500){
                tagline.innerHTML=tagline.innerHTML+"Nice try but still NOOB"+"(YOUR score : "+collide+")"
                console.log(collide)
            }
            else if(500<collide && collide<=700){
                tagline.innerHTML=tagline.innerHTML+"Hmm GOOd child"+"(YOUR score : "+collide+")"
                console.log(collide)
            }
            else if(700<collide && collide<=1000){
                tagline.innerHTML=tagline.innerHTML+"Bhagwan tuche acchi si bahu de"+"(YOUR score : "+collide+")"
                console.log(collide)
            }
            else if(1000<collide && collide<=1200){
                tagline.innerHTML=tagline.innerHTML+"oo tussi kmaal kr ditta"+"(YOUR score : "+collide+")"
                console.log(collide)
            }
            else if(1200<collide && collide<=1500){
                tagline.innerHTML=tagline.innerHTML+"isse accha to jaake padhai kr le"+"(YOUR score : "+collide+")"
                console.log(collide)
            }
            else if(1500<collide && collide<=1700){
                tagline.innerHTML=tagline.innerHTML+"kyu time pass kr rha h tu vats"+"(YOUR score : "+collide+")"
                console.log(collide)
            }
            else if(1700<collide && collide<=2000){
                tagline.innerHTML=tagline.innerHTML+"tu gu kha me chala"+"(YOUR score : "+collide+")"
                console.log(collide)
            }
            else if(collide>2000){
                 tagline.innerHTML=tagline.innerHTML+"ab koi tagline nhi milegi"+"(YOUR score : "+collide+")"
            }
        //    console.log(collide*10)
    
    //         c.font = "100px Arial";
    //         c.fillStyle="crimson"
    // c.fillText("GAME OVER",80,250);
    window.addEventListener("keydown",(event)=>{
        if(event.key=="Enter"){
            window.location.reload()
    }}
    )
        }
        else if(d+50<0){
            dx=-dx  
        }
       if(e+50>innerHeight||e+50<0){
            dy=-dy
        }
 
        
        ball.draw()
        c.beginPath()
        c.arc(mouse.x,mouse.y,25,0,360,false);
        c.fillStyle="yellow"
        c.fill()
        c.stroke()
        requestAnimationFrame(animate)
    
       
    
      
    }

}
else{
    window.open("game.html")
    canvas.width=innerWidth/2
    canvas.height=innerHeight
    //getting mouse position
canvas.addEventListener("mousemove",(event)=>{
    mouse.x=event.x-(innerWidth)/4;
    mouse.y=event.y;
})
let ball={
    radius:50,
    color:"red",
    draw(){
        c.beginPath();
        c.arc(d,e,50,0,360,false);
    c.fillStyle=this.color
    c.fill();
    c.stroke()
    }
}

    function animate(){
    // console.log(distance(d,e,mouse.x,mouse.y))
    c.clearRect(0,0,innerWidth/2,innerHeight)
    //collide condition
    if(distance(d,e,mouse.x,mouse.y)<100){
        ball.color="black"
        dx=-(dx+2)
        dy=-(dy+5)
        collide=collide+10;
        score.innerHTML="Score : "+collide
        
        
    }

    else{
        ball.color="red";
    }
  
    d+=dx;
    e+=dy
    //game over condition

    if(d-50>innerWidth/2){
        d=-100
       dx=0;
       dy=0;
       console.log(collide);
       over.style.display="flex"

       if(collide<300){
        tagline.innerHTML=tagline.innerHTML+"hat saale noob"
        console.log(collide)
        }
        else if(300<collide && collide<=500){
            tagline.innerHTML=tagline.innerHTML+"Nice try but still NOOB"
            console.log(collide)
        }
        else if(500<collide && collide<=700){
            tagline.innerHTML=tagline.innerHTML+"Hmm GOOd child"
            console.log(collide)
        }
        else if(700<collide && collide<=1000){
            tagline.innerHTML=tagline.innerHTML+"Bhagwan tuche acchi si bahu de"
            console.log(collide)
        }
        else if(1000<collide && collide<=1200){
            tagline.innerHTML=tagline.innerHTML+"oo tussi kmaal kr ditta"
            console.log(collide)
        }
        else if(1200<collide && collide<=1500){
            tagline.innerHTML=tagline.innerHTML+"isse accha to jaake padhai kr le"
            console.log(collide)
        }
        else if(1500<collide && collide<=1700){
            tagline.innerHTML=tagline.innerHTML+"kyu time pass kr rha h tu vats"
            console.log(collide)
        }
        else if(1700<collide && collide<=2000){
            tagline.innerHTML=tagline.innerHTML+"tu gu kha me chala"
            console.log(collide)
        }
        else if(collide>2000){
             tagline.innerHTML=tagline.innerHTML+"ab koi tagline nhi milegi"
        }
    //    console.log(collide*10)

//         c.font = "100px Arial";
//         c.fillStyle="crimson"
// c.fillText("GAME OVER",80,250);
window.addEventListener("keydown",(event)=>{
    if(event.key=="Enter"){
        window.location.reload()
}}
)
    }
    else if(d+50<0){
        dx=-dx  
    }
   if(e+50>innerHeight||e+50<0){
        dy=-dy
    }
    //our circles

    
    ball.draw()
    c.beginPath()
    c.arc(mouse.x,mouse.y,50,0,360,false);
    c.fillStyle="yellow"
    c.fill()
    c.stroke()
    requestAnimationFrame(animate)

   

  
}
}
//canvas text
c.font = "100px Arial";
c.fillStyle="black"
c.fillText("score=",200,200);


//function section

//function for circles

function circles(){
    
    for(let i=0;i<=10;i++){
        a=Math.random()*window.innerHeight,b=Math.random()*innerWidth/2
        ball.draw()
    }

}
//finding distance using pythagorous
function distance(x1,y1,x2,y2){
    let xDist=x2-x1,yDist=y2-y1
    return Math.sqrt(xDist*xDist+yDist*yDist)

}



animate()

//simple js for html


button.addEventListener("click",()=>{
    window.location.reload()
})


