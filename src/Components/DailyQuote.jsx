import { useEffect, useState } from "react";

const DailyQuote = ({ allQuotes, allBackgrounds }) => {
  const [dailyQuote, setDailyQuote] = useState({});
  const [dailyBackground, setDailyBackground] = useState({});
  const [date, setDate] = useState("");
  const [dateNumber, setDateNumber] = useState(0);

  useEffect(() => {
    if (allQuotes.length > 0 && dateNumber > 0) {
      // setDailyQuote(allQuotes[7]);
      setDailyQuote(allQuotes[dateNumber]);
      // const splittedDate = date.split(" ");
      // splittedDate[1].replace(",", "");
      // setDailyQuote(splittedDate[1]);
    }

    if (allBackgrounds.length > 0) {
      const randomIndex = Math.floor(Math.random() * allBackgrounds.length);
      setDailyBackground(allBackgrounds[randomIndex]);
      setDate(displayDate());
    }
  }, [allQuotes, allBackgrounds, dateNumber]);

  function displayDate() {
    const months = {
      1: "January",
      2: "February",
      3: "March",
      4: "April",
      5: "May",
      6: "June",
      7: "July",
      8: "August",
      9: "September",
      10: "October",
      11: "November",
      12: "December",
    };
    const today = new Date();
    const year = today.getFullYear();
    const date = today.getDate();
    const month = today.getMonth() + 1;
    setDateNumber(date - 1);

    return `${months[month]} ${date}, ${year}`;
  }

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
        <div className="py-6 flex justify-center">
          <h1 className="text-6xl text-center text-orange-300 font-extrabold ">
            Spark of the Day!
          </h1>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="3em"
            viewBox="0 0 448 512"
            className="m-1.5"
          >
            <path
              fill="#FFD43B"
              d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"
            />
          </svg>
        </div>
        <div>
          <h1 className="text-3xl text-center text-orange-300 font-extrabold ">
            {date}
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
