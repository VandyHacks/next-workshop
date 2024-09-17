import Image from "next/image";
import { FC } from "react";
import { WeatherIconMap } from "@/helpers/constants";

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
            {weather.temp}°F
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
