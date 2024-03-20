let btn=document.querySelectorAll("button");
let c="";
let display=document.querySelectorAll(".display");

btn[0].addEventListener("click",(a)=>{
    console.log("0");
    c="";
    display[0].innerHTML=c;
    console.log(c)
   
})
btn[1].addEventListener("click",(a)=>{
    console.log(")");
    c=c+")";
    display[0].innerHTML=c;
    console.log(c)
    
})
btn[2].addEventListener("click",(a)=>{
    console.log("(");
    c=c+"(";
    display[0].innerHTML=c;
    console.log(c)
    
})
btn[3].addEventListener("click",(a)=>{
    console.log("/");
    c=c+"/";
    display[0].innerHTML=c;
    console.log(c)
    
})
btn[4].addEventListener("click",(a)=>{
    console.log("7");
    c=c+"7";
    display[0].innerHTML=c;
    console.log(c)
   
})
btn[5].addEventListener("click",(a)=>{
    console.log("8");
    c=c+"8";
    display[0].innerHTML=c;
    console.log(c)
    
})
btn[6].addEventListener("click",(a)=>{
    console.log("9");
    c=c+"9";
    display[0].innerHTML=c;
    console.log(c)
    
})
btn[7].addEventListener("click",(a)=>{
    console.log("*");
    c=c+"*";
    display[0].innerHTML=c;
    console.log(c)
    
})
btn[8].addEventListener("click",(a)=>{
    console.log("4");
    c=c+"4";
    display[0].innerHTML=c;
    console.log(c)
   
})
btn[9].addEventListener("click",(a)=>{
    console.log("5");
    c=c+"5";
    display[0].innerHTML=c;
    console.log(c)
    
})
btn[10].addEventListener("click",(a)=>{
    console.log("6");
    c=c+"6";
    display[0].innerHTML=c;
    console.log(c)
    
})
btn[11].addEventListener("click",(a)=>{
    console.log("-");
    c=c+"-";
    display[0].innerHTML=c;
    console.log(c)
    
})
btn[12].addEventListener("click",(a)=>{
    console.log("1");
    c=c+"1";
    display[0].innerHTML=c;
    console.log(c)
   
})
btn[13].addEventListener("click",(a)=>{
    console.log("2");
    c=c+"2";
    display[0].innerHTML=c;
    console.log(c)
    
})
btn[14].addEventListener("click",(a)=>{
    console.log("3");
    c=c+"3";
    display[0].innerHTML=c;
    console.log(c)
    
})
btn[15].addEventListener("click",(a)=>{
    console.log("+");
    c=c+"+";
    display[0].innerHTML=c;
    console.log(c)
    
})
btn[16].addEventListener("click",(a)=>{
    console.log("00");
    c=c+"00";
    display[0].innerHTML=c;
    console.log(c)
    
})
btn[17].addEventListener("click",(a)=>{
    console.log("0");
    c=c+"0";
    display[0].innerHTML=c;
    console.log(c)
    
})
btn[18].addEventListener("click",(a)=>{
    console.log(".");
    c=c+".";
    display[0].innerHTML=c;
    console.log(c)
    
})
btn[19].addEventListener("click",(a)=>{
    parseInt(c);
    let d=eval(c);
    console.log(d);
    c=d;
    display[0].innerHTML=c;

   
})



