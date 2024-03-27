let a,b,c,d,e,rtp,rt,it,x;
let r1 = document.querySelector("#r1");
let r2 = document.querySelector("#r2");
let r3 = document.querySelector("#r3");
let r4 = document.querySelector("#r4");
let voltage = document.querySelector("#voltage");
let button = document.querySelector("button");
let currentoutput = document.querySelector(".currentoutput");
let voltageoutput = document.querySelector(".voltageoutput");

button.addEventListener("click", () => {
  a = r1.value;
a=Number.parseInt(a)
  b = r2.value;
  b=Number.parseInt(b)
  c = r3.value;
  c=Number.parseInt(c)
  d = r4.value;
  d=Number.parseInt(d)
  e = voltage.value;
  e=Number.parseInt(e)
console.log(a,b,c,d,e)
if(a>0 && b>0 && c>0 && d>0 && e>0){
    console.log("ok,I am working....");
rtp=(a*b+b*c+c*a)/(a*b*c);
console.log(rtp);
rt=rtp+d;
it=e/rt;
x=e-(it*d);
console.log("voltage left after r4= "+x)
console.log("total current harnessed is= "+it);
console.log("its the total resistance= " +rt);
console.log("voltage taken by r4 is= "+it*d)
console.log("current in r4 is= "+it);
console.log("voltage taken by r3 is= "+x)
console.log("current in r3 is= "+x/c);
console.log("voltage taken by r2 is= "+x)
console.log("current in r2 is= "+x/b);
console.log("voltage taken by r1 is= "+x)
console.log("current in r1 is= "+x/a);
currentoutput.innerHTML="current in r4= \n"+it+"  ,r3= \n"+x/c+"   ,r2= \n"+x/b+"   ,r1= \n"+x/a;
voltageoutput.innerHTML="Voltage taken by r4= "+it*d+"   ,r3= "+x+ "   ,r2= "+x+"   ,r1= "+x;
}
else{
    console.log("error");
    currentoutput.innerHTML="Entered invalid Values"
    voltageoutput.innerHTML="Enter valid values"
}
})
