import logo from './logo.svg';
import './App.css';
import GoogleMapReact from 'google-map-react';
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import NumberFormat from "react-number-format";
import ReactTooltip from "react-tooltip";
import RingLoader from "react-spinners/RingLoader";

import NavbarComponent from "./components/Nav"


function App() {
  
  
  const [latest, setLatest] = useState([]);
  const [results, setResults] = useState([]);
  const [searchCountries, setSearchCountries] = useState("");
  const [loading, setLoading] = useState(true);
  const [darkTheme, setDarkTheme] = useState(false);

 

  const date = new Date(parseInt(latest.updated));
  const lastUpdated = date.toString();

 

  useEffect(() => {
     axios
       .all([
         axios.get("https://corona.lmao.ninja/v2/all"),
         axios.get("https://corona.lmao.ninja/v2/countries"),
       ])
       .then((responseArr) => {
         setLatest(responseArr[0].data);
         setResults(responseArr[1].data);
         setLoading(false);
       })
       .catch((err) => {
         console.log(err);
       });
   }, []);

 

const countriesLocations = results.map((data, i)=> {
  return(
    <div
    lat = {data.countryInfo.lat}
    lng = {data.countryInfo.long}
    style = {{
      color: "red",
      backgroundColor: "#FFF",
      height: "25px",
      width: "35px",
      textAlign: "center",
      borderRadius: "50%"
    }}
>
{data.cases}
<img height = "10px" src ={data.countryInfo.flag}/>
<br />
    </div>
  );
});
const filterCountries = results.filter((item) => {
   return searchCountries !== ""
     ? item.country.toLowerCase().includes(searchCountries.toLowerCase())
     : item;
 });

 

const countries = filterCountries.map((data, i) => {
    return (
      <Card
        key={i}
        bg={"light"}
        text={ "dark"}
        className="text-center"
        style={{ margin: "10px" }}
      >
        <Card.Img variant="top" src={data.countryInfo.flag} />
        <Card.Body>
          <Card.Title>{data.country}</Card.Title>
          <Card.Text>Cases {data.cases}</Card.Text>
          <Card.Text>Deaths {data.deaths}</Card.Text>
          <Card.Text>Recovered {data.recovered}</Card.Text>
          <Card.Text>Today's cases {data.todayCases}</Card.Text>
          <Card.Text>Today's deaths {data.todayDeaths}</Card.Text>
          <Card.Text>Active {data.active}</Card.Text>
          <Card.Text>Critical {data.critical}</Card.Text>
        </Card.Body>
      </Card>
    );
     });

 

  var queries = [
     {
       columns: 2,
       query: "min-width: 500px",
     },
     {
       columns: 3,
       query: "min-width: 1000px",
     },
   ];

 


  return (
    <div className="App">
    <div
          style={{
            backgroundColor: "white" ,
            color:  "white",
          }}
        >
          <NavbarComponent/>
          <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <RingLoader size={50} color={"blue"} loading={loading} />
          </div>
          <br />
          <h2
            data-tip="Last modified date: 16/05/2020 - v2.2"
            style={{ textAlign: "center" }}
          >
            COVID-19 Live Now
          </h2>
          <ReactTooltip effect="solid" />
          <br />

 

          </div>

 

    <CardDeck>
           <Card
             bg="secondary"
             text="white"
             className="text-center"
             style={{ margin: "10px" }}
           >
             <Card.Body>
               <Card.Title>Cases</Card.Title>
               {/* <Card.Text>{latest.cases}</Card.Text> */}
               <NumberFormat
                 value={latest.cases}
                 displayType={"text"}
                 thousandSeparator={true}
                 style={{ fontSize: "30px" }}
               />
             </Card.Body>
             <Card.Footer>
               <small>Last updated {lastUpdated}</small>
             </Card.Footer>
           </Card>
           <Card
             bg="danger"
             text={"white"}
             className="text-center"
             style={{ margin: "10px" }}
           >
             <Card.Body>
               <Card.Title>Deaths</Card.Title>
               <Card.Text>
                 {" "}
                 <NumberFormat
                   value={latest.deaths}
                   displayType={"text"}
                   thousandSeparator={true}
                   style={{ fontSize: "30px" }}
                 />
               </Card.Text>
             </Card.Body>
             <Card.Footer>
               <small>Last updated {lastUpdated}</small>
             </Card.Footer>
           </Card>
           <Card
             bg="success"
             text={"white"}
             className="text-center"
             style={{ margin: "10px" }}
           >
             <Card.Body>
               <Card.Title>Recovered</Card.Title>
               <Card.Text>
                 {" "}
                 <NumberFormat
                   value={latest.recovered}
                   displayType={"text"}
                   thousandSeparator={true}
                   style={{ fontSize: "30px" }}
                 />
               </Card.Text>
             </Card.Body>
             <Card.Footer>
               <small>Last updated {lastUpdated}</small>
             </Card.Footer>
           </Card>
         </CardDeck>

 

 

      <div style={{ height: '100vh', width: '100%' }}>
       <GoogleMapReact
         bootstrapURLKeys={{ key: "AIzaSyDICcJJakqF9y0qhrALXFY4xiIYvReQSys"}}
         defaultCenter={{lat: 20,
      lng: 77}}
         defaultZoom={4}
       >

 


    {countriesLocations}

 

       </GoogleMapReact>
     </div>
    </div>
  );
}

 

export default App;