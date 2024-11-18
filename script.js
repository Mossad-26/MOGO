// function clickHer(){
//     var tabBar= document.getElementById("child-2-p-tab-bar");
//     var parentTabBar= document.getElementById("parent-bar-1");
//     var i= document.getElementById("arrow");
    // var num=1;
//     if(tabBar.offsetHeight>65 || parentTabBar >200 ){
//             i.style.transform = "rotate(180deg)";
//             i.style.marginTop="10px";
//             tabBar.style.height = "0px";
//             parentTabBar.style.height = "50px";
            
//     }
//     else{
//         i.style.transform = "rotate(0deg)";
//         tabBar.style.height = "150px";
//         i.style.marginTop="10px";
//         parentTabBar.style.height = "220px";
//     }
// }
// function clickTo(){
//     var tabBar2= document.getElementById("child-2-p-tab-bar");
//     var parentTabBar2= document.getElementById("parent-bar-2");
    // var i= document.getElementById("arrow");
    // var num=1;
    // if(tabBar2.offsetHeight>65 || parentTabBar2 >200 ){
            // i.style.transform = "rotate(180deg)";
            // i.style.marginTop="10px";
    //         tabBar2.style.height = "0px";
    //         parentTabBar2.style.height = "50px";
    //         parentTabBar2.style.height = "50px";
    // }
    // else{
        // i.style.transform = "rotate(0deg)";
        // tabBar2.style.height = "150px";
        // i.style.marginTop="10px";
//         parentTabBar2.style.height = "220px";
//     }
// }
// function clickOn(){
//     var tabBar3= document.getElementById("child-3-p-tab-bar");
//     var parentTabBar3= document.getElementById("parent-bar-3");
//     var i= document.getElementById("arrow");
    // var num=1;
//     if(tabBar3.offsetHeight>65 || parentTabBar3 >200 ){
//             i.style.transform = "rotate(180deg)";
//             i.style.marginTop="10px";
//             tabBar3.style.height = "0px";
//             parentTabBar3.style.height = "50px";
//     }
//     else{
//         i.style.transform = "rotate(0deg)";
//         tabBar3.style.height = "150px";
//         i.style.marginTop="10px";
//         parentTabBar3.style.height = "220px";
//     }
// }


let firstcolapseArrow = document.getElementById("arrow");
let firstcolapseDiv = document.querySelector(`.${"child-1-tab-bar"}`);
firstcolapseArrow.style.transform = "rotate(180deg)";
firstcolapseDiv.style.height = "220px";

// let firstcolapseArrow = document.getElementById("arrow");
// let firstcolapseDiv = document.querySelector(`.${"child-1-tab-bar"}`);
// firstcolapseArrow.style.transform = "rotate(180deg)";
// firstcolapseDiv.style.height = "220px";


let secondcolapseArrow = document.getElementById("arrow-2");
let secondcolapseDiv = document.querySelector(`.${"child-2-2-tab-bar"}`);

let thirdcolapseArrow = document.getElementById("arrow-3");
let thirdcolapseDiv = document.querySelector(`.${"child-3-tab-bar"}`);

function s5_Scroll(elemDIV, elemID) {
let elemI = document.getElementById(elemID);
let elemD = document.querySelector(`.${elemDIV}`);
if (elemD.offsetHeight < 65) {
    elemI.style.transform = "rotate(180deg)";
    elemD.style.height = "200px";
} else {
    elemI.style.transform = "rotate(0deg)";
    elemD.style.height = "60px";
}
if (elemI == firstcolapseArrow) {
    secondcolapseArrow.style.transform = "rotate(0deg)";
    secondcolapseDiv.style.height = "50px";

    thirdcolapseArrow.style.transform = "rotate(0deg)";
    thirdcolapseDiv.style.height = "50px";
}
if (elemI == secondcolapseArrow) {
    firstcolapseArrow.style.transform = "rotate(0deg)";
    firstcolapseDiv.style.height = "50px";

    thirdcolapseArrow.style.transform = "rotate(0deg)";
    thirdcolapseDiv.style.height = "50px";
}
if (elemI == thirdcolapseArrow) {
    secondcolapseArrow.style.transform = "rotate(0deg)";
    secondcolapseDiv.style.height = "50px";

    firstcolapseArrow.style.transform = "rotate(0deg)";
    firstcolapseDiv.style.height = "50px";
}
}
let curr = document.getElementById("s5_curr");
let prev = document.getElementById("s5_prev");
let next = document.getElementById("s5_next");
let staticCurr;

function forward() {
curr.style.display = "none";
next.style.display = "flex";
staticCurr = curr;
curr = next;
next = prev;
prev = staticCurr;
}

function back() {
curr.style.display = "none";
prev.style.display = "flex";
staticCurr = curr;
curr = prev;
prev = next;
next = staticCurr;
}

let curr2 = document.getElementById("s5_curr2");
let prev2 = document.getElementById("s5_prev2");
let next2 = document.getElementById("s5_next2");
let staticCurr2;

function forward2() {
curr2.style.display = "none";
next2.style.display = "flex";
staticCurr2 = curr2;
curr2 = next2;
next2 = prev2;
prev2 = staticCurr2;
}

function back2() {
curr2.style.display = "none";
prev2.style.display = "flex";
staticCurr2 = curr2;
curr2 = prev2;
prev2 = next2;
next2 = staticCurr2;
}
let headr = document.getElementById("s1_Header");
window.addEventListener("scroll", function () {
if (window.scrollY > 20) {
    headr.style.backgroundColor = "#000000d7";
    headr.style.color = "#f05353b0";
}
if (window.scrollY < 20) {
    headr.style.backgroundColor = "transparent";
    headr.style.color = "#000";
}
});
let Arrow = document.getElementById("Arrow");
// window.onscroll = function () {
//   if (scrollY > 150) {
//     Arrow.style.display = "";
//   } else {
//     Arrow.style.display = "none";
//   }
// };


let section2 = document.querySelector(`.section2`);
let section3 = document.querySelector(`.section3`);
let section4 = document.querySelector(`.section4`);
let section5 = document.querySelector(`.section5`);
let section6 = document.getElementById("section6");
let section7 = document.querySelector(`.section7`);
let section8 = document.querySelector(`.section8`);
let section9 = document.querySelector(`.section9`);
let section10 = document.querySelector(`.section10`);
let section11 = document.querySelector(`.section11`);

window.onscroll = function () {
if (scrollY > 150) {
    Arrow.style.display = "block";
} else {
    Arrow.style.display = "none";
}
if (scrollY > 233 && scrollY < 1431) {
    section2.style.opacity = "1";
} else {
    section2.style.opacity = "0";
}
if (scrollY > 896 && scrollY < 1986) {
    section3.style.opacity = "1";
} else {
    section3.style.opacity = "0";
}
if (scrollY > 1583 && scrollY < 2811) {
    section4.style.opacity = "1";
} else {
    section4.style.opacity = "0";
}
if (scrollY > 2318 && scrollY < 3617) {
    section5.style.opacity = "1";
} else {
    section5.style.opacity = "0";
}
if (scrollY > 3177 && scrollY < 4535) {
    section6.style.opacity = "1";
} else {
    section6.style.opacity = "0";
}
if (scrollY > 4101 && scrollY < 5910) {
    section7.style.opacity = "1";
} else {
    section7.style.opacity = "0";
}
if (scrollY > 5496 && scrollY < 6632) {
    section8.style.opacity = "1";
} else {
    section8.style.opacity = "0";
}
if (scrollY > 6144 && scrollY < 7239) {
    section9.style.opacity = "1";
} else {
    section9.style.opacity = "0";
}
if (scrollY > 6791 && scrollY < 7509) {
    section10.style.opacity = "1";
} else {
    section10.style.opacity = "0";
}
if (scrollY > 7039 && scrollY < 8055) {
    section11.style.opacity = "1";
} else {
    section11.style.opacity = "0";
}
};
Arrow.onclick = function () {
scroll({
    left: 0,
    top: 0,
    behavior: "smooth",
});
};

