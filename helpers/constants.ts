enum WeatherIcon {
  ClearSky = "01d",
  FewClouds = "02d",
  ScatteredClouds = "03d",
  BrokenClouds = "04d",
  ShowerRain = "09d",
  Rain = "10d",
  Thunderstorm = "11d",
  Snow = "13d",
  Mist = "50d",
}

export const WeatherIconMap: Record<string, WeatherIcon> = {
  "Clear sky": WeatherIcon.ClearSky,
  "Few clouds": WeatherIcon.FewClouds,
  "Scattered clouds": WeatherIcon.ScatteredClouds,
  "Broken clouds": WeatherIcon.BrokenClouds,
  "Shower rain": WeatherIcon.ShowerRain,
  Rain: WeatherIcon.Rain,
  Thunderstorm: WeatherIcon.Thunderstorm,
  Snow: WeatherIcon.Snow,
  Mist: WeatherIcon.Mist,
};

export const WeatherCodeToDescription: Record<string, string> = {
  "1000": "Clear sky",
  "1100": "Few clouds",
  "1101": "Few clouds",
  "1103": "Few clouds",
  "1102": "Scattered clouds",
  "1001": "Broken clouds",
  "4000": "Shower rain",
  "4200": "Shower rain",
  "4001": "Rain",
  "4201": "Rain",
  "8000": "Thunderstorm",
  "5001": "Snow",
  "5100": "Snow",
  "5000": "Snow",
  "5101": "Snow",
  "2100": "Mist",
  "2000": "Mist",
};
