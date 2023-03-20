
import leaningjowler from "./assets/leaningjowler.jpg";
import razorback from "./assets/razorback.jpg";
import trotter from "./assets/trotter.jpg";
import snouter from "./assets/snouter.jpg";
import sider from "./assets/sider.jpg";

type PigScore = {
  name: string;
  score: number;
  url: string;
};

const pigscores: Array<PigScore> = [
  { name: "Leaning Jowler", score: 15, url: leaningjowler },
  { name: "Razorback", score: 5, url: razorback },
  { name: "Trotter", score: 5, url: trotter },
  { name: "Snouter", score: 10, url: snouter },
  { name: "Sider", score: 0, url: sider },
];

export default pigscores;