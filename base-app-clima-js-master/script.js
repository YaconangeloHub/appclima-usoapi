let api_key = 'ffdb5024f86aa9fad6130e83e7af9c33'
let difKelvin = 273.15
let urlBase = 'https://api.openweathermap.org/data/2.5/weather'


document.getElementById('botonBusqueda').addEventListener('click', () =>{
    const ciudad = document.getElementById('ciudadEntrada').value
    if(ciudad){
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))
}

function mostrarDatosClima(data){
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = ''
    const ciudadNombre = data.name
    const paisNombre = data.sys.country
    const tempNombre = data.main.temp
    const humedadNombre = data.main.humidity
    const descripcion = data.weather[0].description
    const icono = data.weather[0].icon

    const ciudadInfo = document.createElement('h2')
    ciudadInfo.textContent = `${ciudadNombre},${paisNombre}`

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(tempNombre - difKelvin)}ºC`

    const humedadInfo = document.createElement('p')
    humedadInfo.textContent = `La humedad es: ${humedadNombre}%`

    const iconoInfo = document.createElement('img')
    iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`
    
    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `La descripcion meteorologica es: ${descripcion}`

    divDatosClima.appendChild(ciudadInfo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(humedadInfo)
    divDatosClima.appendChild(descripcionInfo)
    divDatosClima.appendChild(iconoInfo)
}
