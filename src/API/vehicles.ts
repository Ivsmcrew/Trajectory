class VehiclesAPI {
  static vehiclesCDN = 'https://test.tspb.su/test-task/vehicles';

  static async getVehicles() {
    const response = await fetch(this.vehiclesCDN);
    const data = await response.json();
    return data; 
  }
}

export default VehiclesAPI