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
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="bg-white py-12 px-12"></div>
    </div>
  );
}

export default SavedSparks;
