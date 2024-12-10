import ISolver from "@/Interfaces/ISolver";

export default class Solve_10_2 implements ISolver {

    time = 0;

    solve(input: string): string {

        function getReachableNeighbours(point: number[], mtx: number[][]): number[][] {
            let neighbours: number[][] = [];

            let directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

            for (let i = 0; i < directions.length; i++) {
                let [dx, dy] = directions[i];
                let x = point[0] + dx;
                let y = point[1] + dy;
                if (x >= 0 && x < mtx.length && y >= 0 && y < mtx.length) {
                    if (Math.abs(mtx[x][y] - mtx[point[0]][point[1]]) <= 1) {
                        neighbours.push([x, y]);
                    }
                }
            }
            return neighbours;
        }

        function traverse(startPoint: number[], lastValue: number, point: number[], mtx: number[][]) {
            let neighbours = getReachableNeighbours(point, mtx);

            for (let i = 0; i < neighbours.length; i++) {
                let neighbour = neighbours[i];
                let nValue = mtx[neighbour[0]][neighbour[1]];

                if (nValue != lastValue + 1) continue;

                if (nValue == 9) {
                    startPoint[2] = startPoint[2] + 1;
                    sum++;
                } else {
                    traverse(startPoint, nValue, neighbour, mtx);
                }

            }

        }

        let sum = 0;
        let mtx = input.split("\n").map(x => x.split("").map(x => parseInt(x)));
        const size = mtx.length;

        let startPoints: number[][] = [];

        // Add all starting points
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                let el = mtx[i][j];
                if (el == 0) {
                    startPoints.push([i, j]);
                }
            }
        }

        startPoint: for (let i = 0; i < startPoints.length; i++) {
            let startPoint = startPoints[i];
            traverse(startPoint, 0, startPoint, mtx);
        }

        return sum.toString(); // Corect 694
    }

    getTime(): string {
        return this.time + 'ms';
    }
}