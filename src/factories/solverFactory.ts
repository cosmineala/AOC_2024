import Solve_10_1 from "@/daySolvers/Solve_10_1";
import Solve_10_2 from "@/daySolvers/Solve_10_2";
import Solve_11_1 from "@/daySolvers/Solve_11_1";
import Solve_11_2 from "@/daySolvers/Solve_11_2";
import Solve_12_1 from "@/daySolvers/Solve_12_1";
import Solve_12_2 from "@/daySolvers/Solve_12_2";
import Solve_2_1 from "@/daySolvers/Solve_2_1";
import Solve_2_2 from "@/daySolvers/Solve_2_2";
import Solve_3_1 from "@/daySolvers/Solve_3_1";
import Solve_3_2 from "@/daySolvers/Solve_3_2";
import Solve_4_1 from "@/daySolvers/Solve_4_1";
import Solve_4_2 from "@/daySolvers/Solve_4_2";
import Solve_5_1 from "@/daySolvers/Solve_5_1";
import Solve_5_2 from "@/daySolvers/Solve_5_2";
import Solve_6_1 from "@/daySolvers/Solve_6_1";
import Solve_6_2 from "@/daySolvers/Solve_6_2";
import Solve_7_1 from "@/daySolvers/Solve_7_1";
import Solve_7_2 from "@/daySolvers/Solve_7_2";
import Solve_8_1 from "@/daySolvers/Solve_8_1";
import Solve_8_2 from "@/daySolvers/Solve_8_2";
import Solve_9_1 from "@/daySolvers/Solve_9_1";
import Solve_9_2 from "@/daySolvers/Solve_9_2";
import SolveDay1Part1 from "@/daySolvers/SolveDay1Part1";
import SolveDay1Part2 from "@/daySolvers/SolveDay1Part2";
import ISolver from "@/Interfaces/ISolver";

export default function createSolver(day: number, part: number): ISolver {
    return (solvers.get(`${day}_${part}`) as () => ISolver)();
}

export function registerSolver(day: number, part: number, solver: () => ISolver) {
    solvers.set(`${day}_${part}`, solver);
}

const solvers = new Map<string, () => ISolver>();
registerSolver(1, 1, () => new SolveDay1Part1());
registerSolver(1, 2, () => new SolveDay1Part2());
registerSolver(2, 1, () => new Solve_2_1());
registerSolver(2, 2, () => new Solve_2_2());
registerSolver(3, 1, () => new Solve_3_1());
registerSolver(3, 2, () => new Solve_3_2());
registerSolver(4, 1, () => new Solve_4_1());
registerSolver(4, 2, () => new Solve_4_2());
registerSolver(5, 1, () => new Solve_5_1());
registerSolver(5, 2, () => new Solve_5_2());
registerSolver(6, 1, () => new Solve_6_1());
registerSolver(6, 2, () => new Solve_6_2());
registerSolver(7, 1, () => new Solve_7_1());
registerSolver(7, 2, () => new Solve_7_2());
registerSolver(8, 1, () => new Solve_8_1());
registerSolver(8, 2, () => new Solve_8_2());
registerSolver(9, 1, () => new Solve_9_1());
registerSolver(9, 2, () => new Solve_9_2());
registerSolver(10, 1, () => new Solve_10_1());
registerSolver(10, 2, () => new Solve_10_2());
registerSolver(11, 1, () => new Solve_11_1());
registerSolver(11, 2, () => new Solve_11_2());
registerSolver(12, 1, () => new Solve_12_1());
registerSolver(12, 2, () => new Solve_12_2());
