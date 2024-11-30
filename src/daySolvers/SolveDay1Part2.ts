import ISolver from "@/Interfaces/ISolver";
import { registerSolver } from "@/factories/solverFactory";

export default class SolveDay1Part2 implements ISolver {
    
    time = 0;

    solve(input: string): string {

        return input;
    }

    getTime(): string {
        return this.time + 'ms';
    }
}