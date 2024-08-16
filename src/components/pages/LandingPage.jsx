import { useEffect, useState } from "react";

// Utilizo useNavigate para poder navegar a la ruta si es exitosa la busqueda
import { useNavigate } from "react-router-dom";

import InputSearch from "../common/InputSearch";
import ButtonSend from "../common/ButtonSend";

export default function LandingPage() {
  const [valueChange, setValueChange] = useState("");
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchWeatherData = async () => {
      // Si cityName no existe, no hacer ninguna busqueda
      if (!cityName) return;

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=280ed5a8c97d3f0afde37e73ca67f0b9`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setWeatherData(data);
        // Cambio la ubicacion del navegador de forma dinamica y paso informacion de estado adicional a esta nueva ruta
        navigate(`/${data.name}`, { state: { weatherData: data } });
      } catch (error) {
        console.error("Error fetching data:", error);
        setWeatherData(null);
      }
    };

    fetchWeatherData();
  }, [cityName, navigate, weatherData]);

  function onHandleValue(e) {
    setValueChange(e.target.value);
  }

  function onSendValue() {
    setCityName(valueChange);
    setValueChange("");
  }

  return (
    <>
      <span>WEATHER APP</span>

      <InputSearch event={onHandleValue} valueChange={valueChange} />

      <ButtonSend event={onSendValue} />
    </>
  );
}
