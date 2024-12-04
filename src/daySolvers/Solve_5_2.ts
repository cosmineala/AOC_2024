import ISolver from "@/Interfaces/ISolver";

export default class Solve_5_2 implements ISolver {

    time = 0;

    solve(input: string): string {

        let lines = input.split("\n")

        lines: for (let i = 0; i < lines.length; i++) {
            let line = lines[i];
          
            
        }

        return `${input} + Day 5.2 not solved`;
            
    }

    getTime(): string {
        return this.time + 'ms';
    }
}