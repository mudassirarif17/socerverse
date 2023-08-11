import React from 'react'
import '../App.css';

const Topplayers = () => {
    const data = [
        {
          "id": 1,
          "Name": "Ronaldo",
          "image": "http://dummyimage.com/112x100.png/5fa2dd/ffffff",
          "Goals": 3
        },
        {
          "id": 2,
          "Name": "Messi",
          "image": "http://dummyimage.com/126x100.png/5fa2dd/ffffff",
          "Goals": 199
        },
        {
          "id": 3,
          "Name": "Bob Donaldson",
          "image": "http://dummyimage.com/221x100.png/5fa2dd/ffffff",
          "Goals": 66
        },
        {
          "id": 4,
          "Name": "Joe Cassidy",
          "image": "http://dummyimage.com/204x100.png/dddddd/000000",
          "Goals": 197
        },
        {
          "id": 5,
          "Name": "James McNaught",
          "image": "http://dummyimage.com/157x100.png/5fa2dd/ffffff",
          "Goals": 195
        },
        {
          "id": 6,
          "Name": "Dick Smith",
          "image": "http://dummyimage.com/124x100.png/5fa2dd/ffffff",
          "Goals": 180
        },
        {
          "id": 7,
          "Name": "Harry Stafford",
          "image": "http://dummyimage.com/100x100.png/dddddd/000000",
          "Goals": 200
        },
        {
          "id": 8,
          "Name": "William Bryant",
          "image": "http://dummyimage.com/128x100.png/ff4444/ffffff",
          "Goals": 127
        },
        {
          "id": 9,
          "Name": "Frank Barrett",
          "image": "http://dummyimage.com/120x100.png/5fa2dd/ffffff",
          "Goals": 136
        },
      {
          "id": 10,
          "Name": "Alf Schofield",
          "image": "http://dummyimage.com/120x100.png/5fa2dd/ffffff",
          "Goals": 179
        }
      ]
  return (
    <div>
        <div class="container mt-5">
      <table class="table table-striped table-bordered table-hover mt-1 text-center">
          
              <th colspan="12">10 TOP RANKER</th>

          <tr>
              <th style={{width: "5vw"}}>RANK</th>
              <th>PLAYERS</th>
              <th>TEAM</th>
              <th>GOALS SCORED</th>
          </tr>
          {
            data.map((a)=><tr>
              <td id="p1">{a.id}</td>
              <td id="r1">{a.Name}</td>
              <td id="c1">3</td>
              <td id="c1">{a.Goals}</td>
          </tr>)
          }
          
      </table>
   </div>

    </div>
  )
}

export default Topplayers