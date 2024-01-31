import DailyQuote from "./DailyQuote";
import PopularQuotes from "./PopularQuotes";

const Landing = () => {
  return (
    <div className="bg-zinc-300">
      <DailyQuote />
      <PopularQuotes />
    </div>
  );
};

export default Landing;
