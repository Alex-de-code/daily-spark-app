import { Link } from "react-router-dom";
import MakeASpark from "./CreateQuote";



const Nav = () => {
  return (
    <>
  <div className="flex-wrap justify-evenly items-center bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-200 via-red-200 to-yellow-100 ">
    <h2 className="text-4xl text-shadow cursor-pointer text-center italic font-mono mb-6 "><Link to="/">Daily Spark !</Link></h2>
    <ul className="flex justify-between">
      <li className="flex-1 text-center hover:text-green-100 text-shadow-sm cursor-pointer drop-shadow-md scale-90 mb-3"><Link to="src/SavedQuotes">Sparks</Link></li>
      <li className="flex-1 text-center hover:text-green-100 text-shadow-sm cursor-pointer drop-shadow-md scale-90 mb-3 mt-2"><Link to="CreateQuote">Make a Spark</Link></li>
      <li className="flex-1 text-center hover:text-green-100 text-shadow-sm cursor-pointer drop-shadow-md scale-90 mb-3"><Link to="src/Favorite">Favorite Sparks</Link> </li>
    </ul>

  </div>
  </>
)
};

export default Nav;
