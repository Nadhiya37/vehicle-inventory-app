import React from 'react'
import { Link } from 'react-router-dom'

export const VehicleNavbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Vehicle Inventory-App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Add Vehicles</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/search">Search Vehicles</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/delete">Delete Vehicles</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/view">View Vehicles</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
