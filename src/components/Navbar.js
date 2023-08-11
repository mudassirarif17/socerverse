import React from "react"
import '../App.css';
import logo from "../img/logo.png"
import {Link} from "react-router-dom"

// import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <header>



<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#"><img src={logo} alt="SoccerVerse" style={{height : "100px" , width : "100px" , marginLeft : "10%"}}/></a>
        <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav me-auto mt-1 mt-lg-0">
                <li class="nav-item ">
                    <Link to="/" class="nav-link active" aria-current="page">HOME <span class="visually-hidden"></span></Link>
                </li>
                <li class="nav-item">
                    <Link to="/worldcup" class="nav-link">WORLD<span class="px-1">CUP</span></Link>
                </li>
                <li class="nav-item">
                    <Link to="/leage" class="nav-link" >LEAGUES</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/playerstats">PLAYER<span class="px-1">STATS</span></Link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#contact">CONTACT</a>
                </li>
            </ul>
        </div>
  </div>
</nav>

</header>

        </div>
    )
}

export default Navbar;