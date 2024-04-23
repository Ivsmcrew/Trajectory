export interface Vehicle{
  id: number,
  name: string,
  model: string,
  price: number,
  year: number,
  color: string,
  latitude: number,
  longitude: number
}

export interface VehicleCardProps{
  veh: Vehicle,
  data: Vehicle[], 
  setData: Function
}