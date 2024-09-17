import Image from "next/image";
import { FC } from "react";

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

const WeatherIconMap: Record<string, WeatherIcon> = {
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

type Weather = {
  city: string;
  temp: number;
  description: string;
};

const WeatherPage: FC<Weather> = (weather) => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 flex items-center justify-center">
      <div className="max-w-5xl w-full grid grid-cols-2 gap-4 p-6">
        {/* Left Column: City Image with Name */}
        <div className="relative h-96">
          <Image
            src={`/images/${weather.city.toLowerCase()}.jpg`}
            alt={`Image of ${weather.city}`}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          {/* City Name Overlay */}
          <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white py-2 text-center">
            <h1 className="text-5xl font-bold">{weather.city}</h1>
          </div>
        </div>

        {/* Right Column: Weather Information */}
        <div className="flex flex-col justify-center items-center items-start p-6 bg-white bg-opacity-80 rounded-lg shadow-lg">
          {/* Weather Icon */}
          <Image
            src={`http://openweathermap.org/img/wn/${
              WeatherIconMap[weather.description]
            }@2x.png`}
            alt={weather.description}
            width={100}
            height={100}
            className="mb-4"
          />

          {/* Temperature */}
          <p className="text-4xl font-bold text-gray-800 mb-2">
            {weather.temp}°C
          </p>

          {/* Weather Description */}
          <p className="text-lg text-gray-600 capitalize">
            {weather.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;
