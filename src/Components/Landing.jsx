import DailyQuote from "./DailyQuote";
import PopularQuotes from "./PopularQuotes";

const Landing = () => {
  return (
    <div className="bg-zinc-400">
      <DailyQuote />
      <PopularQuotes />
    </div>
  );
};

export default Landing;
