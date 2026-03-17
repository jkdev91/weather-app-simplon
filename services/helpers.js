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

export const getDescription = (code) => {
  if (code === 0) return "Ciel dégagé";
  if (code <= 2) return "Partiellement nuageux";
  if (code === 3) return "Nuageux";
  if (code <= 48) return "Brouillard";
  if (code <= 55) return "Bruine";
  if (code <= 65) return "Pluie";
  if (code <= 75) return "Neige";
  if (code <= 82) return "Averses";
  if (code <= 99) return "Orage";
  return "Conditions variables";
};

export const getIconName = (code, isDay = true) => {
  const suffix = isDay ? "d" : "n";

  if (code === 0) return `01${suffix}`; // ciel dégagé
  if (code <= 2) return `02${suffix}`; // partiellement nuageux
  if (code === 3) return `04${suffix}`; // nuageux
  if (code <= 48) return `50${suffix}`; // brouillard
  if (code <= 55) return `09${suffix}`; // bruine
  if (code <= 65) return `10${suffix}`; // pluie
  if (code <= 75) return `13${suffix}`; // neige
  if (code <= 82) return `09${suffix}`; // averses
  if (code <= 99) return `11${suffix}`; // orage
  return `01${suffix}`; // fallback
};
