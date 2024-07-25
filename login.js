let contentArr=[
    "Printed T-Shirts","Oversized T-shirts","Classic Fit T-shirts","Plain T-Shirts","Half Sleeve T-Shirts",
    "Full Sleeve T-Shirts","Polo T-Shirts","Vests","Shirts","Co-ord Sets","Kurtas","Plus Size Topwear",
    "Customize T-shirts","T-shirt Combos","Sweatshirts & Hoodies","Jackets","Sweaters"
]

function hiddenContent(place){
    let mainDiv=document.getElementById(place)
    contentArr.forEach(function(ele){
        let p=document.createElement("P");
        p.innerText=ele
        mainDiv.append(p)
    })
}
hiddenContent("main-div1")
hiddenContent("main-div2")
hiddenContent("main-div3")
hiddenContent("main-div4")
hiddenContent("main-div5")
hiddenContent("main-div6")
hiddenContent("main-div7")
hiddenContent("main-div8")
hiddenContent("main-div9")

let specialContentArr=[
    "https://images.bewakoof.com/nav_menu/Circle-Nav-168x168-One-Piece-1710143641.png",
    "https://images.bewakoof.com/nav_menu/Summerpalooza-circleicon-168x168--1--1708961743.png",
    "https://images.bewakoof.com/nav_menu/Circle-Nav-168x168-COTM-1704012730.png",
    "https://images.bewakoof.com/nav_menu/DisneyVillains-168x168-1702822672.png",
    "https://images.bewakoof.com/nav_menu/circle-168x168-IK-1699605086.png",
    "https://images.bewakoof.com/nav_menu/NewBottomNav-RM-336x336-1701505415.png",
    "https://images.bewakoof.com/nav_menu/MayCOTM-office-168x168-HarryPotter-1701350799.png",
    "https://images.bewakoof.com/nav_menu/Circle-cotm--168x168-1698769567.png"
]
let specialContentNameArr=[
    "BWKF X one piece","Bewakoof's Summer palooza","Bwkf X FRIENDS","Disney villans","Bwkf X Ishan khattar","Bwkf X Rashmika Mandana",
    "Bwkf X Harry Potter","Bwkf X Mikey Mouse"
]
function specialContent(place){
    let mainDiv=document.getElementById(place)
    specialContentArr.forEach(function(ele,i){
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=ele;
        let a=document.createElement("a");
        a.innerText=specialContentNameArr[i]
        div.append(img,a)
        mainDiv.append(div)
    })
}
specialContent("specials1")
specialContent("specials2")
specialContent("specials3")

let logo =document.getElementById("logo")
logo.addEventListener("click",myfunc)

function myfunc(){
    window.location.href="index.html"
}


let continueBtn = document.getElementById("continue");
let objnumber=JSON.parse(localStorage.getItem("number"))||"";
let myfun = () =>{
    let num = document.querySelector("#mobile>input");
    let mob = document.getElementById("mobile");
    let xxx = document.getElementById("xxx");
    let number = num.value;

    if((number=="")||(number.length!=10)){
        mob.style.border="1px solid red";
        xxx.innerText="Mobile number is required";
        xxx.style.color="red";
    }else{
        localStorage.setItem("number",JSON.stringify(number))
        window.location.href="signup.html";
    }
}

continueBtn.addEventListener("click",myfun);

let query = JSON.parse(localStorage.getItem("query"))||"";

let prodSearch = document.getElementById("search");
prodSearch.addEventListener("keydown",(event)=>{
    if(event.key == "Enter"){
        localStorage.setItem("query",JSON.stringify(prodSearch.value));
        window.location.href="product.html"
    }
})

