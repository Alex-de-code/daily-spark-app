import { Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import { getAllData } from "../data/fetch";
import { useEffect, useState } from "react";

function App() {
  const [allQuotes, setAllQuotes] = useState([]); //state of Quotes
  const [allBackgrounds, setAllBackgrounds] = useState([]); //state of Backgrounds

  useEffect(() => {
    setAllQuotes(getAllData("quotes", setAllQuotes, setAllBackgrounds)); // should get quotes data
    setAllBackgrounds(
      getAllData("backgrounds", setAllQuotes, setAllBackgrounds)
    ); // should get backgrounds data
  }, []);

  console.log(allQuotes);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
