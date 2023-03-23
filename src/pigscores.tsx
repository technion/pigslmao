
import leaningjowler from "./assets/leaningjowler.jpg";
import razorback from "./assets/razorback.jpg";
import trotter from "./assets/trotter.jpg";
import snouter from "./assets/snouter.jpg";
import sider from "./assets/sider.jpg";

type PigScore = {
  name: string;
  score: number;
  url: string;
  double: number;
};

const pigscores: Array<PigScore> = [
  { name: "Leaning Jowler", score: 15, url: leaningjowler, double: 15 },
  { name: "Razorback", score: 5, url: razorback, double: 20 },
  { name: "Trotter", score: 5, url: trotter, double: 20 },
  { name: "Snouter", score: 10, url: snouter, double: 40 },
  { name: "Sider", score: 1, url: sider, double: 2 },
];

export default pigscores;