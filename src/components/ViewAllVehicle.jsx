import React, { useState } from 'react';

const ViewAllVehicle = () => {
  const [vehicleData, changedVehicleData] = useState([
    {
      vehicleName: "Swift",
      vehicleBrand: "Maruti Suzuki",
      fuel: "Petrol",
      regNo: "KL-63-M-7634",
      manufactureDate: "2018-04-10",
      price: "8,00,000",
    },
    {
      vehicleName: "Innova",
      vehicleBrand: "Toyota",
      fuel: "Petrol",
      regNo: "KL-63-H-1234",
      manufactureDate: "2023-04-10",
      price: "27,00,000",
    },
    {
      vehicleName: "Fortuner",
      vehicleBrand: "Toyota",
      fuel: "Petrol",
      regNo: "KL-07-H-6543",
      manufactureDate: "2024-04-10",
      price: "40,00,000",
    },
    {
      vehicleName: "Creta",
      vehicleBrand: "Hyundai",
      fuel: "Petrol",
      regNo: "KL-07-N-1234",
      manufactureDate: "2020-04-10",
      price: "14,00,000",
    },
  ]);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <table className="table table-bordered table-striped">
            <thead className="table-light">
              <tr>
                <th>Name</th>
                <th>Brand</th>
                <th>Fuel Type</th>
                <th>Registration No</th>
                <th>Manufacturing Date</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {vehicleData.map(
                (value, index) => (
                <tr key={index}>
                  <td>{value.vehicleName}</td>
                  <td>{value.vehicleBrand}</td>
                  <td>{value.fuel}</td>
                  <td>{value.regNo}</td>
                  <td>{value.manufactureDate}</td>
                  <td>{value.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewAllVehicle;
