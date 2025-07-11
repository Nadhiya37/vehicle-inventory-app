import React from 'react';
import { VehicleNavbar } from './VehicleNavbar';

const ViewAllVehicle = () => {
  return (
     <div>
      <VehicleNavbar/>
    <div className="container">
      <div className="row">
      <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
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
              <tr>
                <td>Swift</td>
                <td>Maruti Suzuki</td>
                <td>Petrol</td>
                <td>KL-63-M-7634</td>
                <td>2018-04-10</td>
                <td>8,00,000</td>
              </tr>
              <tr>
                <td>Innova</td>
                <td>Toyota</td>
                <td>Petrol</td>
                <td>KL-63-H-1234</td>
                <td>2023-04-10</td>
                <td>27,00,000</td>
              </tr>
              <tr>
                <td>Fortuner</td>
                <td>Toyota</td>
                <td>Petrol</td>
                <td>KL-07-H-6543</td>
                <td>2024-04-10</td>
                <td>40,00,000</td>
              </tr>
              <tr>
                <td>Creta</td>
                <td>Hyundai</td>
                <td>Petrol</td>
                <td>KL-07-N-1234</td>
                <td>2020-04-10</td>
                <td>14,00,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default ViewAllVehicle;
