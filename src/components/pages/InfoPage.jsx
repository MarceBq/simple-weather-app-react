import { useParams, useLocation, useNavigate } from "react-router-dom";

export default function InfoPage() {
  // Desestructuro los parametros de la URL
  const { cityName } = useParams();

  const location = useLocation();

  // console.log(location.state)

  // Verifica si `weatherData` existe,igualando al estado(data) obtenidas de la ruta anterior
  const { weatherData } = location.state || {};

  const navigate = useNavigate();

  function onReturnHome() {
    navigate("/");
  }

  function convertFarenheith(tempInKelvin) {
    const valueToCelsius = tempInKelvin - 273.15;
    return valueToCelsius.toFixed();
  }

  function convertirFirstCharacter(character) {
    const splitCharacter = character.split("");
    const upperCharacter = splitCharacter[0].toUpperCase();
    splitCharacter[0] = upperCharacter;
    const newCharacter = splitCharacter.join("");
    return newCharacter;
  }

  return (
    <div className="container">
      <h1>You searched for {cityName}</h1>

      <div className="info-container">
        <div className="details-container">
          <div className="temperature-container">
            <div className="temperature-container-grade">
              <span className="val">
                {convertFarenheith(weatherData.main.temp)}
              </span>
            </div>

            <div className="temperature-container-values">
              <span>°C</span>

              <div className="temperature-max-container">
                <img src="/src/assets/arrows_up.png" alt="" />
                <span> {weatherData.main.temp_max}</span>
              </div>

              <div className="temperature-min-container">
                <img src="/src/assets/arrows_down.png" alt="" />
                <span> {weatherData.main.temp_min}</span>
              </div>
            </div>
          </div>

          <hr />

          <div className="description-container">
            <span>{weatherData.name}</span>
            <img
              src={`https://countryflagsapi.netlify.app/flag/${weatherData.sys.country}.svg`}
              alt="Flag"
            />
            <span>
              Weather:{" "}
              {convertirFirstCharacter(weatherData.weather[0].description)}
            </span>
          </div>
        </div>

        <div className="features-container">
          <span>{weatherData.main.humidity} %</span>

          <span>{weatherData.main.pressure} hPa</span>

          <span>{weatherData.wind.speed} m/s</span>

          <span>{weatherData.main.sea_level} msnm</span>
        </div>
      </div>

      <button onClick={onReturnHome}>Home</button>
    </div>
  );
}
