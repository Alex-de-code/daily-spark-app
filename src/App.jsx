import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Landing from "./Components/Landing";
import Nav from "./Components/Nav";
import MakeASpark from "./Components/CreateQuote";
import SavedSparks from "./Components/SavedQuotes";
import Footer from "./Components/Footer";
import { getAllQuotes, getAllBackgrounds } from "../data/fetch";
import { AboutTheDevs } from "./Components/AboutTheDevs";

function App() {
  const [allQuotes, setAllQuotes] = useState([]);
  const [allBackgrounds, setAllBackgrounds] = useState([]);

  useEffect(() => {
    getAllQuotes().then((quotes) => {
      setAllQuotes(quotes);
    });

    getAllBackgrounds().then((backgrounds) => {
      setAllBackgrounds(backgrounds);
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <Routes>
        <Route
          path="/src/SavedQuotes"
          element={<SavedSparks allQuotes={allQuotes} />}
        />
        <Route path="/CreateQuote" element={<MakeASpark />} />
        <Route path="/AboutTheDevs" element={<AboutTheDevs />} />
        <Route
          path="/"
          element={
            <Landing allQuotes={allQuotes} allBackgrounds={allBackgrounds} />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
