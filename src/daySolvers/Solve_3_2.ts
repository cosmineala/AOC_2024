import ISolver from "@/Interfaces/ISolver";

export default class Solve_3_2 implements ISolver {

    time = 0; // 00:12:52 -> 3630 ( 00:12:52 - 00:07:58 = 00:04:54)

    solve(input: string): string {

        let sum = 0;
        let lines = input.split("\n")
        let doMul = true;

        lines: for (let i = 0; i < lines.length; i++) {
            let line = lines[i];

            // find all matches of mul(44,46) and get first and last number
            let matches = line.match(/(mul\((\d+),(\d+)\))|(do\(\))|(don't\(\))/g);
            if (matches) {
                for (let j = 0; j < matches.length; j++) {
                    console.log(matches[j]);
                    if (matches[j] == "don't()") {
                        doMul = false;
                        continue;
                    }
                    if (matches[j] == 'do()') {
                        doMul = true;
                        continue;
                    }
                    if (doMul) {
                        let match = matches[j];
                        console.log(match);
                        let nums = match.match(/(\d+)/g);
                        let n1 = parseInt(nums[0]);
                        let n2 = parseInt(nums[1]);
                        let result = n1 * n2;
                        sum += result;
                    }
                }
            }

            
        }
        return sum.toString();


    }

    getTime(): string {
        return this.time + 'ms';
    }
}