import React, { useEffect, useState } from 'react'
import styles from './Select.module.css'
import { Vehicle } from '../../interfaces/interfaces'

function Select({data, setData}: {
  data: Vehicle[],
  setData: React.Dispatch<React.SetStateAction<Vehicle[]>>
}): JSX.Element {
  const [selectedSort, setSelectedSort] = useState<string>('price');

  useEffect(() => {
    sortVehicles(selectedSort)
  }, [selectedSort])

  function sortVehicles(selectedSort: string) {
    setData([...data].sort((a, b) => {
      if (selectedSort === 'price') {
        return a.price - b.price
      } else if (selectedSort === 'year') {
        return a.year - b.year
      }
      return 0
    }))
    console.log('was sorted')
  }

  function handleSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedSort(event.target.value)
  }

  return (
    <section className={styles.filters}>
      <select 
        className={styles.select} 
        value={selectedSort} 
        onChange={handleSelect}
      >
        <option className={styles.select__option} value="price">By price</option>
        <option value="year">By year</option>
      </select>
    </section>
  )
}


export default Select