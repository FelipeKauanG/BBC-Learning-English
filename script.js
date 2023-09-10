var search = document.getElementById("lupascr")
var tipocursos = document.getElementById("tipocursos")
var unidade = document.getElementById("botoes")

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

unidade.addEventListener("click", (unidade)=>{
    var unidades = document.getElementById("botoesabas")

    if(unidades.style.display === "block"){
        unidades.style.display = "none"
    }else{
        unidades.style.display = "block"
    }
})