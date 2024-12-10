import ISolver from "@/Interfaces/ISolver";

export default class Solve_10_1 implements ISolver {

    time = 0;

    solve(input: string): string {

        let sum = 0;
        let lines = input.split("");

        lines: for (let i = 0; i < lines.length; i++) {
            let line = lines[i];

        }

        return input + ' solver 10_1';
    }

    getTime(): string {
        return this.time + 'ms';
    }
}