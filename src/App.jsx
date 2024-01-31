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

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="src/SavedQuotes" element={<SavedSparks />}/>
        <Route path="/CreateQuote" element={<MakeASpark />}/>
        <Route path="src/Favorite" element={<FavoriteQuotes />}/>
        <Route path="/" element={<Landing />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
