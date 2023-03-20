
import pigscores from "./pigscores";

type PigImageProps = {
  index: number;
};

const PigImage = ({ index }: PigImageProps) => {
  if (index > pigscores.length - 1) {
    throw new Error("Invalid pig");
  }
  return (
      <div>

        <div className="p-12 mx-auto">
          <span className="mx-auto text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl"> Pig Roll! </span>
          <p className="mx-auto my-12 text-base text-gray-500 lading-relaxed">You rolled a {pigscores[index].name}</p>
          <span className="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase"> That is worth {pigscores[index].score} points! </span>

          <strong className="flex items-end justify-center mx-auto mt-8 leading-none text-center">
            <img src={pigscores[index].url} />
          </strong>
        </div>
      </div>

  );
  return (
    <>
      
      
      
    </>
  );
};

export default PigImage;