import React, { useState, useEffect } from 'react'
import VehicleCard from '../VehicleCard/VehicleCard'

function VehicleList({data, setData}) {
  const [selectedSort, setSelectedSort] = useState('price');

  useEffect(() => {
    sortVehicles(selectedSort)
  }, [selectedSort])

  function sortVehicles(selectedSort) {
    setData([...data].sort((a, b) => {
      if (selectedSort === 'price') {
        return a.price - b.price
      } else if (selectedSort === 'year') {
        return a.year - b.year
      }
    }))
    console.log('was sorted')
  }

  function handleSelect(event) {
    setSelectedSort(event.target.value)
  }

  return (
    <div>
      <div>
        <select value={selectedSort} onChange={() => handleSelect(event)}>
          <option value="price">By price</option>
          <option value="year">By year</option>
        </select>
      </div>

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