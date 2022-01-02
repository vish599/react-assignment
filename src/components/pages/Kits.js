import React from 'react'
import kit from '../image/kit.png';
import '../CSS/Kits.css'

function Kits()  {
    return (
        <div className="gift-main">
        <div class="row bg-lightblue ">
<div class="col-sm-7 ">

<div className="main-kits">

   
  <h1 class="card-title ">Aesop</h1>
  </div>
  <div className="content">
      <h3> Category</h3>
  <a   class="btn btn-light" >All gifts</a>
  <a  class="btn btn-light">Seasonal Gift Kits</a>
  <a  class="btn btn-light">Favourite formulations</a>
  <a  class="btn btn-light">Small gestures</a>
  <a  class="btn btn-light">Generous offerings</a>
  <a  class="btn btn-light">Gifts for self-care</a>
  <a  class="btn btn-light">Gifts for home</a>
  <a  class="btn btn-light">Gifts for travel</a>
  <a  class="btn btn-light">Gift Bundles</a>
  </div>
  
</div>
  <div class="col-sm-5">
  <img  class= "card-img"  src={kit}  alt="..." /> 
  </div>
</div>
        </div>
    )
}

export default Kits
