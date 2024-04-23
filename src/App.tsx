import React, { useEffect, useState } from 'react';
import styles from './styles/App.module.css'
import { useFetching } from './hooks/useFetch';
import VehiclesAPI from './API/vehicles';
import VehicleList from './components/VehicleList/VehicleList';
import Select from './components/Select/Select';
import VehicleCard from './components/VehicleCard/VehicleCard';
import { YMaps } from '@pbe/react-yandex-maps';
import { Vehicle } from './interfaces/interfaces';


function App(): JSX.Element {
  const [data, setData]: [Vehicle[], React.Dispatch<React.SetStateAction<Vehicle[]>>] = useState<Vehicle[]>([]);
  const [fetching, isLoading, error] = useFetching(() => {
    return VehiclesAPI.getVehicles().then((data: Vehicle[]) => setData(data))
  });
  
  useEffect(() => {
    fetching();
  }, []);

  return (
    <YMaps>
      <main className={styles.App}>
        {isLoading ? 
          <div>{'Загрузка...' }</div> : 

          error ? 
          <div>{`Произошла ошибка: ${error}`}</div> :

          <VehicleList>
            <Select data={data} setData={setData} />

            <section  className={styles.vehicles}>
              {data.map((vehicle: Vehicle) => (
                <VehicleCard 
                  key={vehicle.id} 
                  veh={vehicle} 
                  data={data} 
                  setData={setData}
                />
              ))}
            </section>
          </VehicleList>
        }
      </main>
    </YMaps>
  );
}

export default App;
