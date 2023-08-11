import React from 'react'
import '../App.css';
import "../components/contact.css"
const Contact = () => {
    return (
        <div className='mt-5 ' id='contact'>
            <div id="div1" class="container-fluid bg-dark">
        <div class="row">
            <div class="col-sm col-md col-lg">
            <h2 class="mt-5 text-center text-white">CONTACT US</h2><br/>
            <p style={{textAlign : "center", color: 'white'}} href='mailto:taskforce@aptechgdn.net'>mail us: <span style={{color : "#e0ac1c" , textDecorationLine : "underline"}}>taskforce@aptechgdn.net</span></p>
            <br/><br/>
              <center>
                <iframe class="map mb-lg-5" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.9063475340963!2d67.02431109999999!3d24.867048000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e6b1566c46f%3A0x65318f4eb62c7aa8!2sAptech%20Computer%20Education%20Garden%20Center!5e0!3m2!1sen!2s!4v1691650913543!5m2!1sen!2s"   style={{allowfullscreen:"", height: "320px", width: '600px'}} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </center>


            </div>

            <div class="col-sm col-md col-lg">
                <h2 class=" mt-5 text-center text-white" style={{textAlign : "center"}}>FEEDBACK</h2>
                <form action="" name="loginForm" class="mt-5 mb-5">
                    <div class="mb-3">
                      <label for="" class="form-label"></label>
                      <input type="text"
                        class="form-control w-75 mx-lg-5" name="name" id="" aria-describedby="helpId" placeholder="Enter Your Name"/>
                    </div>
                    <div class="mb-3">
                      <label for="" class="form-label"></label>
                      <input type="email" class="form-control w-75 mx-lg-5" name="email" id="" aria-describedby="emailHelpId" placeholder="Enter Your Email"/>
                    </div>
                    <div class="mb-3">
                      <label for="" class="form-label"></label>
                      <textarea class="form-control w-75 mx-lg-5" name="msg" id="msg" rows="6" placeholder='Enter'></textarea>
                    </div>
                    <div class="mb-3">
                      <p id="para" style={{color:"red"}}></p>
                      <p id="para2" style={{color:"green"}}></p>
                    </div>

                    <input type="submit" class="btn btn-warning mx-lg-5" onclick="validation()"/> 
                </form>
            </div>
        </div>
    </div>
        </div >
    )
}

export default Contact