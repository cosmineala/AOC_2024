import ISolver from "@/Interfaces/ISolver";

export default class Solve_13_2 implements ISolver {

    time = 0;

    solve(input: string): string {

        let sum = 0;

        let mtx = input.split("\n").map(x => x.split(""));
        let len = mtx.length;
        lines: for (let i = 0; i < len; i++) {
            elements: for (let j = 0; j < len; j++) {
                let el = mtx[i][j];
            }
        }

        let lines = input.split("\n");
        lines: for (let i = 0; i < lines.length; i++) {
            let line = lines[i];
        }
      
        return sum.toString() + ` ${input} solve 13_2`;
    }


    getTime(): string {
        return this.time + 'ms';
    }
}