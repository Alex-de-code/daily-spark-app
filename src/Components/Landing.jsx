import DailyQuote from "./DailyQuote";
import PopularQuotes from "./PopularQuotes";

const Landing = ({ allQuotes, allBackgrounds }) => {
  return (
    <div className="bg-zinc-400">
      <DailyQuote allQuotes={allQuotes} allBackgrounds={allBackgrounds} />
      <PopularQuotes />
    </div>
  );
};

export default Landing;
