import { Link } from "react-router-dom";

const PopularQuotes = ({ allQuotes }) => {
  return (
    <div className="h-auto bg-gradient-to-b from-black via-zinc-600 to-black">
      <div className="py-8">
        <h1 className="text-6xl text-center text-orange-300 font-extrabold">
          Popular Sparks
        </h1>
      </div>
      <div className="text-orange-300 grid grid-cols-3 py-16 max-w-half mx-8 gap-8">
        {allQuotes.map(
          (quote, index) =>
            (index === 0 || index === 10 || index === 13) && (
              <div
                className="h-full w-full bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 grid grid-rows-auto"
                key={quote.id}
              >
                <div className="flex justify-center py-5">
                  <img
                    className="px-2 max-h-28 rounded-full"
                    src={quote.image}
                    alt={quote.author}
                  />
                </div>
                <div className="px-5 py-5 text-center italic text-2xl font-medium">
                  "{quote.content}"
                </div>
                <div className="text-2xl font-medium text-center py-5 ">
                  <h1 className="italic"> - {quote.author}</h1>
                  <p className="">Category: {quote.category}</p>
                </div>
              </div>
            )
        )}
      </div>
      <div>
        <Link to={"/src/Favorite"}>
          <p className="text-orange-300 flex justify-end mx-8 text-xl underline hover:text-white">
            Click here to see more!
          </p>
        </Link>
      </div>
    </div>
  );
};

export default PopularQuotes;
