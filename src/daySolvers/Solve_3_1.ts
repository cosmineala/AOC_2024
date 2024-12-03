import { registerSolver } from "@/factories/solverFactory";
import ISolver from "@/Interfaces/ISolver";

export default class Solve_3_1 implements ISolver {

    time = 0; // 00:07:58 ->  3482

    solve(input: string): string {

        let sum = 0;
        let lines = input.split("\n")

        lines: for (let i = 0; i < lines.length; i++) {
            let line = lines[i];

            // find all matches of mul(44,46) and get first and last number
            let matches = line.match(/mul\((\d+),(\d+)\)/g);
            if (matches) {
                for (let j = 0; j < matches.length; j++) {
                    // console.log(matches[j]);
                    let match = matches[j];
                    let nums = match.match(/(\d+)/g);
                    let n1 = parseInt(nums[0]);
                    let n2 = parseInt(nums[1]);
                    console.log(n1, n2);
                    let result = n1 * n2;
                    sum += result;
                }
            }
            
        }
        return sum.toString();
            
    }

    getTime(): string {
        return this.time + 'ms';
    }
}