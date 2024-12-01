import ISolver from "@/Interfaces/ISolver";

export default class Solve_2_1 implements ISolver {

    time = 0; 

    solve(input: string): string {


        return '2.1 ' + input;
    }

    getTime(): string {
        return this.time + 'ms';
    }
}