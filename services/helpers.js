//Open-Meteo retourne date au format "2026-03-15T14:30"
export const getTime = (isoString) => isoString.split("T")[1];

//en français pour le contexte France !
export const getWeekDay = (isoString) => {
  const weekday = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];
  return weekday[new Date(isoString).getDay()];
};
