//Packages
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

// Components 
import Landing from "./Components/Landing";
import Nav from "./Components/Nav";
import MakeASpark from "./Components/CreateQuote";
import FavoriteQuotes from "./Components/Favorite";
import SavedSparks from "./Components/SavedQuotes";
import Footer from "./Components/Footer";
import { getAllQuotes, getAllBackgrounds } from "../data/fetch";
import { useEffect, useState } from "react";
import { AboutTheDevs } from "./Components/AboutTheDevs";

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
        <Route path="src/SavedQuotes" element={<SavedSparks />}/>
        <Route path="/CreateQuote" element={<MakeASpark />}/>
        <Route path="src/Favorite" element={<FavoriteQuotes />}/>
        <Route
          path="/"
          element={
            <Landing allQuotes={allQuotes} allBackgrounds={allBackgrounds} />
          }
        />
        <Route path="/aboutthedevs" element={<AboutTheDevs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
