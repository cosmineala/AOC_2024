import ISolver from "@/Interfaces/ISolver";

export default class Solve_11_1 implements ISolver {

    time = 0;

    solve(input: string): string {

        let stones = input.split(" ").map(x => parseInt(x));

        let sum = 0;
        let endTimes = 25;

        function blink(stone: number, times: number): number {

            if (times == 0) {
                return 1;
            }
            times--;

            if (stone === 0) {
                return blink(1, times);
            }

            if (stone.toString().length % 2 === 0) {
                let half = stone.toString().length / 2;
                let firstHalf = parseInt(stone.toString().substring(0, half));
                let secondHalf = parseInt(stone.toString().substring(half));

                return blink(firstHalf, times) + blink(secondHalf, times);
            }

            return blink(stone * 2024, times);

        }

        sum = stones.reduce((acc, stone, index) => {
            console.log(acc);
            return acc + blink(stone, endTimes);
        }, 0);

        return sum.toString();
    }


    getTime(): string {
        return this.time + 'ms';
    }
}