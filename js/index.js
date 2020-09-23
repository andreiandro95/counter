// counter
let addCount = document.getElementsByClassName("btn-up")[0]
let countDisplay = document.getElementsByClassName("countNumber")[0]
let downCount = document.getElementsByClassName("btn-down")[0]
let count = 0;

addCount.addEventListener("click", function(){
    count++;
    countDisplay.textContent = count
    if(count < 0){
        countDisplay.style.color = "red"
    }else if(count > 0){
        countDisplay.style.color = "green"
    }else{
        countDisplay.style.color = "#333333"
    }
})

downCount.addEventListener('click', function(){
    count--;
    countDisplay.textContent = count
    if(count < 0){
        countDisplay.style.color = "red"
    }else if(count > 0){
        countDisplay.style.color = "green"
    }else{
        countDisplay.style.color = "#333333"
    }
})