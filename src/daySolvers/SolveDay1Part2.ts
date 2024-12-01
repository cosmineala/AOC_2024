import ISolver from "@/Interfaces/ISolver";
import { registerSolver } from "@/factories/solverFactory";

export default class SolveDay1Part2 implements ISolver {

    time = 0; // 00:12:52 - 00:07:58 = 00:04:54

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

        // map of number count for l2
        let map = new Map();
        l2.forEach((n) => {
            if (map.has(n)) {
                map.set(n, map.get(n) + 1);
            } else {
                map.set(n, 1);
            }
        });


        l1.forEach((n, i) => {
            let freq = map.get(n);
            if (!freq) {
                freq = 0;
            }
            //  // abs of the difference between the two numbers
            //  let diff = Math.abs(n - n2);
            sum += n * freq;
        });

        return sum.toString();

    }

    getTime(): string {
        return this.time + 'ms';
    }
}