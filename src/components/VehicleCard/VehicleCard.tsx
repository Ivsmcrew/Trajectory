import React, { useState } from 'react'

function VehicleCard({veh, data, setData}) {
  const [vehicle, setVehicle] = useState(veh)

  function updateData(event) {
    event.preventDefault()
    let tempArr = [...data];
    tempArr.splice(data.indexOf(veh), 1, vehicle)
    setData(tempArr)
  }
  
  function deleteData(event) {
    event.preventDefault()
    let tempArr = [...data];
    tempArr.splice(data.indexOf(veh), 1)
    setData(tempArr)
  }

  function inputHandler(event, type) {
    setVehicle({...vehicle, [type]: event.target.value})
  }

  return (
    <div>
      <form>
        <input value={vehicle.name} type="text" name="name" onChange={ () => inputHandler(event, 'name') } />
        <input value={vehicle.model} type="text" name="model" onChange={ () => inputHandler(event, 'model') } />
        <input value={vehicle.year} type="text" name="year" onChange={ () => inputHandler(event, 'year') } />
        <input value={vehicle.color} type="text" name="color" onChange={ () => inputHandler(event, 'color') } />
        <input value={vehicle.price} type="text" name="price" onChange={ () => inputHandler(event, 'price') } />
        <button onClick={() => updateData(event)}>Сохранить</button>
        <button onClick={() => deleteData(event)}>Удалить</button>
      </form>
    </div>
  )
}

export default VehicleCard