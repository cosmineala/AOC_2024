import ISolver from "@/Interfaces/ISolver";

export default class Solve_11_1 implements ISolver {

    time = 0;

    solve(input: string): string {

       

        let sum = 0;
        let mtx = input.split("\n").map(x => x.split("").map(x => parseInt(x)));
        const size = mtx.length;

        lines: for (let i = 0; i < size; i++) {
            elements: for (let j = 0; j < size; j++) {
                let element = mtx[i][j];

            }
        }

        
        return sum.toString() + " Solve 11.1 " + input;
    }

    getTime(): string {
        return this.time + 'ms';
    }
}