import React, { useState } from 'react'
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export const WheatherApp = () => {
    const urlBase = "https://api.openweathermap.org/data/2.5/weather";
    const keyAPI = "c76e62bff7b5e739ab0358e70881a78c";
    const [ciudad, setCiudad] = useState('')
    const [fetchData, setFetchData] = useState(null)

    const handleCambioDeCiudad = (e) => {
        setCiudad(e.target.value  )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(ciudad.length > 0) fetchClima()
    }
    const fetchClima = async () => {
        try {
           const response = await fetch(`${urlBase}?q={${ciudad}}&appid={${keyAPI}}`)
           const data = await response.json()
           setFetchData(data)
           console.log(fetchData)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='container'>
        <h1>Aplicacion de Clima</h1>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={ciudad}
            onChange={handleCambioDeCiudad}  />
            <button type='submit'>Buscar</button>
        </form>
        {
            fetchData && (
                <div>
                    <h2>{fetchData.name}</h2>
                    <p>Temperatura: {parseInt(fetchData.main.temp) - 273.15}</p>
                </div>
            )
        }
    </div>
  )
}
