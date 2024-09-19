"use client";

import WeatherPage from "@/components/WeatherPage";
import { useEffect, useState } from "react";
// import { useRouter } from "next/router";

export default function Page({ params }: { params: { city: string } }) {
  // https://docs.tomorrow.io/reference/realtime-weather
  const cityNameEdited = params.city.replace("_", " ");
  const [weather, setWeather] = useState({
    temperature: 0,
    description: "Clear sky",
  });

  useEffect(() => {
    fetch(`/api/getWeather?city=${cityNameEdited}`)
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
      });
  }, [cityNameEdited]);

  return (
    <WeatherPage
      city={cityNameEdited}
      temp={weather.temperature}
      description={weather.description}
    />
  );
}
