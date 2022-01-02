import React from 'react'
import f1 from '../image/f1.png';
import fg from '../CSS/fg.css'

function Fragrance  ()  {
    return (
        <div className="fg-main">
        <div class="row bg-lightblue ">
<div class="col-sm-7 ">

<div className="main">

   
  <h1 class="card-title ">Aesop</h1>
  </div>
  <div className="content1">
      <h6> Category</h6>
  <a   class="btn btn-light" >See all Fragrance</a><br></br>
  <a  class="btn btn-light">Miraceti</a><br></br>
  <a  class="btn btn-light">Karst</a><br></br>
  <a  class="btn btn-light">Erémia</a><br></br>
  <a  class="btn btn-light">Rōzu</a><br></br>
  <a  class="btn btn-light">Hwyl</a><br></br>
  <a  class="btn btn-light">Marrakech</a><br></br>
  <a  class="btn btn-light">Tacit</a>
  
  </div>

  <div className="content2">
  <h6> Category</h6>
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

  <div className="content3">
  <h6> Category</h6>
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
  <img  class= "card-img"  src={f1}  alt="..." /> 
  </div>
</div>
        </div>
    )
}

export default Fragrance
