import React from 'react'
import '../App.css';

const Slogan = () => {
  return (
    <div className='mt-5'>
        <div class="container " id="slogan">
      <div class="row">
        <div class="col-lg col-md col-sm">
          <iframe style={{width : "380px" , height : "315px" , frameBorder:"0"}} src="https://www.youtube.com/embed/LOGKl54EUUA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div class="col-lg col-md col-sm">
          <h1 style={{color : "#e0ac1c"}}>Make your world a better<br/></h1><h1><span class="px-lg-5">place with Soccer</span></h1><br/>
          <p><b>Soccer is by far the most popular sport, and for good reason- <br/>beloved by at least 265 million people
              worldwide,</b></p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Slogan