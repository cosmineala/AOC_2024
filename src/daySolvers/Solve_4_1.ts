import { registerSolver } from "@/factories/solverFactory";
import ISolver from "@/Interfaces/ISolver";

export default class Solve_4_1 implements ISolver {

    time = 0;

    solve(input: string): string {

        let sum = 0 ;

        let lines = input.split("\n")
        let height = lines.length;
        let width = lines[0].length;
        // let matrix = lines.map(x => x.split(""));

        // check lines

        function countRowMax( matrix: string[][] ) {
            for(let i = 0; i < matrix.length; i++) {
                let row = matrix[i].join("");
                let matches = row.match(/XMAS/g);
                if (matches) {
                    sum += matches?.length;
                }
                // mirror
                matches = row.split("").reverse().join("").match(/XMAS/g);
                if (matches) {
                    sum += matches?.length;
                }
            }
        }

        let mat = lines.map(x => x.split(""));

        countRowMax(mat); // lines

        // check columns
        // go thrue matrix and invert lines and columns
        let newMat = [];
        for (let i = 0; i < height; i++) {
            let row = [];
            for (let j = 0; j < width; j++) {
                row.push(mat[j][i]);
            }
            newMat.push(row);
        }
        console.log('invMax',newMat);
        countRowMax(newMat);
        

        function diagonal(data: string[][], fromBottom: boolean, direction: string) {
            const length = { x: data[0].length, y: data.length };
            const returnMe: string[][] = [];
        
            for (let k = 0; k <= length.x + length.y - 2; ++k) {
                const temp: string[] = [];
                for (let y = length.y - 1; y >= 0; --y) {
                    let x;
                    if (direction === "/") {
                        x = k - (fromBottom ? length.y - y : y);
                    } else {
                        x = k - (fromBottom ? y : length.y - y);
                    }
                    if (x >= 0 && x < length.x) {
                        temp.push(data[y][x]);
                    }
                }
                if (temp.length > 0) {
                    returnMe.push(temp);
                }
            }
            return returnMe;
        }

        console.log(mat);
        console.log(diagonal(mat, false, "/"));
        console.log(diagonal(mat, false, "asdasd"));

        countRowMax(diagonal(mat, false, "/"));
        countRowMax(diagonal(mat, false, "other"));

        return sum.toString();
    }

    getTime(): string {
        return this.time + 'ms';
    }
}