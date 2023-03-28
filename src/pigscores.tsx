
import leaningjowler from "./assets/leaningjowler.png";
import razorback from "./assets/razorback.png";
import trotter from "./assets/trotter.png";
import snouter from "./assets/snouter.png";
import sider from "./assets/sider.png";
import piggyback from "./assets/piggy back.png";

export type PigScore = {
  name: string;
  score: number;
  url: string;
  double: number;
  probability: number;
};

const pigscores: Array<PigScore> = [
  { name: "Piggy Back", score: 1000, url: piggyback, double: 1000, probability: 1 },
  { name: "Leaning Jowler", score: 15, url: leaningjowler, double: 60, probability: 5 },
  { name: "Razorback", score: 5, url: razorback, double: 20, probability: 15 },
  { name: "Trotter", score: 5, url: trotter, double: 20, probability: 15 },
  { name: "Snouter", score: 10, url: snouter, double: 40, probability: 10 },
  { name: "Sider", score: 1, url: sider, double: 2, probability: 25 },
];

export default pigscores;
