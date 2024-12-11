import ISolver from "@/Interfaces/ISolver";

export default class Solve_11_2 implements ISolver {

    time = 0;

    solve(input: string): string {

        let stones = input.split(" ").map(x => parseInt(x));

        let sum = 0;
        let endTimes = 75;
        let map = new Map<string, number>();

        function blink(stone: number, times: number): number {

            if (times == 0) {
                return 1;
            }
            times--;

            let value = 0;
            let k = `${stone}_${times}`;

            switch (true){

                case map.has(k):
                    value = map.get(k) as number;
                    break;

                case stone === 0:
                    value = blink(1, times);
                    map.set(k, value);
                    break;

                case stone.toString().length % 2 === 0:

                    let half = stone.toString().length / 2;
                    let firstHalf = parseInt(stone.toString().substring(0, half));
                    let secondHalf = parseInt(stone.toString().substring(half));

                    value = blink(firstHalf, times) + blink(secondHalf, times);
                    map.set(k, value);
                    break;
                    
                    default:
                        value = blink(stone * 2024, times);
                        map.set(k, value);
            }

            return value
        }

        sum = stones.reduce((acc, stone, index) => {
            return acc + blink(stone, endTimes);
        }, 0);

       
        return sum.toString();
    }

    getTime(): string {
        return this.time + 'ms';
    }
}