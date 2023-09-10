var search = document.getElementById("lupascr")
var tipocursos = document.getElementById("tipocursos")

search.addEventListener("click", (event)=>{
    if(tipocursos.style.display === "block"){
        tipocursos.style.display = "none"
    }
    else{
        tipocursos.style.display = "block"
    }
})

console.log(innerWidth)

setInterval((att)=>{
    if(innerWidth < 1010){tipocursos.style.display = "none"}
    
}, 100)
