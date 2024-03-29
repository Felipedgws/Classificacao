function ir(){
    window.location = "agradece.html"
}

function arm1(nota){
    localStorage.setItem('nota', nota)
}

function res(){
    var res = document.getElementById('res')
    res.innerHTML = `Sua nota foi: ${localStorage.getItem("nota")}`
}
