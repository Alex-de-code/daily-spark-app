import { useEffect, useState } from "react";
import "./DailyQuote.css";

const DailyQuote = ({ allQuotes, allBackgrounds }) => {
  const [dailyQuote, setDailyQuote] = useState({});
  const [dailyBackground, setDailyBackground] = useState({});

  useEffect(() => {
    if (allQuotes.length > 0) {
      setDailyQuote(allQuotes[5]);
    }
  }, [allQuotes]);

  useEffect(() => {
    if (allBackgrounds.length > 0) {
      const randomIndex = Math.floor(Math.random() * allBackgrounds.length);
      setDailyBackground(allBackgrounds[randomIndex]);
    }
  }, [allBackgrounds]);

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-no-repeat"
      style={{
        backgroundImage: dailyBackground.image
          ? `url(${dailyBackground.image})`
          : "",
      }}
    >
      <div className="bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 p-14">
        <div className="py-6">
          <h1 className="text-6xl text-center text-orange-200">
            Quote of the Day!
          </h1>
        </div>
        <div className="py-6">
          <h2 className="text-3xl text-center text-orange-200">
            "{dailyQuote.content}"
          </h2>
        </div>
        <div className="py-6">
          <p className=" text-2xl text-center text-orange-200">
            -{dailyQuote.author}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DailyQuote;
