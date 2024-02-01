import { useEffect, useState } from "react";
import "./DailyQuote.css";

const DailyQuote = ({ allQuotes, allBackgrounds }) => {
  const [dailyQuote, setDailyQuote] = useState({});
  const [dailyBackground, setDailyBackground] = useState({});

  useEffect(() => {
    if (allQuotes.length > 0) {
      setDailyQuote(allQuotes[7]);
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
      <div className="bg-gray-900 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 border border-gray-100 p-14">
        <div className="py-6">
          <h1 className="text-6xl text-center text-orange-300 font-extrabold ">
            Spark of the Day!
          </h1>
        </div>
        <div className="py-6">
          <h2 className="text-3xl text-center text-orange-300 font-bold italic">
            "{dailyQuote.content}"
          </h2>
        </div>
        <div className="py-6 grid grid-cols-2 items-center">
          <div className="flex justify-end items-center">
            <p className="text-2xl text-orange-300 font-semibold italic px-2">
              - {dailyQuote.author}
            </p>
          </div>
          <div className="flex justify-start items-center">
            <img
              className="px-2 max-h-28 rounded-full"
              src={dailyQuote.image}
              alt={dailyQuote.author}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyQuote;
