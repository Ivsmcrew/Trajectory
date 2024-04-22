import React, { useState, useEffect } from 'react'
import VehicleCard from '../VehicleCard/VehicleCard'
import Select from '../Select/Select'

function VehicleList({data, setData}) {
  return (
    <div>
      <Select data={data} setData={setData} />

      {data.map((vehicle) => {
        return (
          <VehicleCard 
            key={vehicle.id} 
            veh={vehicle} 
            data={data} 
            setData={setData}
          />
        )
      })}
    </div>
  )
}

export default VehicleList