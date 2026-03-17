import { useState, useEffect } from "react";

import { MainCard } from "../components/MainCard";
import { ContentBox } from "../components/ContentBox";
import { Header } from "../components/Header";
import { DateAndTime } from "../components/DateAndTime";
import { MetricsBox } from "../components/MetricsBox";
import { LoadingScreen } from "../components/LoadingScreen";
import { ErrorScreen } from "../components/ErrorScreen";

import styles from "../styles/Home.module.css";

export const App = () => {
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    const getData = async () => {
      //1. Lire le fichier de configuration
      const configRes = await fetch("/config.json");
      const config = await configRes.json();

      // 2. Appeler Open-Meteo avec les coordonnées
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${config.latitude}&longitude=${config.longitude}&current=temperature_2m,apparent_temperature,weather_code,is_day,windspeed_10m,winddirection_10m,relative_humidity_2m,precipitation&daily=sunrise,sunset&timezone=${config.timezone}`,
      );
      const data = await res.json();

      // 3. Stocker les données ET la config
      setWeatherData({ ...data, config });
    };

    // Premier appel immédiat au démarrage
    getData();

    // Rafraîchissement toutes les heures
    const interval = setInterval(getData, 3600000);

    // Nettoyage du timer
    return () => clearInterval(interval);
  }, []);

  return weatherData && !weatherData.message ? (
    <div className={styles.wrapper}>
      <MainCard
        city={weatherData.config.city}
        country={weatherData.config.country}
        weatherData={weatherData}
      />
      <ContentBox>
        <Header>
          <DateAndTime weatherData={weatherData} />
        </Header>
        <MetricsBox weatherData={weatherData} />
      </ContentBox>
    </div>
  ) : weatherData && weatherData.message ? (
    <ErrorScreen errorMessage="Impossible de charger la météo, veuillez réessayer.">
      {" "}
    </ErrorScreen>
  ) : (
    <LoadingScreen loadingMessage="Chargement des données météo..." />
  );
};

export default App;
