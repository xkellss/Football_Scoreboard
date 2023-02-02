
let s1 =0
let s2 =0;
let score1 =document.getElementById("score-1")
let score2 =document.getElementById("score-2")

let td1= document.getElementById("td-1")
let td2= document.getElementById("td-2")


function reset(){
     s1 =0;
     s2 =0;
    score1.textContent = s1
    score2.textContent = s2
}
function one(){
    s1 += 1
    score1.textContent =s1

}
function one2(){
    s2 += 1
    score2.textContent =s2
}
function three(){
    s1 += 3
    score1.textContent =s1

}
function three2(){
    s2 += 3
    score2.textContent =s2
}
function six() {
    s1 += 6
    score1.textContent = s1
    td1.textContent = "TOUCHDOWN!"
    setTimeout(function () {
        td1.textContent = "";
    }, 2000);
}
function six2() {
    s2 += 6
    score2.textContent = s2
    td2.textContent = "TOUCHDOWN!"
    setTimeout(function () {
        td2.textContent = "";
    }, 2000);
}


