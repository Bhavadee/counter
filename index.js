/* Place your JavaScript in this file */
let count = 0
const view = document.querySelector("#count")
function increment()
{
    count = count + 1
    view.innerText = count
    settColor();
}

function decrement()
{
    count = count - 1
    view.innerText = count
    settColor();
}
function reset()
{
    count = 0
    view.innerText = count
    settColor();
}

function settColor(){
    if(count>0){
        view.style.color="green";
    }
    else if(count<0){
        view.style.color = "red";
    }
    else{
        view.style.color = "black";
    }
}
