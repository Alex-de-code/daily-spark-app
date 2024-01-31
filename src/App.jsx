import { Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

function App() {
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
