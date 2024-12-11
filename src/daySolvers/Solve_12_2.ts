import ISolver from "@/Interfaces/ISolver";

export default class Solve_12_2 implements ISolver {

    time = 0;

    solve(input: string): string {

        let sum = 0;

        let mtx = input.split("\n").map(x => x.split(""));
        let len = mtx.length;

        lines: for (let i = 0; i < len; i++) {
            elements: for (let j = 0; j < len; j++) {
                let element = mtx[i][j];

            }
        }


        return sum.toString() + ` - ${input} - dolver 12.2`;
    }


    getTime(): string {
        return this.time + 'ms';
    }
}