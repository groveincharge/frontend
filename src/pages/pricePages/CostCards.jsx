import React from 'react'
import commentpicture from "./../../projectimages/interiorCar2.JPG";
import { Link } from 'react-router-dom';

function CostCards() {


  return (
    <div className="card-group">

  <div className="card">
    <img className="card-img-top" src={commentpicture} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Cars</h5>
      <Link to="./InteriorDetail">Interior Detail</Link>
      <Link to="./ExteriorDetail">Exterior Detail</Link>
      <p className="card-text">
        This car was detailed by Grovers Detailing Service. Revived
        and ready for the road. 
      </p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>

  <div className="card">
    <img className="card-img-top" src={commentpicture} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Trucks</h5>
      <Link to="./InteriorDetail">Interior Detail</Link>
      <Link to="./ExteriorDetail">Exterior Detail</Link>
      <p className="card-text">
        Trucks look soo pretty after a good detail job. This Truck
        was detail by Grovers Detailing Service. we were happy with the result.
        </p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>

  <div className="card">
    <img className="card-img-top" src={commentpicture} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Vans</h5>
      <Link to="./InteriorDetail">Interior Detail</Link>
      <Link to="./ExteriorDetail">Exterior Detail</Link>
      <p className="card-text">
        most van jobs come with a commercial account. Private owners
        may not be too concerned about having a clean van, but commercail
        owners do.
       </p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  
  <div className="card">
    <img className="card-img-top" src={commentpicture} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Mini-Vans</h5>
      <Link to="./InteriorDetail">Interior Detail</Link>
      <Link to="./ExteriorDetail">Exterior Detail</Link>
      <p className="card-text">
        Mini-Vans can sometimes be time consuming to detail. The vehicle has
        so many features and cup holders, that it takes time to get to all of them.
        </p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>

  <div className="card">
    <img className="card-img-top" src={commentpicture} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">SUVs</h5>
      <Link to="./InteriorDetail">Interior Detail</Link>
      <Link to="./ExteriorDetail">Exterior Detail</Link>
      <p className="card-text">
        SUVs and Mini-vans are in the same category. Their condition depends on
        the owners' use.
      </p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  
  <div className="card">
    <img className="card-img-top" src={commentpicture} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Other Vehicles</h5>
      <Link to="./InteriorDetail">Interior Detail</Link>
      <Link to="./ExteriorDetail">Exterior Detail</Link>
      <p className="card-text">
        We detail motorcycle and RV, when they come. All vehicle
        are welcome.
        </p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>

</div>
  )
}

export default CostCards
