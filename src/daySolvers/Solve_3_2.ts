import ISolver from "@/Interfaces/ISolver";

export default class Solve_3_2 implements ISolver {

    time = 0;

    solve(input: string): string {

        let lines = input.split("\n")

        lines: for (let i = 0; i < lines.length; i++) {
            let line = lines[i];


            let elements = line.split(' ').filter((num) => num != '');
            let nums = elements.map((num) => parseInt(num)).filter((num) => !isNaN(num));

            elements: for (let i = 0; i < nums.length - 1; i++) {
                let n = nums[i];


               
            }


        }


    }

    getTime(): string {
        return this.time + 'ms';
    }
}