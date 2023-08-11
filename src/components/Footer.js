import React from 'react'
import '../App.css'
import logo from "../img/logo.png"

const Footer = () => {
  return (
    <div class="bg-dark text-white" >
  <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
    <div class="col mb-3">
      <a href="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
        <img className='mx-5' style={{width : "100px" , height : "100px"}} src={logo} alt='load'/>
      </a>
      <p class="mx-5">All rights reserved SoccerVerse &copy; 2023</p>
    </div>

    <div class="col mb-3">

    </div>

    <div class="col mb-3">
      <h5 class="mb-3">Info</h5>
      <ul class="nav flex-column ">
        <li class="nav-item mb-2 "><a href="#" class=" text-light nav-link p-0">Home</a></li>
        <li class="nav-item mb-2"><a href="#" class="text-white nav-link p-0 ">Feedback</a></li>
        <li class="nav-item mb-2"><a href="#" class="text-white nav-link p-0">About</a></li>
        <li class="nav-item mb-2"><a href="#" class="text-white nav-link p-0">Contact Us</a></li>
        
      </ul>
    </div>

    <div class="col mb-3">
      <h5 class="mb-3">Location</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"> <i class="fa fa-map-marker"></i>
        <p><span>aptechgdn</span></p></li>
        <li class="nav-item mb-2"> <i class="fa fa-phone"></i>
        <p>65656565</p></li>
        <li class="nav-item mb-2"><i class="fa fa-envelope"></i>
        <p><a href="mailto:taskforce@aptechgdn.net" style={{color: '#e0ac1c'}}>taskforce@aptechgdn.net</a></p></li>
      </ul>
    </div>

    <div class="col mb-3">
      <h5 class='mb-3'>About Soccer</h5>
      <p>Soccer is a team sport played by a team of 11 players against another team of 11 players on a field.
        The team has one designated goalkeeper and 10 outfield players.
        Outfield players are usually specialised in attacking or defending or both.
        A team is typically split into defenders, midfielders and forwards, though there is no restriction on players
        moving anywhere
        on the pitch.<br/>
        A group of people, clubs, or countries that have joined together for a particular purpose, or because they share
        a common interest.</p>
    </div>
  </footer>
</div>

  )
}

export default Footer