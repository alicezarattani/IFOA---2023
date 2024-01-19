import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Clear_Icon from "../assets/Images/Icons/clear.png";
import Cloud_Icon from "../assets/Images/Icons/cloud.png";
import Drizzle_Icon from "../assets/Images/Icons/drizzle.png";
import Snow_Icon from "../assets/Images/Icons/snow.png";
import Rain_Icon from "../assets/Images/Icons/Rain.png";
import Wind_Icon from "../assets/Images/Icons/wind.png";
import Humidity_Icon from "../assets/Images/Icons/humidity.png";

function CustomMain() {
  const location = useLocation;
  const searchTerms = new URLSearchParams(location.search).get("search");
  const [city, setCity] = useState([]);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=London&units=Metric&APPID=${api_key}`;
  const api_key = "9ee9ec75bc4456a2833c239c07fd0f60";

  const fetchData = async () => {
    try {
      let response = await fetch(url);
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        if (data) {
          setCity(data);
        }
      } else {
        console.log("Errore nella risposta dell'API");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (searchTerms && searchTerms.length > 2) {
      fetchData();
    }
  }, []);

  return (
    <>
      <div>
        <h1>{city.name}</h1>
        <p>Data</p>
      </div>
      <Container>
        <Row className="d-flex align-items-center justify-content-center my-2">
          <Col xs={6}>
            <div>
              <img src={Cloud_Icon} alt=""></img>
            </div>
          </Col>
          <Col xs={6}>
            <p>TEMPERATURA</p>
          </Col>
        </Row>
        <Row className="d-flex align-items-center justify-content-center my-5">
          <Col xs={6}>
            <img src={Humidity_Icon} alt=""></img>
            <p>UMIDITA&#39</p>
          </Col>
          <Col xs={6}>
            <img src={Wind_Icon} alt=""></img>
            <p>VENTO</p>
          </Col>
        </Row>
        <Row className="d-flex align-items-center justify-content-center my-3">
          <Col xs={6}>
            <img className="next" src={Snow_Icon} alt=""></img>
          </Col>
          <Col xs={6}>
            <p>GRADI MAIN WEATHER</p>
          </Col>
        </Row>
        <Row className="d-flex align-items-center justify-content-center my-3">
          <Col xs={6}>
            <img className="next" src={Drizzle_Icon} alt=""></img>
          </Col>
          <Col xs={6}>
            <p>GRADI MAIN WEATHER</p>
          </Col>
        </Row>
        <Row className="d-flex align-items-center justify-content-center my-3">
          <Col xs={6}>
            <img className="next" src={Rain_Icon} alt=""></img>
          </Col>
          <Col xs={6}>
            <p>GRADI MAIN WEATHER</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CustomMain;
