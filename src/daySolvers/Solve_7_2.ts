import ISolver from "@/Interfaces/ISolver";

export default class Solve_7_2 implements ISolver {

    time = 0;

    solve(input: string): string {

        // < v > ^
        let sum = 0;

        let lines = input.split("\n");
        line: for (let i = 0; i < lines.length; i++) {
            let line = lines[i];
          
        }

        let matrix = input.split("\n").map(x => x.split(""));
        line: for (let i = 0; i < matrix.length; i++) {
            let line = matrix[i];
            element: for (let j = 0; j < line.length; j++) {
                let element = line[j];
                
            }
        }
        

        return input + " solver day 7.2";
    }

    getTime(): string {
        return this.time + 'ms';
    }
}