import Solve_2_1 from "@/daySolvers/Solve_2_1";
import Solve_2_2 from "@/daySolvers/Solve_2_2";
import SolveDay1Part1 from "@/daySolvers/SolveDay1Part1";
import SolveDay1Part2 from "@/daySolvers/SolveDay1Part2";
import ISolver from "@/Interfaces/ISolver";

export default function createSolver( day: number, part: number ): ISolver {
    return solvers.get(`${day}_${part}`) as ISolver;
}

export function registerSolver( day: number, part: number, solver: ISolver ) {
    solvers.set(`${day}_${part}`, solver);
}

const solvers = new Map<string, ISolver>();
registerSolver(1, 1, new SolveDay1Part1());
registerSolver(1, 2, new SolveDay1Part2());
registerSolver(2, 1, new Solve_2_1());
registerSolver(2, 2, new Solve_2_2());
