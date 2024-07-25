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

let trendingArr=[
    "https://images.bewakoof.com/uploads/grid/app/trending-category-icons-OS-T-Shirts-1706511994.jpg",
    "https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350-Classic-Fit-T-Shirts-1707280970.jpg",
    "https://images.bewakoof.com/uploads/grid/app/unnamed--5--1706513552.jpg",
    "https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Joggers-men-1706512292.jpg",
    "https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Jeans-1704181405.jpg",
    "https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350-Co-ords-Men-1707280970.jpg",
    "https://images.bewakoof.com/uploads/grid/app/3rd-Jan-2024-Oversized-T--shirts-1704270296-1706511259.webp",
    "https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350--2--1706509179.jpg",
    "https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Casual-Pants-1706509180.jpg",
    "https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Joggers-1706509180.jpg",
    "https://images.bewakoof.com/uploads/grid/app/3rd-Jan-2024-Cargos-1704270812-1706511406.webp",
    "https://images.bewakoof.com/uploads/grid/app/3rd-Jan-2024-Dresses-1704270296-1706511533.webp"
]

let originalsArr=[
    "https://images.bewakoof.com/uploads/grid/app/HD-PC-Size-Banner-480x457-1707137667.jpg",
    "https://images.bewakoof.com/uploads/grid/app/American-PIMA-PC-Size-Banner-480x457-1707137667.jpg",
    "https://images.bewakoof.com/uploads/grid/app/1000070037-1707137668.jpg",
    "https://images.bewakoof.com/uploads/grid/app/HD-PC-Size-Banner-480x457-1707137667.jpg"
]

let missedArr=[
    "https://images.bewakoof.com/uploads/grid/app/DESKTOP-mid-size-midsize-onepiece-1710481448.jpg",
    "https://images.bewakoof.com/uploads/grid/app/DESKTOP-mid-size-breezyvests--1--1710481719.jpg",
    "https://images.bewakoof.com/uploads/grid/app/MidSize-DESKTOP-b1g1-common--1--1710481447.jpg",
    "https://images.bewakoof.com/uploads/grid/app/MidSize-DESKTOP-BF-women--1--1710481445.jpg"
]

let bagArr=[
    "https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Shirts-men--1706511997.jpg",
    "https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Cargos-men-1706511996.jpg",
    "https://images.bewakoof.com/uploads/grid/app/Pajamas-trending-category-icons-240x350-1706514429.jpg",
    "https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350-Co-ords-1707280972.jpg",
    "https://images.bewakoof.com/uploads/grid/app/Pajamas-trending-category-icons-240x350-women-1706514429.jpg",
    "https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Jeans-1706509182.jpg"
]

let accessoriesArr=[
    "https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350-Mobile-covers-1705054649.jpg",
    "https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350-Sliders-1705043484.jpg",
    "https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350-Backpacks-1705043482.jpg",
    "https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350-Caps-1705043483.jpg"
]

let bestPicksArr=[
    "https://images.bewakoof.com/uploads/grid/app/720x420-Midsize-bannner-Combos--1--1704012294.jpg",
    "https://images.bewakoof.com/uploads/grid/app/Official-Merch-store-Desktop-banner-1700470826-1701771559.webp",
    "https://images.bewakoof.com/uploads/grid/app/Customise-Desktop-midsize-banner-1704439012.jpg",
    "https://images.bewakoof.com/uploads/grid/app/Sizes-6xl-Plus-Size-Desktop-midsize-Banner-1706690349.jpg"
]

let showFunc = (data,place) =>{
    let accessoriesDiv=document.getElementById(place)
    data.forEach((ele) => {
        let div=document.createElement("div");
        let image=document.createElement("img");
        image.src=ele;
        div.append(image)
        accessoriesDiv.append(div)
    })
}

// --------------------------------------------------------------------------------------------

let serviceArr=[
    "https://images.bewakoof.com/uploads/grid/app/category-icon-Desktop-common--1--1706616684.gif",
    "https://images.bewakoof.com/uploads/grid/app/category-icon-Desktop-New-Arrivals-1706616683.jpg",
    "https://images.bewakoof.com/uploads/grid/app/category-icon-for-Desktop---1--1697613231.jpg",
    "https://images.bewakoof.com/uploads/grid/app/category-icon-Desktop--1706616685.jpg",
    "https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Customization--1--1693212866.jpg",
    "https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Combos-1693212865.gif",
    "https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Vote-1693212866.jpg",
    "https://images.bewakoof.com/uploads/grid/app/last-size-new-thumbnaik-1668508337.jpg"
]
let serviceNameArr=[
    "Best Sellers","New Arrivals","Official Collaborations","Plus Size",
    "Customization","Combos","Vote For Designs","Last Sizes Left"
]

let service = () =>{
    let servicesDiv=document.getElementById("services")
    let serviceDiv=document.createElement("div")
    serviceDiv.setAttribute("id","service")
    serviceArr.forEach((ele,i) => {
        let div=document.createElement("div");
        let image=document.createElement("img");
        let name=document.createElement("a");
        name.innerText=serviceNameArr[i]
        image.src=ele;
        div.append(image,name)
        serviceDiv.append(div)
        servicesDiv.append(serviceDiv)
    })
}
service()

// --------------------------------------------------------------------------------------------

showFunc(trendingArr,"trending")

showFunc(missedArr,"missed-section")

showFunc(bagArr,"bag-section")

showFunc(accessoriesArr,"accessories")

showFunc(bestPicksArr,"best-picks")

let bestSellerArr=[
    "https://images.bewakoof.com/t320/women-s-brown-straight-cargo-pants-620020-1708328904-1.jpg",
    "https://images.bewakoof.com/t320/women-aop-oversize-t-shirt-3-580366-1682421809-1.JPG",
    "https://images.bewakoof.com/t320/women-s-straight-cargo-pants-13-620015-1702644202-1.jpg",
    "https://images.bewakoof.com/t320/women-s-pink-white-camo-printed-oversized-t-shirt-580369-1686301190-1.jpg",
    "https://images.bewakoof.com/t320/women-s-white-oversized-t-shirt-584434-1684230405-1.jpg",
    "https://images.bewakoof.com/t320/women-s-blue-round-in-bugs-graphic-printed-oversized-short-top-589789-1707221362-1.jpg",
    "https://images.bewakoof.com/t320/men-s-black-eternity-graphic-printed-t-shirt-596133-1706598517-1.jpg",
    "https://images.bewakoof.com/t320/men-s-black-t-shirt-106-1665669034-5.jpg",
    "https://images.bewakoof.com/t320/men-s-grey-eternity-graphic-printed-oversized-t-shirt-596129-1708957243-1.jpg",
    "https://images.bewakoof.com/t320/men-s-white-t-shirt-105-1702967985-1.jpg",
    "https://images.bewakoof.com/t320/women-white-printed-top-26-582038-1689082446-1.jpg",
    "https://images.bewakoof.com/t320/women-s-black-power-puff-girls-graphic-printed-oversized-short-top-608723-1709034134-1.jpg"
]

function bestSeller(){
    let bestSellerdiv = document.getElementById("best-seller");
    bestSellerArr.forEach(function(ele){
        let productdiv=document.createElement("div");
        productdiv.setAttribute("id","product")
        let prodImage=document.createElement("img");
        prodImage.src=ele;
        let brand=document.createElement("span")
        brand.setAttribute("id","dis")

        let h5=document.createElement("h5")
        h5.innerText="Bewakoof"

        let fav=document.createElement("span")
        fav.innerText="favorite"
        fav.setAttribute("class","material-symbols-outlined")
        fav.style.color="#838181"
        brand.append(h5,fav);

        let p=document.createElement("p")
        p.innerText="Women pink & white camo"

        let span1=document.createElement("span")
        span1.setAttribute("id","p")
        span1.innerText=` 599`
        let span2=document.createElement("span")
        span2.setAttribute("id","l")
        span2.innerText="999"
        let span3=document.createElement("span")
        span3.setAttribute("id","g")
        span3.innerText="50% OFF"

        productdiv.append(prodImage,brand,p,span1,span2,span3)
        bestSellerdiv.append(productdiv)
    })
}

// bestSeller()

function swiper(class1,class2,position){
    const carousel = document.querySelector(class1);
firstImg = carousel.querySelectorAll("img")[0]
let isDragStart=false , prevPageX , prevScrollLeft;

let arrowIcon = document.querySelectorAll(class2);
let firstImgWidth = firstImg.clientWidth + 14

arrowIcon.forEach(function(ele){
    ele.addEventListener("click",()=>{
        carousel.scrollLeft += ele.id ==(position) ? -firstImgWidth : firstImgWidth
    })
})

const dragStart = (e) =>{
    isDragStart=true;
    prevPageX=e.pageX;
    prevScrollLeft=carousel.scrollLeft
}

const dragging = (e) =>{
    if(!isDragStart) return;
    e.preventDefault()
    carousel.classList.add("dragging")
    let positionDiff = e.pageX - prevPageX
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}
const dragStop = () =>{
    isDragStart=false;
    carousel.classList.remove("dragging")
}

carousel.addEventListener("mousedown",dragStart)
carousel.addEventListener("mousemove",dragging)
carousel.addEventListener("mouseup",dragStop)
}

setInterval(function(){},2000)
swiper(".carousel",".wrapper span","left")
swiper(".carousel1",".wrapper1 span","forward")
swiper(".carousel2",".wrapper2 span","ahead")

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



