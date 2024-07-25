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

function myfunc(){
    window.location.href="index.html"
}

let logo =document.getElementById("logo")
logo.addEventListener("click",myfunc)

let logo1 =document.getElementById("rnav-logo")
logo1.addEventListener("click",myfunc)

let checkLoginFlag = JSON.parse(localStorage.getItem("loginFlag"));

if(checkLoginFlag == true){
    document.getElementById("loginLogo").innerText="person";
    document.getElementById("login-btn").innerText="logout";
}
else{
    document.getElementById("loginLogo").innerText="";
    document.getElementById("login-btn").innerText="login";
}
let loginFlag = false;
let loginBtn =document.getElementById("login-btn");
loginBtn.addEventListener("click",()=>{
    if(loginBtn.innerText=="login"){
        window.location.href="login.html"
    }
    else{
        alert("✔️ You have been Logged out succsessfully ✔️")
        loginBtn.innerText="login";
        document.getElementById("loginLogo").innerText="";
        localStorage.setItem("loginFlag",JSON.stringify(loginFlag));
    }
})

let query = JSON.parse(localStorage.getItem("query"))||"";

let prodSearch = document.getElementById("search");
prodSearch.addEventListener("keydown",(event)=>{
    if(event.key == "Enter"){
        localStorage.setItem("query",JSON.stringify(prodSearch.value));
        window.location.href="product.html"
    }
})

let err;
let getData = async () =>{
    let res = await fetch(`https://fakestoreapi.com/products/category/${query}`)
    let data = await res.json();
    return data;
}
let showData = async () =>{
    let data = await getData()
    console.log(data);
    data.forEach((ele)=>{
        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = ele.image;

        let p1 = document.createElement("p");
        p1.innerText="Bewakoof";
        p1.setAttribute("id","complog")

        let p2 = document.createElement("p");
        p2.innerText=ele.title;
        p2.setAttribute("id","desc")
        let div1 = document.createElement("div")
        div1.setAttribute("id","price-div")

        let p3 = document.createElement("P");
        let number = (Math.random())*596
        Math.floor(number)
        p3.innerText =`₹${Math.floor(number)}` 
        console.log(p3);
        p3.setAttribute("id","price")

        let span = document.createElement("span");
        span.innerText=`₹${(Math.floor(number))+(Math.floor(number))}` ;
        span.setAttribute("id","prevPrice")

        div1.append(p3,span)

        div.append(image,p1,p2,div1)
        document.getElementById("container").append(div)
    })
}
showData()

