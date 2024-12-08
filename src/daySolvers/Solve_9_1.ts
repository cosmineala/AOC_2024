import ISolver from "@/Interfaces/ISolver";

export default class Solve_9_1 implements ISolver {

    time = 0;

    solve(input: string): string {

        let sum = 0;

        let matrix = input.split("\n").map(x => x.split(""));
        let lines = input.split("\n");

        line: for (let i = 0; i < lines.length; i++) {
            let line = lines[i];
            

        }

        return input + " Solver 9_1";
    }

    getTime(): string {
        return this.time + 'ms';
    }
}