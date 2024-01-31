const Nav = () => {
  return (
    <>
  <div className="flex-wrap justify-evenly items-center bg-[conic-gradient(var(--tw-gradient-stops))] from-indigo-200 via-red-200 to-yellow-100">
    <h2 className="text-2xl">Daily Spark !</h2>
    <ul className="flex justify-between">
      <li className="flex-1 text-center">Your Sparks</li>
      <li className="flex-1 text-center">Make a Spark</li>
      <li className="flex-1 text-center">Favorite Sparks</li>
    </ul>
  </div>
  </>
)
};

export default Nav;
