import ISolver from "@/Interfaces/ISolver";
import { registerSolver } from "@/factories/solverFactory";

export default class SolveDay1Part1 implements ISolver {
    
    time = 0; // 00:07:58

    solve(input: string): string {

        // return 'DDS';
        let l1 = [];
        let l2 = [];
        let sum = 0;

        let res = input.split("\n").forEach((line) => {
            // first nomber in the line gets added to l1 and second line number gets added to l2
            // use regex to get the number
            l1.push(parseInt(line.match(/\d+/g)[0]));
            l2.push(parseInt(line.match(/\d+/g)[1]));
            
        });

        // sort lines
        l1.sort((a, b) => a - b);
        l2.sort((a, b) => a - b);

        l1.forEach((n,i) => {
            let n2 = l2[i];
            // abs of the difference between the two numbers
            let diff = Math.abs(n - n2);
            sum += diff;
        });

        return sum.toString();

    }

    getTime(): string {
        return this.time + 'ms';
    }
}