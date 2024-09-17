// components/WeatherCard.tsx

import Image from "next/image";
import { FC } from "react";

interface WeatherCardProps {
  city: string;
}

const WeatherCard: FC<WeatherCardProps> = ({ city }) => {
  // Simple image URL logic: This could be from a static file or an image hosting service
  const cityImageSrc = `/images/${city.toLowerCase()}.jpg`; // Assumes you have city images named like "newyork.jpg"

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-72 hover:scale-105 ease-in duration-100">
      {/* City Image */}
      <div className="relative h-48">
        <Image
          src={cityImageSrc}
          alt={`Image of ${city}`}
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover"
        />

        {/* City Name on Opaque Background */}
        <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-slate-200 py-2 pl-3">
          <h2 className="text-lg font-semibold">{city}</h2>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
