import Image from "next/image";
import styles from "./MainCard.module.css";
import { getDescription, getIconName } from "../services/helpers";

export const MainCard = ({
  city,
  country,

  weatherData,
}) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.location}>
        {city}, {country}
      </h1>
      <p className={styles.description}>
        {getDescription(weatherData.current.weather_code)}
      </p>
      <Image
        width="300px"
        height="300px"
        src={`/icons/${getIconName(weatherData.current.weather_code, weatherData.current.is_day)}.svg`}
        alt="weatherIcon"
      />
      <h1 className={styles.temperature}>
        {/* Open-Meteo, système métrique */}
        {Math.round(weatherData.current.temperature_2m)}°C
      </h1>
      <p>
        {/* Open-Meteo, en français */}
        Ressenti {Math.round(weatherData.current.apparent_temperature)}°C
      </p>
    </div>
  );
};
