let arr=[[["Q 1).How many hearts does an Octopus Have?"],[{option:"Three",value:"true"},{option:"One",value:"false"},{option:"Two",value:"false"},{option:"Do not have",value:"false"}]],
[["Q 2). How many years will it take a spacecraft launched from Earth to arrive at the planet Pluto? "],[{option:"One Year",value:"false"},{option:"2.5 Years",value:"false"},{option:"7 Years",value:"false"},{option:"9.5 Years",value:"true"}]],
[["Q3). If you could process a billion atoms per second, how long in years would it take to teleport a typical human being?"],[{option:"2 Hours",value:"false"},{option:"5.2 Minutes",value:"false"},{option:"200 Billion Years",value:"true"},{option:"5.1 Seconds",value:"false"}]],
[["Q4). To the nearest 1 per cent, what percentage of the mass of the solar system is in the Sun?"],[{option:"43 Percent",value:"false"},{option:"29 Percent",value:"false"},{option:"35 Percent",value:"false"},{option:"99 Percent",value:"true"}]],
[["Q5). If the Earth were made into a black hole, what would be the diameter of its event horizon?"],[{option:"1 Kilo Meter",value:"false"},{option:"500 Meter",value:"false"},{option:"2mm",value:"true"},{option:"No Horizen",value:"false"}]],
[["Q6). What is the furthest you can see with the naked eye?"],[{option:"3 Kilometers",value:"false"},{option:"2.5 million light-years",value:"true"},{option:"500 Kilo Meters",value:"false"},{option:"Infinite",value:"false"}]],
[["Q7). In Which year this quiz was made ?"],[{option:"2021",value:"false"},{option:"2024",value:"true"},{option:"2026",value:"false"},{option:"2004",value:"false"}]]
]





let right=0,wrong=0,marks=0;
let question_section=document.querySelector("h2")
let start_btn=document.querySelectorAll("#start")

let instructions=document.querySelector(".instructions")
let option_btn=document.querySelectorAll("button")
let questions=document.querySelector(".questions")
let nxt_btn=document.querySelector("#nxt_btn")
let result=document.querySelector(".result")


// \\when click on start
let a=0;
start.addEventListener("click",()=>{
instructions.style.display="none"
questions.style.display="flex"

question_section.innerHTML=arr[a][0]


for(let i=1;i<=4;i++){
    option_btn[i].innerHTML=arr[a][1][i-1].option;
   
}
})

//when click on options

for(let i=1;i<=4;i++){
    option_btn[i].addEventListener("click",()=>{
        if(arr[a][1][i-1].value=="false"){
            option_btn[i].style.backgroundColor="#DD5746"
            wrong++;
            nxt_btn.style.display="flex"
                for(let i=1;i<=4;i++){
                    option_btn[i].disabled=true
                    if(arr[a][1][i-1].value=="true"){
                        option_btn[i].style.backgroundColor="#8DECB4"
                        
                    }
        }
    }
        else{
            option_btn[i].style.backgroundColor="#8DECB4"
            right++
            nxt_btn.style.display="flex"
            for(let i=1;i<=4;i++){
                option_btn[i].disabled=true
            }
        }})

    }
    //clicking next button

    nxt_btn.addEventListener("click",()=>{
        a++;
        console.log(a)
        if(a>=7){
            questions.style.display="none"
           result.style.display="block"
           //result

           marks=right*4-wrong*2
           result.childNodes[3].innerHTML="Correct Answers = "+right
           result.childNodes[5].innerHTML="Wrong Answers = "+wrong
           result.childNodes[7].innerHTML="Marks = "+marks

            
        }
        question_section.innerHTML=arr[a][0]


for(let i=1;i<=4;i++){
    option_btn[i].innerHTML=arr[a][1][i-1].option;
   
}

for(let i=1;i<=4;i++){
    option_btn[i].disabled=false
    option_btn[i].style.backgroundColor="white"
    nxt_btn.style.display="none"
    
}


}


)


  

