function getApiBanxico(){(
    fetch(`/banxico/SP74665`)
        .then(response => response.json())
        .then(data => {
            console.log("Exito al consumir el API")
            // Procesar los datos recibidos del backend
        })
        .catch(error => {
            console.log("Error al consumir API")
            // Manejar errores
        })
)}
