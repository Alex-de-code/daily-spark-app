import { Link } from "react-router-dom";
import SparkSVG from "./SparkSVG";

const PopularQuotes = ({ allQuotes }) => {
  return (
    <div className="h-auto bg-gradient-to-b from-black via-zinc-600 to-black">
      <div className="py-8">
        <h1 className=" py-8 text-6xl text-center text-orange-300 font-extrabold">
          Popular Sparks
        </h1>
      </div>
      <div className="text-orange-300 grid xs:grid-cols-1 m:grid-cols-3 pt-4 pb-16 max-w-half mx-8 gap-8">
        {allQuotes.map(
          (quote, index) =>
            (index === 0 || index === 10 || index === 18) && (
              <div
                className="h-full w-full bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 grid grid-rows-auto"
                key={quote.id}
              >
                <div className="grid grid-cols-10 p-3">
                  <div className="col-span-4"></div>{" "}
                  {/* Empty div for first two columns */}
                  <div className="col-span-5">
                    <img
                      className="px-2 max-h-28 rounded-full"
                      src={quote.image}
                      alt={quote.author}
                    />
                  </div>
                  <div className="col-span-1">
                    <SparkSVG />
                  </div>
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
        <div className="flex justify-end mx-8 my-3 font-semibold">
          <p className="text-orange-300 text-xl">Enjoy sparks like these?</p>
        </div>
        <div className="flex justify-end">
          <Link to={"/src/SavedQuotes"}>
            <button className="bg-orange-300 hover:bg-white text-black font-bold py-2 px-4 rounded-full mx-8 text-xl">
              Click here to see more!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularQuotes;
