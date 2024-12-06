import ISolver from "@/Interfaces/ISolver";
import { debug } from "console";

export default class Solve_6_2 implements ISolver {

    time = 0;

    solve(input: string): string {


        // < v > ^
        let guardVariations = ['<', 'v', '>', '^'];
        const OBSTACOL = '#';
        let matrix = input.split("\n").map(x => x.split(""));
        let sum = 0;
        // directions
        // let dx = 0; // 1, 0, -1
        // let dy = 0; // 1, 0, -1

        let startDirection = [0, 0];
        let startPos = [0, 0];

        let direction = [0, 0];
        let pos = [0, 0];

        let visited = new Set<string>();

        // find guard
        lines: for (let i = 0; i < matrix.length; i++) {
            let line = matrix[i];
            for (let j = 0; j < line.length; j++) {
                let char = line[j];
                if (guardVariations.includes(char)) {
                    pos = [i, j];
                    if (char == '<')
                        direction = [0, -1];
                    if (char == 'v')
                        direction = [1, 0];
                    if (char == '>')
                        direction = [0, 1];
                    if (char == '^')
                        direction = [-1, 0];
                    line[j] = '.';
                    break lines;
                }
            }
        }

        startDirection = structuredClone(direction);
        startPos = structuredClone(pos);

        function posAsVisidetString() {
            return `${pos[0]}-${pos[1]}_${direction[0]}-${direction[1]}`;
        }

        function positionAlreadyVisited() {
            return visited.has(posAsVisidetString());
        }

        function isObstacolAhead() {
            let newPos = [pos[0] + direction[0], pos[1] + direction[1]];
            if (isInsideMatrix(newPos) == false) {
                return false;
            }
            let chAhead = matrix[newPos[0]][newPos[1]];
            if (chAhead == undefined) {
                return false;
            }
            return matrix[newPos[0]][newPos[1]] == OBSTACOL;
        }

        function moveAhead() {
            // mark old position wthn X
            // matrix[pos[0]][pos[1]] = 'X';
            pos[0] += direction[0];
            pos[1] += direction[1];
        }

        function turnRight() {
            let temp = direction[0];
            direction[0] = direction[1];
            direction[1] = -temp;
        }

        function isInsideMatrix(p: number[] = pos) {
            return p[0] >= 0 && p[0] < matrix.length && p[1] >= 0 && p[1] < matrix[0].length;
        }

        // for eatch position
        fx: for (let i = 0; i < matrix.length; i++) {
            let line = matrix[i];
            fy: for (let j = 0; j < line.length; j++) {
                console.log(i, j);

                let char = line[j];
                if (i == startPos[0] && j == startPos[1]) {
                    continue fy;
                }
                if (char == '#') {
                    continue fy;
                }
                matrix[i][j] = '#';


                pos = structuredClone(startPos);
                direction = structuredClone(startDirection);
                visited = new Set<string>();

                patrool: while (true) {

                    if (isInsideMatrix() == false)
                        break patrool;

                    if (positionAlreadyVisited()) {
                        sum++;
                        break patrool;
                    } else {
                        visited.add(posAsVisidetString());
                    }

                    if (isObstacolAhead()) {
                        turnRight();
                        continue;
                    }

                    if (isObstacolAhead()) {
                        turnRight();
                        continue;
                    }

                    moveAhead();
                }
                matrix[i][j] = '.';

            }
        }

        return sum.toString();
    }

    getTime(): string {
        return this.time + 'ms';
    }
}