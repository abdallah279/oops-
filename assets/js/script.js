
const boxInfo = document.querySelector(".box-info");

document.querySelector("#user").onclick = ()=>{
    boxInfo.classList.toggle("active");
}

window.onscroll = ()=>{
    boxInfo.classList.remove("active");
}

document.addEventListener('click', (e) =>{
    if(e.target.id !== "user"){
        boxInfo.classList.remove("active")
    }
})