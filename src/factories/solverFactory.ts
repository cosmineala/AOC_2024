import ISolver from "@/Interfaces/ISolver";

export default function createSolver( day: number, part: number ): ISolver {
    return solvers.get(`${day}_${part}`) as ISolver;
}

export function registerSolver( day: number, part: number, solver: ISolver ) {
    solvers.set(`${day}_${part}`, solver);
}

const solvers = new Map<string, ISolver>();

