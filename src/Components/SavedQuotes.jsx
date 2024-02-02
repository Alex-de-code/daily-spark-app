import { useState, useEffect } from "react";

function SavedSparks({ allQuotes }) {
  //   const [allCategories, setAllCategories] = useState([]); //created a state to store the categories of each card
  const [quotes, setQuotes] = useState([]); // created a state for quote cards that will render to page based on category

  const quoteCategories = allQuotes
    .map((quote) => quote.category)
    .filter(
      (category, index, categories) => categories.indexOf(category) === index //filter through the new array created with .map() which is categories and check the first instance or index of a category which is then made strictly equal to an index of the new filtered array
    )
    .sort(); // sort category names in alphabetical order in alphabetical order

  const selectCategory = (category) => {
    const filteredCategoryList = allQuotes.filter(
      (quote) => quote.category === category
    );
    setQuotes(filteredCategoryList);
  };

  return (
    <div>
      <div className="py-16 px-12 bg-zinc-400">
        <h1 className="bg-red-300 pb-6 font-bold text-4xl flex justify-center">
          Categories:
        </h1>
        <div
          className="flex flex-wrap flex-row justify-center gap-x-12
      gap-y-7 items-center bg-orange-300"
        >
          {quoteCategories.map((category) => (
            <button
              key={category}
              className="px-24 bg-blue-500 rounded-lg py-2 shadow-lg hover:bg-white"
              onClick={() => selectCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <div className="bg-white py-12 px-12" key={quotes.category}>
        {quotes.map((quote) => (
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
        ))}
      </div>
    </div>
  );
}

export default SavedSparks;
