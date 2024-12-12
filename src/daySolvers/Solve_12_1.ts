import ISolver from "@/Interfaces/ISolver";
import { register } from "module";

export default class Solve_12_1 implements ISolver {

    time = 0;

    solve(input: string): string {

        let sum = 0;
        let perimeter = 0;
        let area = 0;

        let mtx = input.split("\n").map(x => x.split(""));
        // let mtxbk = structuredClone(mtx);
        let len = mtx.length;

        function getNeighbours([x, y]: [number, number]): number[][] {
            let dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];
            let n = [];

            for (let i = 0; i < 4; i++) {
                let [dx, dy] = dir[i];
                let nx = x + dx;
                let ny = y + dy;

                n.push([nx, ny]);

            }
            return n;
        }

        function getPerNeighbours([x, y]: [number, number], e: string): number {

            let dir = getNeighbours([x, y]);
            let p = 0;

            for (let i = 0; i < dir.length; i++) {
                let [nx, ny] = dir[i];
                // let  = x + dx;
                // let  = y + dy;

                if (nx < 0 || nx >= len || ny < 0 || ny >= len) {
                    p++;
                    continue
                }

                if (mtx[nx][ny] !== e && mtx[nx][ny] !== "1") {
                    p++;
                }
            }
            return p;
        }

        function cleanMarking() {
            for (let i = 0; i < len; i++) {
                for (let j = 0; j < len; j++) {
                    if (mtx[i][j] === "1") {
                        mtx[i][j] = "#";
                    }
                }
            }
        }

        function searchRegion([x, y]: [number, number], el: string) {

            let p = getPerNeighbours([x, y], el);
            perimeter += p;
            area++;
            mtx[x][y] = "1";
            // console.log(mtx.map(x => x.join("")).join("\n"));

            let neighbours = getNeighbours([x, y]);

            for (let [nx, ny] of neighbours) {

                if (nx < 0 || nx >= len || ny < 0 || ny >= len) continue;

                if (mtx[nx][ny] === el) {
                    searchRegion([nx, ny], el);
                }
            }
        }

        lines: for (let i = 0; i < len; i++) {
            elements: for (let j = 0; j < len; j++) {
                let element = mtx[i][j];
                if (element !== "#") {
                    perimeter = 0;
                    area = 0;
                    searchRegion([i, j], element);
                    cleanMarking();
                    sum += area * perimeter;
                }
            }
        }


        return sum.toString();
    }


    getTime(): string {
        return this.time + 'ms';
    }
}