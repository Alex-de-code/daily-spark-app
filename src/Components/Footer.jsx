import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="">
      <section className="bg-gradient-to-b from-black via-zinc-500 to-zinc-200">
        <div className="max-w-screen-xl px-4 py-24 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            <div className="px-5 py-2">
              <Link
                to={`/aboutthedevs`}
                className="text-base leading-6 text-gray-200 hover:text-yellow-300"
              >
                About
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link
                to="/"
                className="text-base leading-6 text-gray-200 hover:text-yellow-300"
              >
                Home
              </Link>
            </div>
          </nav>
          <div className="flex justify-center mt-8 space-x-6">
            <Link to="https://github.com/Alex-de-code/daily-spark-app">
              <BsGithub className="text-gray-200 hover:text-yellow-400 text-2xl" />
            </Link>
          </div>
          <p className="mt-8 text-base leading-6 text-center text-gray-200">
            Copyright © 2024 Herb Matrix Code Rhythm, Inc.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
