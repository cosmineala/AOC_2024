import ISolver from "@/Interfaces/ISolver";
import { registerSolver } from "@/factories/solverFactory";

export default class SolveDay1Part1 implements ISolver {
    
    time = 0;

    solve(input: string): string {
        const numbers = input.split('\n').map(Number);
        for (let i = 0; i < numbers.length; i++) {
            for (let j = i + 1; j < numbers.length; j++) {
                if (numbers[i] + numbers[j] === 2020) {
                    return (numbers[i] * numbers[j]).toString();
                }
            }
        }
        return 'No solution found';
    }

    getTime(): string {
        return this.time + 'ms';
    }
}

registerSolver(1, 1, new SolveDay1Part1());