import { Link } from "react-router-dom";
import MakeASpark from "./CreateQuote";



const Nav = () => {
  return (
    <>
  <div className="flex-wrap justify-evenly items-center bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-200 via-red-200 to-yellow-100">
    <h2 className="text-2xl text-shadow cursor-pointer"><Link to="/">All Sparks !</Link></h2>
    <ul className="flex justify-between">
      <li className="flex-1 text-center hover:text-green-100 text-shadow-sm cursor-pointer drop-shadow-md scale-90"><Link to="src/SavedQuotes"> Your Sparks</Link></li>
      <li className="flex-1 text-center hover:text-green-100 text-shadow-sm cursor-pointer drop-shadow-md scale-90"><Link to="CreateQuote">Make a Spark</Link></li>
      <li className="flex-1 text-center hover:text-green-100 text-shadow-sm cursor-pointer drop-shadow-md scale-90"><Link to="src/Favorite">Favorite Sparks</Link> </li>
    </ul>

  </div>
  </>
)
};

export default Nav;
