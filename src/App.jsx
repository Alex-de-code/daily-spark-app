import { Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import { getAllQuotes, getAllBackgrounds } from "../data/fetch";
import { useEffect, useState } from "react";

function App() {
  const [allQuotes, setAllQuotes] = useState([]); //state of Quotes
  const [allBackgrounds, setAllBackgrounds] = useState([]); //state of Backgrounds

  useEffect(() => {
    getAllQuotes().then((quotes) => {
      setAllQuotes(quotes);
    });

    getAllBackgrounds().then((backgrounds) => {
      setAllBackgrounds(backgrounds);
    });
  }, []);

  return (
    <>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <Landing allQuotes={allQuotes} allBackgrounds={allBackgrounds} />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
