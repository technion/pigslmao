
import {PigScore} from "./pigscores";

const PigImage = ( pig : PigScore ) => {

  return (
      <div>

        <div className="p-12 mx-auto">
          <p className="mx-auto my-2 text-base text-gray-500 lading-relaxed">You rolled a {pig.name}</p>
          <span className="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase"> That is worth {pig.score} points! </span>

          <strong className="flex items-end justify-center mx-auto mt-8 leading-none text-center">
            <img src={pig.url} />
          </strong>
        </div>
      </div>

  );
};

export default PigImage;