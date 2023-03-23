import { useState } from "react";
import PigImage from "./pigimage";
import pigscores from "./pigscores";

function App() {
  const [total, setTotal] = useState(0);
  const roll1 = Math.floor(Math.random() * (pigscores.length));
  const roll2 = Math.floor(Math.random() * (pigscores.length));

  const score = (roll1 == roll2 ) ? pigscores[roll1].double : pigscores[roll1].score + pigscores[roll2].score;

  return (
    <div className="App">
      <nav id="header" className="w-full z-30 top-0 text-white py-1 lg:py-6">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-2 lg:py-6">
          <div className="pl-4 flex items-center">
            <a
              className="text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              href="#"
            >
              <svg
                className="h-6 w-6 inline-block fill-current text-yellow-700"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V0L8.11 5.87 3 12h4v8L17 8h-4z" />
              </svg>
              Bolt App
            </a>
          </div>

          <div className="block lg:hidden pr-4">
            <button
              id="nav-toggle"
              className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-green-500 appearance-none focus:outline-none"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>

          <div
            className="w-full lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 text-black p-4 lg:p-0 z-20"
            id="nav-content"
          >
            <a href="https://github.com/technion/pigslmao">
              <button
                id="navAction"
                className="mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded mt-4 lg:mt-0 py-4 px-8 shadow opacity-75"
              >
                Source on Github
              </button>
            </a>
          </div>
        </div>
      </nav>

      <div className="container mx-auto h-screen">
        <div className="text-center px-3 lg:px-0">
          <h1 className="my-4 text-2xl md:text-3xl lg:text-5xl font-black leading-tight">
            Play Pigs LMAO
          </h1>
          <p className="leading-normal text-gray-800 text-base md:text-xl lg:text-2xl mb-8">
            A totally original game,
          </p>

          <button
            className="mx-auto lg:mx-8 hover:underline text-gray-800 font-extrabold rounded my-2 md:my-6 py-4 px-8 shadow-lg w-48 bg-sky-500"
            onClick={() => setTotal((prevtotal) => prevtotal + score)}
          >
            Roll Again
          </button>
          <button
            className="mx-auto lg:mx-8 hover:underline text-gray-800 font-extrabold rounded my-2 md:my-6 py-4 px-8 shadow-lg w-48 bg-emerald-300"
            onClick={() => setTotal((prevtotal) => prevtotal + score)}
          >
            This score: {score}
            <br />
            Total score: {total + score}
          </button>
        </div>

        <div className="items-center w-full mx-auto content-end">
          <section>
            <div className="relative items-center w-full py-12 mx-auto md:px-12 lg:px-16 max-w-7xl">
              <div className="grid grid-cols-1 gap-12 text-center lg:gap-24 lg:grid-cols-2">
                <PigImage index={roll1} />
                <PigImage index={roll2} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
