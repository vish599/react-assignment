import React from 'react'
import Ap from '.../image/ap.jpg';
// import Card1 from "../pages/Cards/Car1";
// import Card2 from "../pages/Cards/Card2";


function Card()  {
    return (
        <div>
     <div class="card-group">
  <div class="card">
    <img class="card-img-top" src={Ap} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    
    
    
    </div>
  </div>
 
</div>
{/* <Card1 />
<Card2 /> */}



            
        </div>
    )
}

export default Card
