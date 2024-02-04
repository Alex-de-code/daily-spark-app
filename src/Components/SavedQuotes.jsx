import { useState, useEffect } from "react";

function SavedSparks({ allQuotes }) {
  const [cards, setCards] = useState([]); // created a state for quote cards that will render to page based on category

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
    setCards(filteredCategoryList);
  };

  useEffect(() => {
    setCards(allQuotes);
  }, [allQuotes]); // this setsCards of page to render allQuotes on page so users can see the sparks, then it re-renders everytime allQuotes is changed

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
      <div
        className="bg-white py-12 px-12 max-h-full w-full grid grid-cols-3 gap-6 overflow-y-scroll"
        key={cards.category}
      >
        {cards.map((quote) => (
          <div
            className=" bg-stone-500 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 h-auto"
            key={quote.id}
          >
            <div className="flex justify-center py-5">
              <img
                className=" max-h-24 w-auto rounded-full"
                src={quote.image}
                alt={quote.author}
              />
            </div>
            <div className="px-5 py-3 text-center italic text-2xl font-medium">
              "{quote.content}"
            </div>
            <div className="text-xl font-medium text-center py-4 ">
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
