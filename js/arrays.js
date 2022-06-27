function listarPaises() {
    console.clear()
    console.table(paises)
}


function agregarPais() { 
    let nuevoPais = prompt("Ingresa un nuevo país:")
        paises.push(nuevoPais)
        listarPaises()
}

function quitarPais() {
    let paisAquitar = prompt("Ingresa el país a quitar;")
    let indice = paises.indexOf(paisAquitar)
    let resultado = paises.splice(indice, 1)
        alert("Se ha eliminado el país: " + resultado)
        listarPaises()
}

function buscarPais() {
    
    let paisAbuscar = prompt("Ingresa el país a buscar:")
    let resultado = paises.includes(paisAbuscar)
        if (resultado) {
            console.log("El país se encuentra cargado.")
        } else {
            console.warn("No se encontró el país:", paisAbuscar)
        }
}