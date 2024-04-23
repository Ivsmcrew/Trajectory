import React, { useState } from 'react'
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import styles from './VehicleCard.module.css'
import { Vehicle, VehicleCardProps } from '../../interfaces/interfaces';

export function VehicleCard({veh, data, setData}: VehicleCardProps): JSX.Element {
  const [vehicle, setVehicle] = useState<Vehicle>(veh)

  function updateData(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    event.preventDefault()
    let tempArr = [...data];
    tempArr.splice(data.indexOf(veh), 1, vehicle)
    setData(tempArr)
  }
  
  function deleteData(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    event.preventDefault()
    let tempArr = [...data];
    tempArr.splice(data.indexOf(veh), 1)
    setData(tempArr)
  }

  function inputHandler(event: React.ChangeEvent<HTMLInputElement>, type: keyof Vehicle): void {
    setVehicle({...vehicle, [type]: event.target.value})
  }

  return (
    <div className={styles.card}>
      <Map 
        style={{width: "280px", height: "280px"}}
        defaultState={{ 
          center: [vehicle.latitude, vehicle.longitude], 
          zoom: 11, controls: ["zoomControl", "fullscreenControl"]
        }}
        modules={["control.ZoomControl", "control.FullscreenControl"]}
      >
        <Placemark defaultGeometry={[vehicle.latitude, vehicle.longitude]} />
      </Map>
      <form className={styles.form}>
        <input value={vehicle.name} type="text" name="name" onChange={ (event) => inputHandler(event, 'name') } />
        <input value={vehicle.model} type="text" name="model" onChange={ (event) => inputHandler(event, 'model') } />
        <input value={vehicle.year} type="text" name="year" onChange={ (event) => inputHandler(event, 'year') } />
        <input value={vehicle.color} type="text" name="color" onChange={ (event) => inputHandler(event, 'color') } />
        <input value={vehicle.price} type="text" name="price" onChange={ (event) => inputHandler(event, 'price') } />
        <button onClick={(event) => updateData(event)}>Сохранить</button>
        <button onClick={(event) => deleteData(event)}>Удалить</button>
      </form>
    </div>
  )
}

export default VehicleCard