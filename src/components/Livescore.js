import React , {useState} from 'react'
import '../App.css';

const Livescore = () => {
  const [min , setMin] = useState(0);
  const [sec , setSec]= useState(0);


  // setInterval(() => {
  //   setMin(min + 1)
  // }, 60000);

  // setInterval(() => {
  //   setSec(sec+1)
  // }, 1000);

  const data = [
    {
        "id" : 1,
        "team1" : "FC Barcelona",
        "img1" : "https://assets.stickpng.com/images/584a9b3bb080d7616d298777.png",
        "goals1" : 3,
        "team2" : "Real Mardrid",
        "img2": "https://assets.stickpng.com/images/584a9b47b080d7616d298778.png",
        "goals2": "2"

    },
    {
        "id" : 2,
        "team1" : "MAN United",
        "img1" : "https://upload.wikimedia.org/wikipedia/hif/f/ff/Manchester_United_FC_crest.png",
        "goals1" : 4,
        "team2" : "MAN City",
        "img2": "https://w1.pngwing.com/pngs/203/356/png-transparent-premier-league-logo-manchester-manchester-city-fc-organization-line-area-circle-symbol.png",
        "goals2": 5

    },
    {
        "id" : 3,
        "team1" : "Chelsea",
        "img1" : "https://assets.stickpng.com/images/580b57fcd9996e24bc43c4e1.png",
        "goals1" : 1,
        "team2" : "LiverPool FC",
        "img2": "https://upload.wikimedia.org/wikipedia/hif/b/bd/Liverpool_FC.png",
        "goals2": 0

    }

]
  return (
    <div>
         <div class="mt-5 bg-dark">
      <div class="row">
        <div class="col-lg-12">
           <h2 class="text-center m-1 text-white" >LIVE SCORE</h2>
        </div>
      </div>
      <br/>

       {/* Live Match 1  */}
      <br/><br/>
    {
      data.map((a)=><div class="row">
      <div class="col-lg-5">

        <h3 class="text-center text-white" id="country1"><img src={a.img1} class="ml-5" alt="" style={{height: "8vh"}} id="logo1"/></h3>
        <p class="text-center text-white" id="time1">{a.goals1}</p>
      </div>
      <div class="col-lg-2">
        <h1 class="text-center text-white">V/S</h1>
        <br/>
        <p class="text-center text-white"><b>{min} : {sec}</b></p>
      </div>
      <div class="col-lg-5">
        <h3 class="text-center text-white" id="country2"><img src={a.img2} class="ml-5" alt="" style={{height: "8vh"}} id="logo2"/></h3>
        <p class="text-center text-white" id="time2">{a.goals2}</p>
      </div>
    </div>)
    }
      <br/><br/><br/>
       {/* Live Match 2 */}
       {/* <div class="row">
        <div class="col-lg-5">

          <h3 class="text-center text-white" id="country1"><img src="../livescore/logo.png" class="ml-5" alt="" style={{height: "8vh"}}id="logo1"/>team name</h3>
          <p class="text-center text-white" id="time1">score</p>
        </div>
        <div class="col-lg-2">
          <h1 class="text-center text-white">V/S</h1>
          <br/>
          <p class="text-center text-white"><b>timing</b></p>
        </div>
        <div class="col-lg-5">
          <h3 class="text-center text-white" id="country2"><img src="../livescore/logo.png" class="ml-5" alt="" style={{height: "8vh"}} id="logo2"/>team name</h3>
          <p class="text-center text-white" id="time2">score</p>
        </div>
      </div>
      <br/><br/><br/> */}
     

      
       {/* Live Match 3  */}
       {/* <div class="row">
        <div class="col-lg-5">

          <h3 class="text-center text-white" id="country1"><img src="../livescore/logo.png" class="ml-5" alt="" style={{height: "8vh"}} id="logo1"/>team name</h3>
          <p class="text-center text-white" id="time1">score</p>
        </div>
        <div class="col-lg-2">
          <h1 class="text-center text-white">V/S</h1>
          <br/>
          <p class="text-center text-white"><b>timing</b></p>
        </div>
        <div class="col-lg-5">
          <h3 class="text-center text-white" id="country2"><img src="../livescore/logo.png" class="ml-5" alt="" style={{height: "8vh"}} id="logo2"/>team name</h3>
          <p class="text-center text-white" id="time2">score</p>
        </div>
      </div> */}
      <br/><br/><br/>
     

    </div>
    </div>
  )
}

export default Livescore