import DailyQuote from "./DailyQuote";
import PopularQuotes from "./PopularQuotes";

const Landing = ({ allQuotes, allBackgrounds }) => {
  return (
    <div className="bg-black">
      <DailyQuote allQuotes={allQuotes} allBackgrounds={allBackgrounds} />
      <PopularQuotes allQuotes={allQuotes} />
    </div>
  );
};

export default Landing;
