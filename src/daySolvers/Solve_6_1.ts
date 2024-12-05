import ISolver from "@/Interfaces/ISolver";

export default class Solve_6_1 implements ISolver {

    time = 0;

    solve(input: string): string {

        let lines = input.split("\n")
        let sum = 0;


        lines: for (let i = 0; i < lines.length; i++) {
            let line = lines[i];

            
        }

    
        return `${input} -> day 6.1`;
    }

    getTime(): string {
        return this.time + 'ms';
    }
}