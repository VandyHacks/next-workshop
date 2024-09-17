// pages/index.tsx

import Head from "next/head";
import WeatherCard from "../components/WeatherCard"; // Assuming you have this component
import { FC } from "react";
import Link from "next/link";

const cities = ["New York", "London", "Tokyo", "Paris", "Sydney"]; // Example city list

const Home: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500">
      <Head>
        <title>Next.js Weather App</title>
        <meta name="description" content="A cool Next.js weather app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center py-10">
        {/* Title */}
        <h1 className="text-5xl font-bold text-white my-28">
          Next.js Weather App
        </h1>

        {/* Weather Cards - Flexbox Row */}
        <div className="flex flex-wrap justify-center gap-8">
          {cities.map((city) => (
            <Link href={`/${city.replaceAll(" ", "_")}`} key={city}>
              <WeatherCard city={city} />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
