import ISolver from "@/Interfaces/ISolver";
import { debug } from "console";

export default class Solve_8_1 implements ISolver {

    time = 0;

    solve(input: string): string {

        let sum = 0;
        let antenasPos = new Map<string, number[][]>();

        let matrix = input.split("\n").map(x => x.split(""));
        let newMatrix = structuredClone(matrix);

        line: for (let i = 0; i < matrix.length; i++) {
            let line = matrix[i];
            element: for (let j = 0; j < line.length; j++) {
                let element = line[j];

                if (element === '.') continue element;

                if (antenasPos.has(element)) {
                    let antenas = antenasPos.get(element) as number[][];
                    antenas.push([i, j]);
                    antenasPos.set(element, antenas);
                } else {
                    antenasPos.set(element, [[i, j]]);
                }

            }

        }

        antenaFrequency: for (let [key, value] of antenasPos) {
            antenaPos: for (let pos of value) {
                let [x, y] = pos;
                otherAntenasPos: for (let value2 of value) {
                    let [x2, y2] = value2;
                    if (x === x2 && y == y2) continue otherAntenasPos;
                    
                    let antinodesPos = [ x + (x - x2), y + (y - y2) ];
                    if (antinodesPos[0] === 0 && antinodesPos[1] === 6){
                        debugger;
                    };
                    if (
                        antinodesPos[0] < 0 || antinodesPos[0] >= matrix.length ||
                        antinodesPos[1] < 0 || antinodesPos[1] >= matrix.length
                    )
                        continue otherAntenasPos;
                    
                    newMatrix[antinodesPos[0]][antinodesPos[1]] = '#';
                }

            }
        }

        console.log(newMatrix.map(x => x.join("")).join("\n"));

        for (let line of newMatrix) {
            for (let element of line) {
                if (element === '#') sum++;
            }
        }


        return sum.toString();
    }

    getTime(): string {
        return this.time + 'ms';
    }
}