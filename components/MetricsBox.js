import { degToCompass } from "../services/converters";
import { getTimeFromISO } from "../services/helpers";
import { MetricsCard } from "./MetricsCard";
import styles from "./MetricsBox.module.css";

export const MetricsBox = ({ weatherData }) => {
  return (
    <div className={styles.wrapper}>
      <MetricsCard
        title={"Humidité"}
        iconSrc={"/icons/humidity.png"}
        metric={weatherData.current.relative_humidity_2m}
        unit={"%"}
      />
      <MetricsCard
        title={"Vitesse du vent"}
        iconSrc={"/icons/wind.png"}
        metric={weatherData.current.windspeed_10m}
        unit={"km/h"}
      />
      <MetricsCard
        title={"Direction du vent"}
        iconSrc={"/icons/compass.png"}
        metric={degToCompass(weatherData.current.winddirection_10m)}
      />
      <MetricsCard
        title={"Précipitations"}
        iconSrc={"/icons/binocular.png"}
        metric={weatherData.current.precipitation}
        unit={"mm"}
      />
      <MetricsCard
        title={"Lever du soleil"}
        iconSrc={"/icons/sunrise.png"}
        metric={getTimeFromISO(weatherData.daily.sunrise[0])}
        unit={""}
      />
      <MetricsCard
        title={"Coucher du soleil"}
        iconSrc={"/icons/sunset.png"}
        metric={getTimeFromISO(weatherData.daily.sunset[0])}
        unit={""}
      />
    </div>
  );
};
