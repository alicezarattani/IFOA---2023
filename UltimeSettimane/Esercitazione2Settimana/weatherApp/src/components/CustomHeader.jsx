// import { useState } from "react";
// import Results from "./Results";

// function CustomHeader() {
//   const [search, setSearch] = useState("");
//   //   const api_key = "9ee9ec75bc4456a2833c239c07fd0f60"
//   //   const search = async () => {
//   //     const element = document.getElementsByClassName("cityInput")
//   //     if(element[0].value==="")
//   //     {
//   //       return 0;
//   //     }
//   //     const url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&APPID=${api_key}`
//   //     let response = await fetch(url);
//   //     let data = await response.json();
//   //     const humidity = document.getElementsByClassName("humidity-percent")
//   //     const wind = document.getElementsByClassName("wind-rate")
//   //     const temperature = document.getElementsByClassName("temperature")
//   //     const location = document.getElementsByClassName("location")
//   //     humidity[0].innerHTML = data.main.humidity
//   //   }
//   //   }
//   return (
//     <>
//       {/* ci andrà una search icon suppongo con una funzione onclick che prenderà il search*/}
//       <input className="search" type="text" placeholder="Cerca una città!" />
//       <button type="button" onClick={(e) => setSearch(e.target.value)}>
//         Cerca
//       </button>
//       <Results search={search} />
//     </>
//   );
// }

// export default CustomHeader;

import Search_Icon from "../assets/Images/Icons/search.png";

function Header() {
  return (
    <>
      <input type="text" placeholder="Inserisci la città" />
      <img src={Search_Icon} alt="Search Icon"></img>
    </>
  );
}
export default Header;
