import React from 'react'
import commentpicture from "./../../projectimages/e.JPG";
import Truck from './../../projectimages/exteriorPickup1.JPG';
import Car from './../../projectimages/exteriorCar2.JPG';
import { Link } from 'react-router-dom';
import './CostCards.css'
function CostCards() {


  return (
    <div>
      <span>click on interior detail/exterior detail links below for detailing bullet list.</span>
   <section className='row'>
  <div className="card col-sm-6">
    <img className="card-img-top" src={Car} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Cars</h5>
       <div>
        <Link to="./interior">Interior Detail: $60</Link>
      </div>
      <div>
        <Link to="./exterior">Exterior Detail: $60</Link>
      </div>
      <p className="card-text">
        This car was detailed by Grovers Detailing Service. Revived
        and ready for the road. 
      </p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>

  <div className="card col-sm-6">
    <img className="card-img-top" src={Truck} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Trucks</h5>
     <div>
      <Link className='in' to="./interior">Interior Detail: $75</Link>
     </div>
     <div>
      <Link className='ex' to="./exterior">Exterior Detail: $75</Link>
     </div>
      <p className="card-text">
        Trucks look soo pretty after a good detail job. This Truck
        was detail by Grovers Detailing Service. we were happy with the result.
        </p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  </section>

  <section className='row'>
  <div className="card col-sm-6">
    <img className="card-img-top" src={commentpicture} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Vans</h5>
      <div>
        <Link to="./interior">Interior Detail: $100</Link>
      </div>
      <div>
        <Link to="./exterior">Exterior Detail: $75</Link>
      </div>
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
  
  <div className="card col-sm-6">
    <img className="card-img-top" src={commentpicture} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Mini-Vans</h5>
      <div>
        <Link to="./interior">Interior Detail: $75</Link>
      </div>
      <div>
        <Link to="./exterior">Exterior Detail: $75</Link>
      </div>
      <p className="card-text">
        Mini-Vans can sometimes be time consuming to detail. The vehicle has
        so many features and cup holders, that it takes time to get to all of them.
        </p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  </section>

  <section className='row'>
  <div className="card col-sm-6">
    <img className="card-img-top" src={commentpicture} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">SUVs</h5>
      <div>
        <Link to="./interior">Interior Detail: $75</Link>
      </div>
      <div>
        <Link to="./exterior">Exterior Detail: $75</Link>
      </div>
      <p className="card-text">
        SUVs and Mini-vans are in the same category. Their condition depends on
        the owners' use.
      </p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  
  <div className="card col-sm-6">
    <img className="card-img-top" src={commentpicture} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Other Vehicles</h5>
      <div>
        <Link to="./interior">Interior Detail: $60...</Link>
      </div>
      <div>
        <Link to="./exterior">Exterior Detail: $60...</Link>
      </div>
      <p className="card-text">
        We detail motorcycle and RV, when they come. All vehicle
        are welcome.
        </p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  </section>

</div>
  )
}

export default CostCards
