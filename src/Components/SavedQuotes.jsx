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
      <div className="py-8 px-8 bg-stone-300 border-4 border-stone-400">
        <h1 className="bg-stone-300 pb-6 font-bold text-4xl flex justify-center">
          Categories:
        </h1>
        <div
          className="flex flex-wrap flex-row justify-center gap-x-12
      gap-y-7 items-center bg-stone-300"
        >
          {quoteCategories.map((category) => (
            <button
              key={category}
              className="px-24 bg-stone-100 rounded-lg py-2 shadow-lg hover:bg-stone-400"
              onClick={() => selectCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <div className="grid-rows-1 flex justify-end">
        <button
          className=" mr-12 mt-8 px-12 py-2 shadow-lg hover:bg-orange-400 bg-orange-300 rounded-lg"
          onClick={() => setCards(allQuotes)}
        >
          All Sparks
        </button>
      </div>

      <div
        className="bg-white py-8 px-12 pb-24 max-h-full w-full grid grid-cols-3 gap-6 overflow-y-scroll"
        key={cards.category}
      >
        {cards.map((quote) => (
          <div
            className=" bg-stone-500 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border-2 border-orange-200 h-auto"
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
