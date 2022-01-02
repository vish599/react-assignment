import React from 'react'

import footer from '../CSS/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

import {  faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    
    return (
        <div>
          <div id="first">
              
            <input type="email" class="input"  placeholder="Email address"></input><br></br>
           
           
            <div class="check_content">
            <input type="checkbox" id="check" ></input>
            
            
            <p>Subscribe to receive communications from Aesop about our products <br></br>and services. By subscribing, you confirm you have read and accept our<br></br> privacy policy &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faExternalLinkAlt} /></p>
            </div>
            <div id="content">
                <h5>Sustainability</h5>
                <div className="divider"></div>
                
              </div>
             </div>





            <div id="second">
                <div>
                <h5>Orders and support</h5>
                <div className="divider"></div>
                <div id="content1">
              
                
              </div>
                <a   class="btn btn-light" >Contact us</a><br></br>
               <a  class="btn btn-light">FAQs  &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faExternalLinkAlt} /></a><br></br>
               <a  class="btn btn-light">Shipping  &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faExternalLinkAlt} /></a><br></br>
               <a  class="btn btn-light">Returns  &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faExternalLinkAlt} /></a><br></br>
               <a  class="btn btn-light">Order history</a><br></br>
               <a  class="btn btn-light">Term and conditions</a><br></br>
               </div>
               <div>
                <h5>About</h5>
                <div className="divider"></div>
                
                <a   class="btn btn-light" >Our story</a><br></br>
               <a  class="btn btn-light">Foundation  &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faExternalLinkAlt} /></a><br></br>
               <a  class="btn btn-light">Careers</a><br></br>
               <a  class="btn btn-light">Privacy policy</a><br></br>
               <a  class="btn btn-light">Acessbility</a><br></br>
               
               </div>
              
            </div>


            <div id="third">
            <div>
                <h5>Service</h5>
                <div className="divider"></div>
                <a   class="btn btn-light" >Live assistance</a><br></br>
               <a  class="btn btn-light">Corporate gifts</a><br></br>
               <a  class="btn btn-light">Facial appointments</a><br></br>
             
               </div>
               <div id="lowerthird">

               <h6>Social media</h6>
               <div className="divider"></div>
                
                <a   class="btn btn-light" >Instagram   &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faExternalLinkAlt} /></a><br></br>
               <a  class="btn btn-light">Twitter  &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faExternalLinkAlt} /> </a><br></br>
               <a  class="btn btn-light">LinkedIn  &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faExternalLinkAlt} /> </a><br></br>
               <a  class="btn btn-light">WeChat</a><br></br>
               <a  class="btn btn-light">Weibo  &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faExternalLinkAlt} /></a><br></br>
               
               </div>

            </div>

            <div id="four">
            <div>
                <h5>Service</h5>
                <div className="divider"></div>
                
                <a   class="btn btn-light" >Live assistance</a><br></br>
               <a  class="btn btn-light">Corporate gifts</a><br></br>
               <a  class="btn btn-light">Facial appointments</a><br></br>
             
               </div>
            </div>
            
        </div>
    )
}

export default Footer
