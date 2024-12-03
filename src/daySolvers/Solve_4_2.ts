import { registerSolver } from "@/factories/solverFactory";
import ISolver from "@/Interfaces/ISolver";

export default class Solve_4_2 implements ISolver {

    time = 0;

    solve(input: string): string {

        let lines = input.split("\n")

        lines: for (let i = 0; i < lines.length; i++) {
            let line = lines[i];

            // let items = line.split(" ").filter(x => x != "");
            // items: for (let j = 0; j < items.length; j++) {
            //     let item = items[j];
            
            // }

            // let digits = line.match(/\d+/g);
            // for (let j = 0; j < digits.length; j++) {
            //     let digit = digits[j];

            // }

            // let entries = line.matchAll(/(\w+)/g);
            // for( let entry of entries) {
            //     let [match, g1, g2] = entry;

            // }
            
        }

        return `${input} + Day 4.2 not solved`;
            
    }

    getTime(): string {
        return this.time + 'ms';
    }
}