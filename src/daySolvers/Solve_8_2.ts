import ISolver from "@/Interfaces/ISolver";

export default class Solve_8_2 implements ISolver {

    time = 0;

    solve(input: string): string {

        let sum = 0;

        let lines = input.split("\n");

        line: for (let i = 0; i < lines.length; i++) {
            let line = lines[i];
          

        }

        return input + ' solver day 8.2';
    }

    getTime(): string {
        return this.time + 'ms';
    }
}