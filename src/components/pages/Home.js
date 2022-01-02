import React from 'react'
import home from '../CSS/home.css'
import Ad1 from '../image/Ad1.png';
import Ad2 from '../image/Ad2.png';
import Ad3 from '../image/Ad3.png';
import Ad4 from '../image/Ad4.png';
import V1 from '../image/v1.mp4'
import V2 from '../image/v2.mp4'

import Ad8 from '../image/Ad8.png';
import Ad9 from '../image/Ad9.png';
import Resizable from './Resizable';
import Footer  from './Footer';
import Resizable2 from './Resizable2';
import Slider2 from './Slider2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <div >
      <div id="main">

      <div class="firt">
        <div class="row bg-lightblue ">

          <div class="col-sm-6" id="col-sm-6" >

            <div id="card"  >
              <h3>Gift selection simplified</h3><br></br>
              <p class="card-text">Bring joy to deserving recipients of all stripes with a <br></br>
                carefully curated selection of formulations for the skin,<br></br>
                body and home</p><br></br><br></br>

              <h4>
               
                <a class="btn btn-light">Browse all gifts </a>
               &nbsp; &nbsp; &nbsp; &nbsp;
                <FontAwesomeIcon icon={faArrowRight}/>
              
              </h4>


            </div>

          </div>


          <div class="col-sm-6 p-0">
            <img class="card-img" src={Ad1} alt="..." />
          </div>
        </div>
      </div>





      <div className="card2">
        <div class="row bg-lightblue ">
          <div class="col-sm-7">
            <video
              src={V1}
              autoPlay
              loop
              muted
              className="card-img"
            ></video>
          </div>
          <div class="col-sm-5  ">
            <div id="card2"  >
              <h3>
                For friendly faces</h3><br></br>

              <p class="card-text">Selections of cherished skin care—some for the<br></br> novice with empty bathroom cabinets, others for the well-<br></br>stocked expert. </p><br></br><br></br>

              <h4>
                <a class="btn btn-light">Browse all gifts</a>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <FontAwesomeIcon icon={faArrowRight}/>
              </h4>


            </div>
          </div>
        </div>
      </div>



      <div class="card3">

        <div class="row bg-lightblue ">
          <div class="col-sm-5  ">
            <div id="card3">
              <h3>Treasured tokens </h3><br></br>
              <p class="card-text">A considered assortment of our most sought <br></br>-after formulations—from signature hand washes<br></br> to potent facial hydrators, to transportive aromas for the <br></br>home.</p><br></br><br></br>

              <h4>
                <a class="btn btn-light">Browse all gifts</a>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <FontAwesomeIcon icon={faArrowRight}/>
              </h4>


            </div>
          </div>
          <div class="col-sm-7">
          <video
              src={V2}
              autoPlay
              loop
              muted
              className="card-img"
            ></video>
          </div>
        </div>
      </div>




      <div class="card4">

      <div class="row bg-lightblue ">
        <div class="col-sm-7">
          <img class="card-img" src={Ad4} alt="..." />
        </div>
        <div class="col-sm-5  ">
        <div id="card2"  >
              <h3>Portable indispensabless</h3><br></br>

              <p class="card-text">These skin, hair and body care formulations are suitably<br></br> sized to refresh frequent travellers en route and at<br></br> destination. </p><br></br><br></br>

              <h4>
                <a class="btn btn-light">Browse all gifts</a>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <FontAwesomeIcon icon={faArrowRight}/>
              </h4>


            </div>
        </div>
      </div>

      </div>



      <div class="card5">
     
    
      <div class="container">
        <div class="row">
          
          <div class="col">
            <h1>Seasonal Gift Kits</h1>
          </div>
          <div class="col">
            <p>Comprising formulations for the skin, body and home, our Gift Kit collection is designed to recognise everyday acts of kindness, and reverberate beyond the first<br></br> exchange. </p>
          
          </div>
          <Resizable />
        </div>
      </div>

      </div>



    <div class="card6">
     
      <div class="left">
      <img class="card-img" src={Ad9} alt="..." height="400px"/>
      </div>
      <div class="right">
      <img class="card-img" src={Ad8} alt="..." height="400px"/>
      </div>
      </div>



      <div class="card7">
     
      <div class="left1">
        <h5>Gifts for home </h5>
        <div>Revitalise indoor spaces with gifts designed to illuminate space and instil atmosphere. Each is formulated to set the mood, calm the mind and refresh the mundane. </div>
     
      </div>
      <div class="right1">
        <h5>Gifts for self-care </h5>
        <div>Find special gifts to honour the most complex relationship of all—that which we have with ourselves. Give generously and without restraint.  </div>
     
      </div>
      </div>
      



      


      


     


  
      </div>
      <div class="card8">
        <div class="row">
          <div class="col-sm-6" id="leftcon">
          <div id="card3">
              <h3>Store locator </h3><br></br>
              <p class="card-text">A considered assortment of our most sought <br></br>-after formulations—from signature hand washes<br></br> to potent facial hydrators, to transportive aromas for the <br></br>home.</p><br></br><br></br>

              <h4>
                <a class="btn btn-light">Browse all gifts</a>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <FontAwesomeIcon icon={faArrowRight}/>
              </h4>


            </div>



          </div>
          <div class="col-sm-6">
           <Slider2 />
          </div>
        </div>

      </div>

      <div className="card9">
      <h2>
      ‘It is always the simple that produces the marvellous.’ <h6>Amelia Barr</h6>
      </h2>
      

      </div>






      <div class="footer">
        <Footer />


      </div>









    </div>
  )
}

export default Home
