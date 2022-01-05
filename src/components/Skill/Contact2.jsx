import React  from 'react';
import {EmailShareButton,FacebookShareButton , TwitterShareButton } from 'react-share'
import {FacebookIcon,TwitterIcon,EmailIcon} from 'react-share'



function Contact()
{
    return (
    <div className='contact-section-two' id='contact-section-2' >
             <div className="contact-heading">
                    <h3 >Contact me 222 </h3>
                    <span ></span>
                    <div className="heading-component-line"></div>
                    <div className="heading-component-line-2"></div>
                </div>
<div class="contact container">           
  <div class="left-section">
    <div class="links">
      <p ><i class="fas fa-phone-alt"></i>  Call us:</p>
      <p >+880 162 395 6856</p>
      <p ><i class="fas fa-share"></i>  Share Our Web</p>
                        <FacebookShareButton url="skill-page.herokuapp.com" quote="Hey! Visit Our WebSite">
                            <FacebookIcon logoFillColor="white" round={true}></FacebookIcon>
                        </FacebookShareButton>        
                        <EmailShareButton url="skill-page.herokuapp.com" quote="Hey! Visit Our WebSite">
                            <EmailIcon logoFillColor="white" round={true}></EmailIcon>
                        </EmailShareButton>        
                        <TwitterShareButton url="skill-page.herokuapp.com" quote="Hey! Visit Our WebSite">
                            <TwitterIcon logoFillColor="white" round={true}></TwitterIcon>
                        </TwitterShareButton>        
      <p ><i class="far fa-envelope"></i>   Mail us:</p>
      <p>amlan9655@gmail.com</p>
    </div>
          </div>
          




  <form id="form" >
      <h2 >Have Something To Write?</h2>
            {/* <p >{ message}</p> */}
      <label for="text" >Name:</label>
      <input type="text"name="name" id="text" />


      <label for="email">Email:</label>
      <input type="email" name="email" id="email" />


      <label for="textarea">Your Message:</label> 
      <textarea name= "message" id="textarea" cols="30" rows="5"></textarea>
      <button class="btn-danger mt-4">Send</button>
  </form>
</div>
</div>
    )
}


export default  Contact 
