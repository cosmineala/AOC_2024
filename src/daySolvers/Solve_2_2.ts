import ISolver from "@/Interfaces/ISolver";

export default class Solve_2_2 implements ISolver {

    time = 0; 

    solve(input: string): string {


        return '2.2 ' + input;
    }

    getTime(): string {
        return this.time + 'ms';
    }
}