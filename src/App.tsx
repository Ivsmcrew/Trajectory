import React, { useEffect, useState } from 'react';
import styles from './styles/App.module.css'
import { useFetching } from './hooks/useFetch';
import VehiclesAPI from './API/vehicles';
import VehicleList from './components/VehicleList/VehicleList';

function App() {
  const [data, setData] = useState([]);
  let [fetching, isLoading, error] = useFetching(() => {
    VehiclesAPI.getVehicles()
      .then(data => setData(data))
  });
  
  useEffect(() => {
    fetching()
  }, [])

  return (
    <div className={styles.App}>
      {isLoading ? 
        <div>{'Загрузка...' }</div> : 

        error ? 
        <div>{`Произошла ошибка: ${error.message}`}</div> :

        <VehicleList data={data} setData={setData} />
      }
    </div>
  );
}

export default App;
