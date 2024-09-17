import { WeatherCodeToDescription } from "@/helpers/constants";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const city = searchParams.get("city") || "New York";
  const apiUrl = `https://api.tomorrow.io/v4/weather/realtime?location=${city.toLocaleLowerCase()}&units=imperial&apikey=${
    process.env.TOMORROW_API_KEY
  }`;
  const response = await fetch(apiUrl);
  const { data } = await response.json();
  console.log(data);
  const weather = {
    temperature: data.values.temperature,
    description: WeatherCodeToDescription[data.values.weatherCode],
  };
  return new Response(JSON.stringify(weather));
}
