function getData() {
    const resultDiv = document.getElementById('result');
    const idSerie = "SP74665";

    fetch(`http://localhost:5000/banxico/${idSerie}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        resultDiv.textContent = JSON.stringify(data); // Mostrar los datos en el div
    })
    .catch(error => {
        console.error('Error al obtener datos:', error);
    });
}


