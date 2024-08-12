let bac = document.querySelector(".back")
let cnopca = document.querySelector(".cnopca")
cnopca.addEventListener("click",function(){
bac.style = ("opacity: 1;")
});
cnopca.addEventListener("dblclick",function(){
    bac.style = ("opacity: -1;")
    });

    let delet = document.querySelector(".delet")
    let title = document.querySelector(".title")
    delet.addEventListener("click",function(){
        title.style = ("display: none;")
        delet.style = ("display: none;")
        });